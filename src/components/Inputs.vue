<template>
    <section class="flex flex-col items-center justify-top h-screen dark m-10">
        <section class="w-full max-w-6xl bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Entradas</h2>

            <form class="grid grid-cols-6">
                <input type="number"
                    class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Matrícula" />
                <input type="text"
                    class="col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Cliente" />
                <input type="number"
                    class="col-start-1 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Chofer" />
                <input type="text"
                    class="col-start-3 col-span-2 bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Viaje" />


                <button type="submit"
                    class="col-start-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
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

                    <tr>
                        <td class="px-4 py-2 text-gray-200">123456</td>
                        <td class="px-4 py-2 text-gray-200">Juan Pérez</td>
                        <td class="px-4 py-2 text-gray-200">Madrid - Sevilla</td>
                        <td class="px-4 py-2 text-gray-200">100€</td>
                        <td class="px-4 py-2 text-gray-200">10€</td>
                        <td class="px-4 py-2 text-gray-200">110€</td>
                        <td class="px-4 py-2 text-gray-200">110€</td>
                        <td class="px-4 py-2 flex flex-row">
                            <!-- Botones de acción: -->
                            <img src="/view.svg" alt="Logo vista" class="mr-4">
                            <img src="/pencil.svg" alt="Logo vista" class="mr-4">
                            <img src="/recycle.svg" alt="Logo vista">
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

    </section>

</template>

<script setup>
</script>