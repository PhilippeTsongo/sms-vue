<template>

<div class="">
    <div class="bg-white rounded-md py-3 px-2 ml-0">
        <div class="flex">
            <!-- hide the sidebar -->
            <button v-if="showMenu" v-on:click="toggleShowMenu" class="border border-green-500 rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/> 
                </svg>
            </button>
            <!-- show the side bar -->

            <button v-if="!showMenu" v-on:click="toggleShowMenu" class="border border-green-500 rounded-md p-1 m-auto">
                <svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/> 
                </svg>
            </button>
            <div v-if="showMenu">
               <h1 class="font-bold ml-8 text-2xl text-green-500">MENU</h1>
            </div>
        </div>
    </div>

    <!-- SIDEBAR WITH TITLE -->
    <div v-if="showMenu" class="sidebar pt-3 mb-5 px-2 md:w-48 bg-white">

        <h1 class="bg-green-100 text-center text-green-500 text-4xl p-2 rounded">SMS</h1>    

        <ul class="mt-8">
            <li class="p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase" > <router-link :to="{ name: 'home' }"><i class="fa fa-home mr-1"></i> Dashboard </router-link> </a>
            </li>
        </ul>

        <ul class="mt-5">
            <span class="uppercase text-gray-400 text-xs">Etudiants</span>
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase" > <router-link :to="{ name: 'IndexStudent' }"><i class="fa fa-book mr-1"></i> Etudiants</router-link></a>
            </li>
        </ul>

        <ul class="mt-5">
            <span class="uppercase text-gray-400 text-xs">Staff</span>
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase"> <router-link :to="{ name: 'IndexStaff' }"><i class="fa fa-users mr-1"></i> Staff</router-link> </a>
            </li>
        </ul>

        <ul class="mt-5">
            <span class="uppercase text-gray-400 text-xs">Cours</span>
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase" > <router-link :to="{ name: 'IndexCourse' }"><i class="fa fa-book mr-1"></i> Cours</router-link></a>
            </li>
        </ul>
       
        <ul class="mt-5">
            <span class="uppercase text-gray-400 text-xs">Finance</span>
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase" > <router-link :to="{ name: 'IndexFinance' }"><i class="fa fa-wallet"></i> Finance</router-link></a>
            </li>
        </ul>
        
        <ul class="mt-5">
            <span class="uppercase text-gray-400 text-xs">Paramètres</span>
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase"> <router-link :to="{ name: 'IndexSetup' }"> <i class="fa fa-wrench mr-1"></i> Paramètres</router-link></a>
            </li>
        </ul>

        <ul class="mt-5">
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase"> <router-link :to="{ name: 'IndexUser' }"> <i class="fa fa-users mr-1"></i> Utilisateurs</router-link></a>
            </li>
        </ul>
        <ul class="mt-5">
            <li class="ml-0 mt-2 p-2 hover:bg-[#F5F7FB] hover:rounded">
                <a href="" class="text-gray-900 uppercase"> <router-link :to="{ name: 'logout' }"> <i class="fa fa-power-off mr-1"></i> Logout</router-link></a>
            </li>
        </ul>
    </div>

    <!-- SIDEBAR WITHOUT TITLE -->
    <div v-if="!showMenu" class="sidebar pt-3 pl-3 pr-3 bg-white text-center">

        <h1 class="bg-green-100 text-center text-green-500 text-sm p-2 rounded">SMS</h1>    

        <ul class="mt-8">
            <li class="">
                <a href="" title="Dashboard"> <router-link :to="{ name: 'home' }"><i class="fa fa-home"></i>  </router-link> </a>
            </li>
        </ul>
        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href="" title="Staff"> <router-link :to="{ name: 'IndexStaff' }"><i class="fa fa-users"></i> </router-link> </a>
            </li>
            <li class="ml-0 mt-3">
                <a href="" title="Cours"> <router-link :to="{ name: 'IndexCourse' }"><i class="fa fa-book"></i> </router-link></a>
            </li>
        </ul>
        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href="" title="Etudiants"> <router-link :to="{ name: 'IndexStudent' }"><i class="fa fa-book"></i> </router-link></a>
            </li>
        </ul>
        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href="" title="Finance"> <router-link :to="{ name: 'IndexFinance' }"><i class="fa fa-wallet"></i> </router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href="" title="Paramètres"> <router-link :to="{ name: 'IndexSetup' }"> <i class="fa fa-wrench"></i> </router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href="" title="Utilisateur"> <router-link :to="{ name: 'IndexUser' }"> <i class="fa fa-users"></i> </router-link></a>
            </li>
            
            <li class="ml-0 mt-3">
                <a href="" title="Connexion"> <router-link :to="{ name: 'login' }"> <i class="fa fa-power-off"></i> </router-link></a>
            </li>
            <li class="ml-0 mt-3">
                <a href="" title="Déconnexion"> <router-link :to="{ name: 'logout' }"> <i class="fa fa-power-off"></i> </router-link></a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
  name: "Sidebar",
  components: {  },

  data() {
    return {
      showMenu: true
    };
  },

  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
.sidebar {
  color: gray;
  letter-spacing: 1px;
  font-size: 13px;
  height: 100vh;
  /* position: fixed; */
}

/* .sidebar ul li{
    width: 100%;
 } */

.sidebar ul li a {
  letter-spacing: 1px;
}

@media (max-width: 900px) {
  .sidebar {
    /* display: none; */
  }
}
</style>
