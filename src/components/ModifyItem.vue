<template>
  <div v-if="visible" class="fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
    <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>

    <div class="modal-container bg-gray-100 w-full md:max-w-xl mx-4 rounded-lg shadow-lg z-50">
      <form ref="myForm" @submit.prevent="submitForm" class="modal-content p-6 grid gap-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold mb-2">Detalles del Viaje</h2>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-3 gap-x-4">
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="id">ID:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text" id="id" v-model="entry.id" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="client">Cliente</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text" id="client" v-model="entry.client" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="vatNumber">Matrícula:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" id="vatNumber" v-model="entry.vatNumber" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="choffer">Chofer:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" id="choffer" v-model="entry.choffer" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="travel">Viaje:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text" id="travel" v-model="entry.travel" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="import">Importe:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" step="any" id="import" v-model="entry.import" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="iva">IVA:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" step="any" id="iva" v-model="entry.iva" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="origin">Origen:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text" id="origin" v-model="entry.origin" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="destination">Destino:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="text" id="destination" v-model="entry.destination" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="ivaTotal">IVA Total:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" step="any" id="ivaTotal" v-model="entry.ivaTotal" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="total">Total:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="number" step="any" id="total" v-model="entry.total" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="date">Fecha:</label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              type="date" id="date" :value="formattedDate" @input="updateDate" />
          </div>
        </div>

        <div class="flex justify-end">
          <button type="submit"
            class="ml-auto ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Modificar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script setup>
import { defineProps, computed, ref, watch } from 'vue'
import { updateData } from '@/api/userService.js'
import { useToast } from 'vue-toastification'

const toast = useToast()

const emit = defineEmits(['closeWindows', 'close'])

const props = defineProps({
  visible: Boolean,
  item: Object
})

const entry = ref({
  id: null,
  client: null,
  vatNumber: null,
  choffer: null,
  travel: null,
  import: null,
  iva: null,
  origin: null,
  destination: null,
  ivaTotal: null,
  total: null,
  date: null
})


// Función para formatear la fecha como una función computada
const formattedDate = computed(() => {
  return props.item ? formatDate(props.item.date) : ''
});

// Función para formatear la fecha
const formatDate = (dateString) => {
  if (!dateString) return '' // Si no hay fecha, retorna una cadena vacía

  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // Añadir un 0 delante si el número es menor que 10 para obtener un formato consistente
  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedDay = day < 10 ? `0${day}` : day

  return `${year}-${formattedMonth}-${formattedDay}`
}

// Observador para actualizar el objeto entry cuando cambia props.item
watch(() => props.item, (newValue) => {
  if (newValue) {
    entry.value.id = newValue.id || null
    entry.value.client = newValue.client || null
    entry.value.vatNumber = newValue.vatNumber || null
    entry.value.choffer = newValue.choffer || null
    entry.value.travel = newValue.travel || null
    entry.value.import = newValue.import || null
    entry.value.iva = newValue.iva || null
    entry.value.origin = newValue.origin || null
    entry.value.destination = newValue.destination || null
    entry.value.ivaTotal = newValue.ivaTotal || null
    entry.value.total = newValue.total || null
    entry.value.date = newValue.date || null
  } else {
    // Si props.item es null, se restablecen todos los valores de entry a null
    Object.keys(entry.value).forEach(key => {
      entry.value[key] = null
    })
  }
})


const updateDate = (event) => {
  entry.value.date = event.target.value
}

const submitForm = async (id) => {

     try {
        const response = await updateData(entry.value)
        console.log(response)
        toast.success('Entrada modificada con éxito')
        emit('close')

    } catch (error) {
        console.error('Error', error)
        toast.error('Error al modificar la entrada')
    }
}
</script>

<style scoped>
/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-container {
  max-height: 90vh;
  overflow-y: auto;
}

.modal-content {
  max-width: calc(100% - 2rem);
}
</style>