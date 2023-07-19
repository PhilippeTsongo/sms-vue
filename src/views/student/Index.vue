<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0">

            <Header/>

            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-400"><i class="fa fa-users"></i> Etudiants</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border bg-white p-1 rounded  hover:text-white hover:bg-[#111827]" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouvel étudiant</button>
                    </div>
                </div>
              
                <!-- modal -->
                <div v-if="showModal">
                        <div class="backdrop grid grid-flow-col bg-white rounded">
                            <div class> 
                                <div class="flex ml-14 my-5 md:w-3/4">
                                    <div class="title flex-1">
                                        <h2 class="font-bolde uppercase text-xl"><i class="fa fa-list-ol"></i> Nouvel étudiant</h2>
                                    </div>
                                    <div class="close">
                                        <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-600" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                    </div>
                                </div>

                                <!-- <div class="border px-20 py-5"> -->
                                    <div class="register-form rounded-md border p-10 border-gray-300 md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                        <form @submit.prevent="handleSubmit">
                                            <!-- tab1 -->
                                            <div  v-if="pageOne" class="">
                                                <h2>Identité de l'étudiant</h2>
                                                
                                                <div class="md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Nom</label>
                                                        <input type="text" v-model="firstName" class="block border-b p-2 border-gray-300 w-full" required >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Post-nom</label>
                                                        <input type="text"  v-model="familyName" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Prénom</label>
                                                        <input type="password" v-model="lastName" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>
                                                </div>
                                                <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Genre</label>
                                                        <select v-model="gender" class="block border-b p-2 border-gray-300 w-full" required>
                                                            <option class="select" value="Homme">H</option>
                                                            <option class="select" value="Femme">F</option>
                                                        </select>
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Lieu de naissance</label>
                                                        <input type="text" v-model="placeBirth" class="block border-b p-2 border-gray-300 w-full">
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Date de naissance</label>
                                                        <input type="date" v-model="dateBirth" class="block border-b p-2 border-gray-300 w-full" >
                                                    </div>
                                                </div>
                                                <div class="mt-10 text-right">
                                                    <div class="inline">
                                                        <span href="" @click="showTab2" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Suivant</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- tab2 -->

                                            <div v-if="pageTwo" class="" >
                                                <h2>Adresse de l'étudiant</h2>
                                                
                                                <div class="md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Nationalité</label>
                                                        <input type="text" v-model="country" class="block border-b p-2 border-gray-300 w-full" required >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Province</label>
                                                        <input type="text" v-model="province" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Ville</label>
                                                        <input type="text" v-model="city" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>
                                                </div>
                                                <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Commune</label>
                                                        <input type="text" v-model="commune" class="block border-b p-2 border-gray-300 w-full">
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Quartier</label>
                                                        <input type="text" v-model="quarter" class="block border-b p-2 border-gray-300 w-full" >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Cellule</label>
                                                        <input type="text" v-model="cel" class="block border-b p-2 border-gray-300 w-full" >
                                                    </div>
                                                </div>
                                                <div class="mt-10 text-right">
                                                    <div class="inline">
                                                        <span @click="showTab1" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Retour</span>
                                                        <span @click="showTab3" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Suivant </span>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- tab3 -->

                                            <div v-if="pageThree" class="" >
                                                <h2>Informations des parents de l'étudiant</h2>
                                                
                                                <div class="md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Nom du père</label>
                                                        <input type="text" v-model="fatherName" class="block border-b p-2 border-gray-300 w-full" required >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Nom de la mère</label>
                                                        <input type="text" v-model="motherName" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>

                                                </div>
                                                <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Téléphone</label>
                                                        <input type="text" v-model="fatherTel" class="block border-b p-2 border-gray-300 w-full">
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Professsion</label>
                                                        <input type="text" v-model="fatherTitle" class="block border-b p-2 border-gray-300 w-full">
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Téléphone</label>
                                                        <input type="text" v-model="motherTel" class="block border-b p-2 border-gray-300 w-full" >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Professsion</label>
                                                        <input type="text" v-model="motherTitle" class="block border-b p-2 border-gray-300 w-full">
                                                    </div>
                                                </div>

                                                <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Adresse</label>
                                                        <input type="text" v-model="parentAddress" class="block border-b p-2 border-gray-300 w-full" required >
                                                    </div>
                                                </div>
                                                <div class="mt-10 text-right">
                                                    <div class="inline">
                                                        <span @click="showTab2" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Retour</span>
                                                        <span @click="showTab4" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Suivant</span>
                                                    </div>
                                                </div>
                                            </div>

                                             <!-- tab4 -->

                                             <div v-if="pageFour" class="" >
                                                <h2>Affectation de l'étudiant</h2>
                                                
                                                <div class="md:grid grid-flow-col flex-stretch gap-10">
                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Faculté</label>
                                                        <input type="text" v-model="faculty" class="block border-b p-2 border-gray-300 w-full" required >
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Departement</label>
                                                        <input type="text" v-model="department" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>

                                                    <div class="block md:inline">
                                                        <label for="" class="block text-sm uppercase">Promotion</label>
                                                        <input type="text" v-model="promotion" class="block border-b p-2 border-gray-300 w-full" required>
                                                    </div>

                                                </div>
                                                
                                                <div class="mt-10 text-right">
                                                    <div class="inline">
                                                        <span @click="firstLastTab" class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Retour</span>
                                                        <button class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer"> Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                <!-- </div> -->

                            </div>

                        </div>
                </div>

                <div v-if="showModal == false" class="flex">
                    <div class="">
                        <div class="rounded-md bg-white w-48 p-5 mt-2 ">
                            <div class="title">
                                <h2 class="font-bolder"><i class="fa fa-list-ol"></i> Details</h2>
                            </div>

                            <div class="mt-5 bg-[#F5F7FB] rounded p-5 text-center">
                                <div>210</div>
                                <div class="text-bold">Total</div>
                            </div>

                            <div class="flex justify-between mt-5 bg-[#F5F7FB] p-3 rounded">
                                <div class="text-center pr-6 border-r border-gray-200">
                                    <div> 200 </div>
                                    <div> Actifs </div> 
                                </div>
                                <div class=" text-center">
                                    <div> 10 </div>
                                    <div> Passifs </div> 
                                </div>
                            </div>
                        </div>
                        <div>    
                            <div class="title mt-5">
                                <h2 class="font-bolder"><i class="fa fa-list-ul"></i> Relatifs</h2>
                            </div>
                            <ul class="mt-5">
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexFaculty'}"> <i class="fa-solid fa-rectangle-list"></i> Faculté</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexDepartment'}"> <i class="fa-solid fa-table-list"></i> Departement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexPromotion'}"> <i class="fa-solid fa-list"></i> Promotion </router-link></li>
                            </ul>

                        </div>
                    </div>
                    
                    <div class="flex-1 rounded-md bg-white pt-6 pl-6 pr-6 pb-2 ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="font-bolder"><i class="fa fa-list-ol"></i> Liste d'étudiants</h2>
                            </div>

                            <div class="" style="margin-top: -5px;">
                                <input  type="search" class="p-1 rounded-md border border-gray-200"> 
                                <!-- <span class="search-icon-table">
                                    <i class="fa fa-search"></i>
                                </span> -->
                            </div>

                            <div class="ml-5 p-1 rounded" style="margin-top: -5px; margin-right: -3px;">
                                <a href="" class=""> <router-link :to="{}"> <i class="fa fa-print"></i></router-link></a>

                                <a href="" class="ml-5"> <router-link :to="{ }"> <i class="fa fa-file-excel"></i></router-link></a>

                            </div>
                        </div>

                        <div class="flex flex-col m-3 h-100">
                            <div class="overflow-x-auto sm:-mx-12 lg:-mx-12">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="border-gray-200 rounded">
                                        <table class="rounded border border-gray-200 min-w-full text-left text-sm font-light">
                                            <thead class="bg-[#F5F7FB] ">
                                                <tr class="">
                                                    <th scope="col" class=" px-3 py-3">#</th>
                                                    <th scope="col" class=" px-3 py-3">Matricule</th>
                                                    <th scope="col" class=" px-3 py-3">Images</th>
                                                    <th scope="col" class=" px-3 py-3">Nom & Post Nom</th>
                                                    <th scope="col" class=" px-3 py-3">Classe</th>
                                                    <th scope="col" class=" px-3 py-3">Statut</th>
                                                    <th scope="col" class=" px-3 py-3">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="h-100 border-r border-gray-200">
                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">1</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Philippe Tsongo</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">G3</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>
                                                <tr class="bg-[#F5F7FB]">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">2</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Kambale Makuta</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">L1</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>

                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">3</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Philippe Tsongo</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">G2</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>
                                                <tr class="bg-[#F5F7FB]">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">4</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Jacob Kamate</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">L1</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>

                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">5</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Kazadi Mbalala</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">G2</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>

                                                <tr class="bg-[#F5F7FB]">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">6</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Musondolya Lea</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Thornton</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>

                                                </tr>

                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">7</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Kazadi Mbalala</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">G2</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>
                                                </tr>

                                                <tr class="bg-[#F5F7FB]">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-gray-200">8</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-gray-200">34562M23</td>
                                                    <td class="whitespace-nowrap  px-6 py-2 w-20 font-medium border-r border-gray-200"> 
                                                        <img src="../../../public/images/profiles/phil.jpeg" class=" rounded-full h-8 w-8" alt="">
                                                    </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">Kazadi Mbalala</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200">G2</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500">Actif</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-gray-200 text-green-500"></td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
            </div>
 
       </div>    
    </div>
    </div>

 </template>
 
 <script>
