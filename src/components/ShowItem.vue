<template>
  <div v-if="visible" class="fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
    <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>

    <div class="modal-container bg-gray-100 w-full md:max-w-xl mx-4 rounded-lg shadow-lg z-50">
      <div class="modal-content p-6 grid grid-cols-2 gap-4">
        <div>
          <h2 class="text-lg font-semibold mb-2">Detalles del Viaje</h2>
        </div>
        <div class="flex justify-end">
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>

        <div class="col-span-2 mb-4 grid grid-cols-2 gap-x-4">
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="id">ID:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="text" id="id" :value="item.id" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="client">Cliente</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="text" id="client" :value="item.client" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="vatNumber">Matrícula:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" id="vatNumber" :value="item.vatNumber" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="choffer">Chofer:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" id="choffer" :value="item.choffer" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="travel">Viaje:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="text" id="travel" :value="item.travel" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="import">Importe:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" step="any" id="import" :value="item.import" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="iva">IVA:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" step="any" id="iva" :value="item.iva" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="origin">Origen:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="text" id="origin" :value="item.origin" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="destination">Destino:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="text" id="destination" :value="item.destination" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="ivaTotal">IVA Total:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" step="any" id="ivaTotal" :value="item.ivaTotal" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="total">Total:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="number" step="any" id="total" :value="item.total" />
          </div>
          <div>
            <label class="font-semibold text-sm text-gray-600 pb-1 block" for="date">Fecha:</label>
            <input readonly
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-50 cursor-not-allowed"
              type="date" id="date" :value="formattedDate" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  visible: Boolean,
  item: Object
})

// Función para formatear la fecha como una función computada
const formattedDate = computed(() => {
  return props.item ? formatDate(props.item.date) : '';
});

// Función para formatear la fecha
const formatDate = (dateString) => {
  if (!dateString) return ''; // Si no hay fecha, retorna una cadena vacía

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Añadir un 0 delante si el número es menor que 10 para obtener un formato consistente
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedDay}-${formattedMonth}-${year}`;
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
