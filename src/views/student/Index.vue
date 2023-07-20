<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0">

            <Header/>

            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-300"><i class="fa fa-users"></i> Etudiants</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border border-green text-green-500 bg-white p-1 rounded hover:text-white hover:bg-green-500 hover:text-white" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouvel étudiant</button>
                    </div>
                </div>
              
                <!-- modal -->
                <div v-if="showModal">
                        <div class="backdrop grid grid-flow-col bg-white rounded">
                            <div class> 
                                <div class="flex ml-14 my-5 md:w-3/4">
                                    <div class="title flex-1">
                                        <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Nouvel étudiant</h2>
                                    </div>
                                    <div class="close">
                                        <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                    </div>
                                </div>

                                <div class="register-form rounded-md border p-10 border-gray-300 md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <form @submit.prevent="handleSubmit">
                                        <!-- tab1 -->

                                        <!-- step label -->
                                        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500  sm:text-base">
                                            
                                            <li  :class="pageOne ? 'text-green-500 font-bold' : '' " class="flex md:w-full items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                                                <span class="flex items-center ">
                                                    <svg  :class="pageOne ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5': '1' " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="mr-2">1</span>Identité 
                                                </span>
                                            </li>
                                            <li :class="pageTwo ? 'text-green-500 font-bold' : '' " class="flex md:w-full items-center after:w-full after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                                                <span class="flex items-center">
                                                    <svg  :class="pageTwo ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5': '' " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="mr-2">2</span>Adresse
                                                </span>
                                            </li>

                                            <li :class="pageThree ? 'text-green-500 font-bold' : '' " class="flex md:w-full items-center after:w-full after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                                                <span class="flex items-center">
                                                    <svg :class="pageThree ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5': '' " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="mr-2">3</span>Parents
                                                </span>
                                            </li>

                                            <li :class="pageFour ? 'text-green-500 font-bold' : '' " class="flex items-center">
                                                <svg :class="pageFour ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5': '' " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                </svg>
                                                <span class="mr-2">4</span>Affectation
                                            </li>
                                        </ol>

                                        <div  v-if="pageOne" class="mt-10">
                                            <h2 class="uppercase text-green-400 text-xs">Identité de l'étudiant</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoire *</h5>
                                            
                                            <div class="mt-10 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="firstName" class="block border rounded-md p-2 border-gray-300 w-full" required >
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Post-nom <span class="text-red-500">*</span></label>
                                                    <input type="text"  v-model="familyName" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Prénom</label>
                                                    <input type="text" v-model="lastName" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Genre (Homme/Femme) <span class="text-red-500">*</span></label>
                                                    <select v-model="gender" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                        <option class="select" value="Homme">H</option>
                                                        <option class="select" value="Femme">F</option>
                                                    </select>
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Lieu de naissance</label>
                                                    <input type="text" v-model="placeBirth" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Date de naissance</label>
                                                    <input type="date" v-model="dateBirth" class="block border rounded-md p-2 border-gray-300 w-full" >
                                                </div>
                                            </div>
                                            <div class="mt-10 text-right">
                                                <div class="inline">
                                                    <span href="" @click="showTab2" class="rounded-md px-3 py-2 ml-5 border  text-['#111827'] hover:cursor-pointer hover:bg-[#111827] hover:text-white hover:border-[#111827]"> <i class="fa fa-chevron-right"></i> Suivant</span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- tab2 -->

                                        <div v-if="pageTwo" class="mt-10" >
                                            <h2 class="uppercase text-green-400 text-xs">Adresse de l'étudiant</h2>
                                            
                                            <h5 class="mt-3 text-red-500">Les champs obligatoire *</h5>

                                            <div class="mt-10 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nationalité</label>
                                                    <input type="text" v-model="country" class="block border rounded-md p-2 border-gray-300 w-full" >
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Province</label>
                                                    <input type="text" v-model="province" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Ville</label>
                                                    <input type="text" v-model="city" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Commune</label>
                                                    <input type="text" v-model="commune" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Quartier</label>
                                                    <input type="text" v-model="quarter" class="block border rounded-md p-2 border-gray-300 w-full" >
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Cellule</label>
                                                    <input type="text" v-model="cel" class="block border rounded-md p-2 border-gray-300 w-full" >
                                                </div>
                                            </div>
                                            <div class="mt-10 text-right">
                                                <div class="inline">
                                                    <span @click="showTab1" class="rounded-md px-3 py-2 ml-5 hover:cursor-pointer text-[#111827] hover:border"> <i class="fa fa-chevron-left"></i> Retour</span>
                                                    <span @click="showTab3" class="rounded-md px-3 py-2 ml-5 border  text-['#111827'] hover:cursor-pointer hover:bg-[#111827] hover:text-white hover:border-[#111827]"> <i class="fa fa-chevron-right"></i> Suivant </span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- tab3 -->
                                        <div v-if="pageThree" class="mt-10" >
                                            <h2 class="uppercase text-green-400 text-xs">Informations des parents de l'étudiant</h2>
                                            
                                            <h5 class="mt-3 text-red-500">Les champs obligatoire *</h5>

                                            <div class="mt-10 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom du père</label>
                                                    <input type="text" v-model="fatherName" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom de la mère</label>
                                                    <input type="text" v-model="motherName" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Téléphone</label>
                                                    <input type="text" v-model="fatherTel" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Professsion</label>
                                                    <input type="text" v-model="fatherTitle" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Téléphone</label>
                                                    <input type="text" v-model="motherTel" class="block border rounded-md p-2 border-gray-300 w-full" >
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Professsion</label>
                                                    <input type="text" v-model="motherTitle" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>
                                            </div>

                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Adresse</label>
                                                    <input type="text" v-model="parentAddress" class="block border rounded-md p-2 border-gray-300 w-full">
                                                </div>
                                            </div>
                                            <div class="mt-10 text-right">
                                                <div class="inline">
                                                    <span @click="secondLastTab" class="rounded-md px-3 py-2 ml-5 hover:cursor-pointer text-[#111827] hover:border"> <i class="fa fa-chevron-left"></i> Retour</span>
                                                    <span @click="showTab4" class="rounded-md px-3 py-2 ml-5 border  text-['#111827'] hover:cursor-pointer hover:bg-[#111827] hover:text-white hover:border-[#111827]"> <i class="fa fa-chevron-right"></i> Suivant</span>
                                                </div>
                                            </div>
                                        </div>

                                            <!-- tab4 -->

                                            <div v-if="pageFour" class="mt-10" >
                                            <h2 class="uppercase text-green-400 text-xs">Affectation de l'étudiant</h2>
                                            
                                            <h5 class="mt-3 text-red-500">Les champs obligatoire *</h5>

                                            <div class="mt-10 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Faculté <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="faculty" class="block border rounded-md p-2 border-gray-300 w-full" required >
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Departement <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="department" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Promotion <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="promotion" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                </div>

                                            </div>
                                            
                                            <div class="mt-10 text-right">
                                                <div class="inline">
                                                    <span @click="firstLastTab" class="rounded-md px-3 py-2 ml-5 hover:cursor-pointer text-[#111827] hover:border"> <i class="fa fa-chevron-left"></i> Retour</span>
                                                    <button class="text-white rounded-md px-3 py-2 bg-[#111827] ml-5 hover:cursor-pointer hover:bg-green-500 font-bold"> <i class="fa fa-paper-plane-top"></i> Enregistrer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                </div>

                <div v-if="showModal == false" class="flex">
                    <div class="">
                        <div class="rounded-md bg-white w-48 p-5 mt-2 ">
                            <div class="title">
                                <h2 class="uppercase text-green-400"><i class="fa fa-list-ol"></i> Détails</h2>
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
                                <h2 class="uppercase text-green-400"><i class="fa fa-list-ul"></i> Relatifs</h2>
                            </div>
                            <ul class="mt-5">
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] font-bold"><router-link :to="{ name: 'IndexFaculty'}"> <i class="fa-solid fa-rectangle-list"></i> Faculté</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] font-bold"><router-link :to="{ name: 'IndexDepartment'}"> <i class="fa-solid fa-table-list"></i> Departement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] font-bold"><router-link :to="{ name: 'IndexPromotion'}"> <i class="fa-solid fa-list"></i> Promotion </router-link></li>
                            </ul>

                        </div>
                    </div>
                    
                    <div class="flex-1 rounded-md bg-white pt-6 pl-6 pr-6 pb-2 ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Liste d'étudiants</h2>
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
            parentAddress: '',
            faculty: '',
            department: '',
            promotion: ''

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
        this.pageFour = !this.pageFour;
    },

    secondLastTab(){
        this.pageTwo = !this.pageTwo;
        this.pageThree = !this.pageThree;
    },

    handleSubmit(){
        console.log('1' + this.pageOne + '| 2' + this.pageTwo + '| 3' + this.pageThree + '| 4' + this.pageFour)

        console.log(
            this.firstName,
            this.familyName,
            this.lastName,
            this.gender,
            this.placeBirth,
            this.dateBirth,
            this.country,
            this.province,
            this.city,
            this.commune,
            this.quarter,
            this.cel,
            this.fatherName,
            this.motherName,
            this.fatherTitle,
            this.motherTitle,
            this.fatherTel,
            this.motherTel,
            this.parentAddress,
            this.faculty,
            this.department,
            this.promotion
        )
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