<template>
    <section class="flex flex-col items-center justify-top h-screen dark m-10">
        <section class="w-full max-w-6xl bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Entradas</h2>

            <form @submit.prevent="search" class="grid grid-cols-6 gap-4">
            <input v-model="vatNumber" type="number"
                class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                placeholder="Matrícula" />
            <input v-model="client" type="text"
                class="col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                placeholder="Cliente" />
            <input v-model="choffer" type="number"
                class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                placeholder="Chofer" />
            <input v-model="travel" type="text"
                class="col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                placeholder="Viaje" />


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
                        <td class="px-4 py-2 text-gray-200">{{ data.vatNumber }}</td>
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
        <ModalItem :visible="showView" :item="selectedItem" @close="showView = false" />
        <ModifyItem :visible="showModify" :item="selectedItem" @close="showModify = false" />

    </section>

</template>

<script setup>
import { ref, watch } from 'vue'
import { getCity, getEntriesFiltered, deleteEntry } from '@/api/userService.js'
import { useToast } from 'vue-toastification'
import ModalItem from '@/components/ModalItem.vue'
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

const search = async () => {
    try {
        datas.value = await getEntriesFiltered(vatNumber.value, choffer.value, client.value, travel.value)
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

/* watch(datas, (newValue) => {
    search()
}) */
</script>

<style scoped></style>