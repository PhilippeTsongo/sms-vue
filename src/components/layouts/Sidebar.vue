<template>

<div>
    <div class="bg-white rounded-md py-3 px-2 ml-0">
        <div class="flex">
            <button v-on:click="toggleShowMenu" class="border rounded-md p-1">
                <!-- hide the sidebar -->
                <div v-if="showMenu">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="w-7 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/> 
                    </svg>
                </div>

                <!-- show the side bar -->
                <div v-if="!showMenu">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/> 
                    </svg>
                </div>
            </button>
            <div v-if="showMenu">
               <h1 class="font-bold ml-8 text-2xl">MENU</h1>
            </div>
        </div>
    </div>

    <!-- SIDEBAR WITH TITLE -->
    <div v-if="showMenu" class="sidebar pt-5 pl-3 pr-3 md:w-48 bg-gray-900">

        <h1 class="bg-gray-900 font-bold border-b text-center text-5xl">SMS</h1>    

        <ul class="mt-8">
            <li class="">
                <a href=""> <router-link :to="{ name: 'home' }"><i class="fa fa-home"></i> Dashboard </router-link> </a>
            </li>
        </ul>
        <ul class="mt-8">
            Staff
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexStaff' }"><i class="fa fa-users"></i> Staff</router-link> </a>
            </li>
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexCourse' }"><i class="fa fa-book"></i> Cours</router-link></a>
            </li>
        </ul>
        <ul class="mt-8">
            Etudiants
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexStudent' }"><i class="fa fa-book"></i> Etudiants</router-link></a>
            </li>
        </ul>
        <ul class="mt-8">
            Finance
            <li class="ml-0 mt-3">
                <a href="" class="tracking-in-expand-fwd"> <router-link :to="{ name: 'IndexFinance' }"><i class="fa fa-wallet"></i> Finance</router-link></a>
            </li>
        </ul>
            <ul class="mt-8">
            Activités
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexActivity' }"><i class="fa fa-coins"></i> Activités</router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            Paramètres
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexSetup' }"> <i class="fa fa-wrench"></i> Paramètres</router-link></a>
            </li>
        </ul>

        <ul class="mt-8">
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'IndexUser' }"> <i class="fa fa-users"></i> Utilisateurs</router-link></a>
            </li>
            
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'login' }"> <i class="fa fa-power-off"></i> Connexion</router-link></a>
            </li>
            <li class="ml-0 mt-3">
                <a href=""> <router-link :to="{ name: 'logout' }"> <i class="fa fa-power-off"></i> Logout</router-link></a>
            </li>
        </ul>
    </div>

    <!-- SIDEBAR WITHOUT TITLE -->
    <div v-if="!showMenu" class="sidebar pt-5 pl-3 pr-3 bg-gray-900 text-center">


        <h1 class="bg-gray-900 font-bold border-b text-center text-xl">SMS</h1>    

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
                <a href="" title="Activities"> <router-link :to="{ name: 'IndexActivity' }"><i class="fa fa-coins"></i> </router-link></a>
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
  color: white;
  padding: 3px;
}
.sidebar ul li:hover {
  text-align: center;
  /* width: 250px; */
}

.sidebar ul li a:hover {
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px;
  /* text-align: center; */
  /* transition: 0.4s; */
  color: #1f2937;
  width: 100%;
  position: relative;
  /* font-weight: bold; */
  font-size: 13px;
  letter-spacing: 2px;
  /* text-transform: uppercase; */
}

@media (max-width: 900px) {
  .sidebar {
    /* display: none; */
  }
}
</style>
