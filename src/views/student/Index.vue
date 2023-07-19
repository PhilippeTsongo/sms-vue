<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0">

            <Header/>

            


            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 "><i class="fa fa-users text-[#111827]"></i> Etudiants</h1>

                    <div class="">
                        <button v-if="showModal == false" class="border bg-white p-1 rounded  hover:text-white hover:bg-[#111827]" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouvel étudiant</button>
                    </div>
                </div>
              
                <!-- modal -->
                <div v-if="showModal">
                        <div class="backdrop grid grid-flow-col mt-2 bg-white rounded">
                            <div class> 
                                <div class="flex mx-20 p-5 w-3/4">
                                    <h1 class="flex-1 transform-uppercase">Nouvel étudiant</h1>
                                    <div class="">
                                        <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-600" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                    </div>
                                </div>

                                <form action="" class="border mt-5 ml-20 mr-20 p-5 w-3/4">
                                    <div class="">
                                        <div class="md:grid grid-flow-col justify-stretch gap-5">
                                            <div class="w-2/4" >
                                                <div>
                                                    <label for="firstName" class="block">Nom*</label>
                                                </div>
                                                <div>
                                                    <input type="text" id="firstName" class="border-b p-5">
                                                </div>
                                            </div>

                                            <div class="w-2/4">
                                                <div>
                                                    <label for="FamilyName">Post Nom*</label>
                                                </div>
                                                <div>
                                                    <input type="text" class="border-b p-5">
                                                </div>
                                            </div>
                                        </div>

                                       
                                    </div>
                                    <div class="flex">
                                        <div class="">
                                            <div>
                                                <label for="FamilyName">Post Nom*</label>
                                                <input type="text" class=" p-5">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div>
                                            <label for="FamilyName">Email*</label>
                                            <input type="text" class=" p-5">
                                        </div>
                                    </div>
                                </form>

                                
                            </div>


                        </div>
                </div>

                <div class="flex">
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
                                <li class="py-2 px-2 w-100 mt-2 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexFaculty'}"> <i class="fa-solid fa-rectangle-list"></i> Faculté</router-link></li>
                                <li class="py-2 px-2 w-100 mt-2 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexDepartment'}"> <i class="fa-solid fa-table-list"></i> Departement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-2 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white font-bold"><router-link :to="{ name: 'IndexPromotion'}"> <i class="fa-solid fa-list"></i> Promotion </router-link></li>
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
                                <span class="search-icon-table">
                                    <i class="fa fa-search"></i>
                                </span>
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
      showModal: false
    };
  },

  // show and close modal
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },

    closeToggleModal() {
      this.showModal = !this.showModal;
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

/* added */

/* .modal{
    width: 40%;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    position: absolute;

} */

.backdrop{
    top: 60;
    position: fixed;
    /* background: rgba(0,0,0,0.5); */
    width: 100%;
    height: 100%;
}
</style>