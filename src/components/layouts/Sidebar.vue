<template>
    <div class="sidebar pt-5 pl-3 pr-3 md:w-48 bg-gray-900">

        <h1 class="bg-gray-900 font-bold border-b text-center text-5xl">SMS</h1>

        <ul class="mt-8">
            <li class="">
                <a href=""> <router-link :to="{ name: 'home' }"><i class="fa fa-home mr-2"></i> Dashboard </router-link> </a>
            </li>
        </ul>
        <ul class="mt-8">
            Staff
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'staff' }"><i class="fa fa-users mr-2"></i> Staff</router-link>    </a>
            </li>
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'course' }"><i class="fa fa-book mr-2"></i> Cours</router-link></a>
            </li>
        </ul>
        <ul class="mt-8">
            Enseignant
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'lecturer' }"><i class="fa fa-users mr-2"></i> Enseignant</router-link>    </a>
            </li>
        </ul>
        <ul class="mt-8">
            Finance
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'finance' }"><i class="fa fa-wallet mr-2"></i> Finance </router-link></a>
            </li>
        </ul>
            <ul class="mt-8">
            Activités
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'activities' }"><i class="fa fa-coins mr-2"></i> Activités</router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            Paramètres
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'setup' }"> <i class="fa fa-wrench mr-2"></i> Paramètres</router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'user' }"> <i class="fa fa-users mr-2"></i> Utilisateurs</router-link></a>
            </li>
            
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'login' }"> <i class="fa fa-power-off mr-2"></i> Connexion</router-link></a>
            </li>
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'logout' }"> <i class="fa fa-power-off mr-2"></i> Déconnexion</router-link></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    components: { }
}
</script>

<style>

.sidebar{
    color: gray;
    letter-spacing: 1px;
    font-size: 13px;
    /* position: fixed; */

}
 
 /* .sidebar ul li{
    width: 100%;
 } */

.sidebar ul li a{
    letter-spacing: 1px;
    color: white;
 }


.sidebar ul li a:hover{
    background-color: #1F2937;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px;  
    /* text-align: center; */
    transition: 0.4s;
    color: white;
    width: 100%;
    position: relative;
 }

@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
}

</style>
