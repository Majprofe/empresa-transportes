<template>
    <div v-if="visible" class="fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
      <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>
  
      <div class="modal-container bg-white w-full md:max-w-xl mx-4 rounded-lg shadow-lg z-50">
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
  
          <div class="col-span-2 mb-4">
            <p class="text-gray-600">ID: {{ item.id }}</p>
            <p class="text-gray-600">Cliente: {{ item.client }}</p>
            <p class="text-gray-600">Matrícula: {{ item.vatNumber }}</p>
            <p class="text-gray-600">Choffer: {{ item.choffer }}</p>
            <p class="text-gray-600">Viaje: {{ item.travel }}</p>
            <p class="text-gray-600">Importe: {{ item.import }}€</p>
            <p class="text-gray-600">IVA: {{ item.iva }}%</p>
            <p class="text-gray-600">Origen: {{ item.origin }}</p>
            <p class="text-gray-600">Destino: {{ item.destination }}</p>
            <p class="text-gray-600">IVA Total: {{ item.ivaTotal }}€</p>
            <p class="text-gray-600">Total: {{ item.total }}€</p>
            <p class="text-gray-600">Fecha: {{ formattedDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    visible: Boolean,
    item: Object
  })
  
  const formattedDate = props.item ? formatDate(props.item.date) : ''
  
  function formatDate(dateString) {
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
  