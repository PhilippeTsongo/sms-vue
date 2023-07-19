<template>
    <div class="m-0">
       <Head/>
       
       <Header/>
       
       <div class="container-fluid ml-0 mr-0 flex">
       
          <Sidebar/>
 
            <div class="content p-5 rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 "><i class="fa fa-users text-[#111827]"></i> Etudiants</h1>

                    <div class="">
                        <a href="" class="bg-[#111827] p-1 rounded text-white"> <router-link :to="{ name: 'create_student'}"> <i class="fa fa-plus-circle"></i> Nouvel étudiant  </router-link></a>
                    </div>
                </div>
                <!-- <div class="rounded-md bg-white p-7 flex">
                    <div class="border-r w-40 mr-10">
                    <a href="" class="text-left text-green-500ray-500"><i class="fa fa-users"></i>  Etudiants</a>
                    </div>
                </div> -->

                <div class="rounded-md bg-white pt-6 pl-6 pr-6 pb-2 mt-2">
                    <div class="bg-[#111827]-100 flex">
                        <div class="title flex-1">
                            <h2 class="font-bolder"><i class="fa fa-list-ol"></i> Liste d'étudiants</h2>
                        </div>

                        <div class="" style="margin-top: -5px;">
                            <input  type="search" class="p-1 rounded-md border border-gray-200"> 
                            <span class="search-icon">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>

                        <div class="ml-5 p-1 rounded bg-[#111827] text-white px-6 " style="margin-top: -5px; margin-right: -3px;">
                            <a href="" class=""> <router-link :to="{}"> <i class="fa fa-print"></i></router-link></a>

                            <a href="" class="ml-5"> <router-link :to="{ }"> <i class="fa fa-file-excel"></i></router-link></a>

                        </div>
                    </div>

                    <div class="flex flex-col m-3 h-100">
                        <div class="overflow-x-auto sm:-mx-12 lg:-mx-12">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="">
                                    <table class="table-rounded border border-gray-200 min-w-full text-left text-sm font-light">
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
                                        <tbody class="h-40 border-r border-gray-200">
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

                        <div class="grid grid-flow-col justify-stretch gap-5 text-center mt-3">
                            <div class=" font-bold">Total: 32</div>
                            <div class=" font-bold">Actifs: 30</div>
                            <div class=" font-bold">Passifs: 2</div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
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
  name: "IndexPromotion",
  components: { Head, Header, Sidebar, Footer }
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
</style>