import Head from "../../components/layouts/head.vue";
import Header from "../../components/layouts/Header.vue";
import Sidebar from "../../components/layouts/Sidebar.vue";
import Footer from "../../components/layouts/Footer.vue";

export default {
  name: "IndexStudent",
  components: { Head, Header, Sidebar, Footer },

  data() {
        return {
            text: "Required field are marked *",
            showModal: false,
            pageOne: true,
            pageTwo: false,
            pageThree: false,
            pageFour: false,


            //form fields
            firstName: '',
            familyName: '',
            lastName: '',
            gender: '',
            placeBirth: '',
            dateBirth: '',
            country: '',
            province: '',
            city: '',
            commune: '',
            quarter: '',
            cel: '',
            fatherName: '',
            motherName: '',
            fatherTitle: '',
            motherTitle: '',
            fatherTel: '',
            motherTel: '',
            parentAddress: ''

        };
  },

  // show and close modal
  methods: {
    
    toggleModal() {
        this.showModal = !this.showModal;
    },

    closeToggleModal() {
      this.showModal = !this.showModal;
    },

    showTab1(){
        this.pageOne = !this.pageOne;
        this.pageTwo = !this.pageTwo;
    },

    showTab2(){
        this.pageTwo = !this.pageTwo;
        this.pageOne = !this.pageOne;
    },

    showTab3(){
        this.pageThree = !this.pageThree;
        this.pageTwo = !this.pageTwo;
    },

    showTab4(){
        this.pageFour = !this.pageFour;
        this.pageThree = !this.pageThree;
    },

    firstLastTab(){
        this.pageThree = !this.pageThree;
    }
    

    // closeEvent() {
    //     this.$emit('close')
    // }
  }
};
</script>
 
 <style>
.content {
  width: 100%;
  display: inline-block;
  letter-spacing: 1px;
  font-size: 13px;
}

.content a {
  letter-spacing: 1px;
  font-size: 13px;
}

.title h2 {
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bolder;
}

.backdrop{
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
}

/* added */
.register-form{
    margin: 30px auto;
}
label{
    letter-spacing: 1px;
}

@media (max-width: 900px) {
    .register-form{
        width: 65%;
        margin: 0% 5%;
    }
    .close{
        position: absolute;
        margin-left: 45%;
    }
}

</style>