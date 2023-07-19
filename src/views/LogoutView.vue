<template>
    <div class="login">
        <div >
            <form action="" class="pt-20 pb-20">
                <h1>Connexion</h1>

                <div class="mt-10 border rounded input pb-10">
                    
                    <div class="mt-10">
                        <input type="email" id="email" v-model="email" placeholder="Email" class="h-8 p-2" required>
                    </div>

                    <div class="mt-10">
                        <input type="password" id="password" v-model="password" placeholder="mot de passe" class="h-8 p-2" required>
                    </div>

                    <div class="mt-7">
                        <input type="checkbox" v-model="remember" required>
                        <label>Se souvenir de moi</label>
                    </div>

                    <div class="mt-10">
                        <button type="sumit" class="bg-black text-white p-2 rounded w-80 submit">Connexion</button>
                    </div>

                    <div class="mt-10 ml-10">
                        <label for="">
                            ___
                                <a href="" class="text-gray">Mot de passe oublié</a>
                            ___
                        </label>
                    </div>

                </div>
            </form>
        </div>
        
    </div>    
</template>


<script>
export default {
    name: 'LogoutView',
    components: { }

}
</script>

<style>

.login form h1{
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}

.login{
    width: 100%;
    height: 100vh;
    background-color: #f9fafb;
}

.input{
    width: 400px;
    margin: 30px auto;
    background-color: white;
}

.input input{
    width: 80%;
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid black;
}


.input label{
    width: 80%;
    background-color: white;
    display: inline-block;
    margin-left: -60px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    color: black;
}


input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0px 10px 0px -40px;
        position: relative;
    }

input[type="checkbox"] {
    cursor: pointer;
}

.submit {
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}

.line{
    border-bottom: 1px solid black;
}

</style>