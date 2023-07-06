<template>
    <div class="sidebar pt-5 pl-3 pr-3 w-60 ml-1 bg-[#F5F7FB]">

        <ul class="mt-12">
            <li class="">
                <a href=""> <router-link :to="{ name: 'home' }"> <i class="fa fa-home"></i>Dashboard </router-link> </a>
            </li>
        </ul>
        <ul class="mt-5">
            Etudiants

            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"><i class="fa fa-users"></i>Etudiants</router-link>    </a>
            </li>
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"><i class="fa fa-book"></i>Cours</router-link></a>
            </li>
            
        </ul>
        <ul class="mt-5">
            Finance
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"><i class="fa fa-wallet"></i>Paiements </router-link></a>
            </li>
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"><i class="fa fa-coins"></i>Budget </router-link></a>
            </li>
        </ul>
            <ul class="mt-5">
            Activités
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"> <i class="fa fa-clock"></i>Horaires</router-link></a>
            </li>
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"><i class="fa fa-coins"></i>Activités</router-link></a>
            </li>
        </ul>

        <ul class="mt-5">
            Paramètres
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"> <i class="fa fa-wrench"></i>Paramètres</router-link></a>
            </li>
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"> <i class="fa fa-user"></i>Profile</router-link></a>
            </li>
        </ul>

        <ul class="mt-5">
            <li class="ml-0 mt-5">
                <a href=""> <router-link :to="{ name: 'student' }"> <i class="fa fa-users"></i>Utilisateurs</router-link></a>
            </li>
            
            <li class="ml-0 mt-2">
                <a href=""> <router-link :to="{ name: 'student' }"> <i class="fa fa-power-off"></i>econnexion</router-link></a>
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
    color: silver;
    letter-spacing: 1px;
    font-size: 13px;
    /* position: fixed; */

}
 
 /* .sidebar ul li{
    width: 100%;
 } */

.sidebar ul li a{
    color: #111827;
    letter-spacing: 1px;
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
