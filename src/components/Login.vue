<template>
    <section class="flex flex-col items-center justify-top h-screen dark m-20">
        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Login</h2>
            <form @submit.prevent="userLogin" class="flex flex-col">
                <input v-model="email" placeholder="Email"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="email">
                <input v-model="password" placeholder="Password"
                    class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="password">
                <!-- <div class="flex items-center justify-between flex-wrap">
                    <label class="text-sm text-gray-200 cursor-pointer" for="remember-me">
                        <input class="mr-2" id="remember-me" type="checkbox">
                        Remember me
                    </label>
                    <a class="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                    <p class="text-white mt-4"> Don't have an account? <a
                            class="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Signup</a></p>
                </div> -->
                <button
                    class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    type="submit">Login</button>
            </form>
        </div>
    </section>

</template>

<script setup>
import { ref } from "vue"
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const router = useRouter()
const toast = useToast()
const email = ref('')
const password = ref('')
const userLogin = async () => {
    try {
        const url = `https://aao4-latest.onrender.com/User/${email.value}/${password.value}`.toString()
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Response was not ok')
        }
        const data = await response.json()
        if (data) {
            toast.success('Usuario logueado con éxito')
            // Navegar a la vista principal
            router.push('/main')
        } else {
            toast.error('Usuario o contraseña incorrectos')
        }

    } catch (error) {
        console.log(error)
    }
}
</script>