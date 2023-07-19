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
                       <a href="" class="border bg-white p-1 rounded  hover:text-white hover:bg-[#111827] hover:border-none"> <router-link :to="{ name: 'IndexStudent'}"> <i class="fa fa-plus-circle"></i> Liste d'étudiants  </router-link></a>
                   </div>
               </div>
             
               <div class="flex">
                   <div class="">
                       <div class="rounded-md bg-white w-48 p-5 mt-2 ">
                           <div class="title">
                               <h2 class="font-bolder"><i class="fa fa-list-ol"></i> Détails</h2>
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
                               <h2 class="font-bolder"><i class="fa fa-list-ol"></i> Nouvel étudiant</h2>
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
                                       <div class="rounded border border-gray-200 min-w-full text-left text-sm font-light">
                                           

                                          
                                          <ol class="flex items-center w-full text-sm font-medium text-center">
                                             <li class="flex md:w-full items-center p-3 text-[#111827]">
                                                <span class="flex items-center">
                                                      <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                      </svg>
                                                      Information <span class="hidden sm:inline-flex sm:ml-2">personelle</span>
                                                </span>
                                             </li>
                                             <li class="flex md:w-full items-center ">
                                                <span class="flex items-center">
                                                      <span class="mr-2">2</span>
                                                      Antécedent <span class="hidden sm:inline-flex sm:ml-2">scolaire</span>
                                                </span>
                                             </li>
                                             <li class="flex items-center p-3">
                                                <span class="mr-2">3</span>
                                                <span class="hidden sm:inline-flex sm:ml-2">Informations des</span> parents
                                             </li>
                                          </ol>


                                          








                                       </div>
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
 name: "CreateStudent",
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