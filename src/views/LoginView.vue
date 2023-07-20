<template>
    <div class="login">
        <div >
            <form action="" class="pt-14 pb-20">
                <div class="text-center">
                    <h1 class="uppercase text-lg text-green-500 text-bold">Connexion</h1>
                </div>

                <div class="mt-10 px-10 py-5 border rounded ml-auto mr-auto w-96">
                    
                    <div class="mt-10">
                        <input v-model="email" class="border border-gray-300 w-full rounded px-5 py-2" type="email" placeholder="Email" required>
                    </div>

                    <div class="mt-10">
                        <input v-model="password" class="border border-gray-300 w-full rounded px-5 py-2" type="password" placeholder="mot de passe" required>
                    </div>

                    <div class="mt-7 ml-10">
                        <input type="checkbox" v-model="remember" required>
                        <label class="text-gray-400">Se souvenir de moi</label>
                    </div>

                    <div class="mt-10">
                        <button type="sumit" class="bg-green-500 w-full text-white p-2 rounded w-80 uppercase text-lg submit">Connexion</button>
                    </div>

                    <div class="mt-10 text-center">
                        <a href="" class="text-gray-400">Mot de passe oublié</a>
                    </div>

                </div>
            </form>
        </div>
        
    </div>    
</template>


<script>
export default {
    name: 'LoginView',
    components: { }

}
</script>

<style>

.login form h1{
    letter-spacing: 2px;
}

.submit {
    letter-spacing: 2px;
}

</style>