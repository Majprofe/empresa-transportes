<template>
    <section class="flex flex-col items-center justify-top h-screen dark m-10">
        <section class="w-full max-w-6xl bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Entradas</h2>

            <form @submit.prevent="search" class="grid grid-cols-6 gap-4">
                <select placeholder="Matrícula"
                    class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                    v-model="vatNumber">
                    <option value="null" selected>Matrícula</option>
                    <option v-for="option in listVatNumbers" :key=option.id :value="option.id">
                        {{ option.name }}
                    </option>
                </select>

                <input v-model="client" type="text"
                    class="col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                    placeholder="Cliente" />
                <select placeholder="Choffer"
                    class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                    v-model="choffer">
                    <option value="null" selected>Conductor</option>
                    <option v-for="option in listChoffers" :key=option.id :value="option.id">
                        {{ option.name }}
                    </option>
                </select>
                <div class="realative col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full">
                    <input v-model="travel" @input="filterCities" @focus="showDropdownFunc" @blur="hideDropdown" type="text"
                       class="bg-gray-700 text-gray-200 border-0 rounded-md focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full" 
                        placeholder="Viaje" />
                    <ul v-if="showDropdown && filteredCities.length > 0 && !selectedCity"
                        class="absolute z-10 text-gray-800 bg-white border border-gray-200 rounded-md mt-1 py-1 px-3 max-w-64 max-h-32 overflow-y-auto">
                        <li v-for="city in filteredCities" :key="city.id" @click="selectCity(city)">{{ city.name }}</li>
                    </ul>
                </div>

                <button type="submit"
                    class="col-start-6 col-span-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold p-2 px-4 rounded-md mb-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
                    Buscar
                </button>
            </form>
        </section>
        <section class="w-full max-w-6xl bg-gray-800 rounded-lg shadow-md p-6 mt-2">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Resultados</h2>
            <table class="min-w-full divide-y divide-gray-700">
                <thead class="bg-gray-700">
                    <tr>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Matrícula</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Conductor</th>

                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Cliente</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Viaje</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Importe</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">IVA</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Total IVA</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Importe Total</th>
                        <th scope="col" class="text-left text-gray-200 px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-800 divide-y divide-gray-700">

                    <tr v-for="data in datas" :key="data.id">
                        <td class="px-4 py-2 text-gray-200">{{ getVatNumberName(data.vatNumber) }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ getChofferName(data.choffer) }}</td>
                        <!-- Cambiarlo para que salga el nombre aquí y en la matrícula-->
                        <td class="px-4 py-2 text-gray-200">{{ data.client }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ data.travel }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ data.import }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ data.iva }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ data.ivaTotal }}</td>
                        <td class="px-4 py-2 text-gray-200">{{ data.total }}</td>
                        <td class="px-4 py-2 flex flex-row">
                            <!-- Botones de acción: -->
                            <img @click="viewItem(data)" src="/view.svg" alt="Logo vista" class="mr-4">
                            <img @click="modifyItem(data)" src="/pencil.svg" alt="Logo vista" class="mr-4">
                            <img @click="deleteItem(data.id)" src="/recycle.svg" alt="Logo vista">
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <!-- Modal de detalles del ítem -->
        <ShowItem :visible="showView" :item="selectedItem" @close="showView = false" />
        <ModifyItem :visible="showModify" :item="selectedItem" @close="showModify = false" />

    </section>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getCity, getVatNumber, getChoffer, getEntriesFiltered, deleteEntry } from '@/api/userService.js'
import { useToast } from 'vue-toastification'
import ShowItem from '@/components/ShowItem.vue'
import ModifyItem from '@/components/ModifyItem.vue'

const vatNumber = ref(null)
const choffer = ref(null)
const client = ref(null)
const travel = ref(null)
const datas = ref([])
const toast = useToast()
const showView = ref(false)
const showModify = ref(false)
const selectedItem = ref(null)
const listChoffers = ref([])
const listVatNumbers = ref([])
const listCities = ref([])
const selectedCity = ref(null)
const showCitiesDropdown = ref(false)

onMounted(async () => {
    try {
        listChoffers.value = await getChoffer()
        listVatNumbers.value = await getVatNumber()
        listCities.value = await getCity()
    } catch (error) {
        console.error('Error', error)
    }
})

const search = async () => {
    try {
        datas.value = await getEntriesFiltered(vatNumber.value, choffer.value, client.value, travel.value)
        console.log('datas', datas.value)
    } catch (error) {
        console.error('Error', error)
    }
}

const deleteItem = async (id) => {
    try {
        await deleteEntry(id)
        datas.value = datas.value.filter(entry => entry.id !== id)
        toast.success('Entrada eliminada con éxito')

    } catch (error) {
        console.error('Error', error)
        toast.error('Error al eliminar la entrada')
    }
}

const viewItem = (item) => {
    selectedItem.value = item
    showView.value = true
}

const modifyItem = (item) => {
    selectedItem.value = item
    showModify.value = true
}

const getChofferName = (id) => {
    const choffer = listChoffers.value.find(idChoffer => idChoffer.id === id)
    return choffer ? choffer.name : 'No asignado'
}

const getVatNumberName = (id) => {
    const vatNumber = listVatNumbers.value.find(idVatNumber => idVatNumber.id === id)
    return vatNumber ? vatNumber.name : 'No asignado'
}

const filteredCities = computed(() => {
    return listCities.value.filter(city => city.name.toLowerCase().includes(travel.value ? travel.value.toLowerCase() : ''))
})

const filterCities = () => {
    // Filtra las ciudades mientras se escribe en el input
    if (!travel.value) {
        return listCities.value
    } else {
        return listCities.value.filter(city => city.name.toLowerCase().includes(travel.value.toLowerCase()))
    }
}

const selectCity = (city) => {
    // Actualiza el valor del input con la ciudad seleccionada
    console.log("entrando")
    travel.value = city.name
    console.log(travel.value)
    selectedCity.value = city
}

const hideCitiesDropdown = () => {
    // Oculta la lista desplegable de ciudades cuando el campo de entrada pierde el foco
    showCitiesDropdown.value = false
}

const showDropdown = ref(false)

const hideDropdown = () => {
    showDropdown.value = false
}

const showDropdownFunc = () => {
    showDropdown.value = true
}

/* watch(datas, (newValue) => {
    search()
}) */
</script>

<style scoped>
.relative {
    position: relative;
}

/* Estilo para la lista desplegable */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 128px;
    /* Altura máxima de la lista desplegable */
    width: calc(100% - 0.5rem);
    /* Ancho igual al del input */
}

/* Estilo para los elementos de la lista desplegable */
ul li {
    padding: 0.5rem;
    cursor: pointer;
    /* Cambia el cursor a flecha */
}

/* Resaltar elemento sobre el que se encuentra el cursor */
ul li:hover {
    background-color: #f0f0f0;
    /* Cambia el fondo al pasar el ratón */
}
</style>
