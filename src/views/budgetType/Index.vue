<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0 border-l border-gray-200">

            <Header/>

            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-300 uppercase text-xs"><i class="fa fa-users"></i> Type de prévision budgetaire</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border border-green text-green-500 bg-white py-1 px-2 rounded hover:text-white hover:bg-green-500 hover:text-white" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouvelle promotion</button>
                    </div>
                </div>
              
                <!-- new modal -->
                <div v-if="showModal">
                        <div class="grid grid-flow-col rounded absolute w-96 top-20 right-0 h-auto">
                            <div class> 
                                <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <div class="flex py-5 w-full">
                                        <div class="title flex-1">
                                            <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Type de prévision</h2>
                                        </div>
                                        <div class="">
                                            <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                        </div>
                                    </div>

                                    <form @submit.prevent="newBudgetType">

                                        <div class="mt-5 pb-5">
                                            <h2 class="uppercase text-green-500 text-xs">Informations du type de prévision</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                            
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom du type de prévision <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="formData.name" class="block border rounded-md p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Description</label>
                                                    <textarea v-model="formData.description" class="block border rounded-md p-2 border-gray-300 w-full"> </textarea>   
                                                </div>
                                            </div>
                                            
                                            <div class="mt-10 text-center">
                                                <button class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2 hover:border-none hover:bg-green-500 hover:text-white"> <i class="fa fa-paper-plane-top"></i> Enregistrer</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>
                </div>


                <!-- new modal -->
                <div v-if="showModalEdit">
                        <div class="grid grid-flow-col rounded absolute w-96 top-20 right-0 h-auto">
                            <div class> 
                                <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <div class="flex py-5 w-full">
                                        <div class="title flex-1">
                                            <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Modifiez le type de prévision</h2>
                                        </div>
                                        <div class="">
                                            <button v-if="showModalEdit" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModalEdit"><i class="fa fa-xmark"></i> </button>
                                        </div>
                                    </div>

                                    <form @submit.prevent="updateBudgetType(budgetTypeData.id)">

                                        <div class="mt-5 pb-5">
                                            <h2 class="uppercase text-green-500 text-xs">Informations du type de prévision</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                            
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="budgetTypeData.name" class="block border rounded-md p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Description</label>
                                                    <textarea v-model="budgetTypeData.description" class="block border rounded-md p-2 border-gray-300 w-full"> </textarea>   
                                                </div>
                                            </div>
                                            <div class="mt-10 text-center">
                                                <button class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2 hover:border-none hover:bg-green-500 hover:text-white"> <i class="fa fa-paper-plane-top"></i> Enregistrer</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>
                </div>

                <div class="flex">
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
                                <div class="text-center pr-2 border-r border-gray-200">
                                    <div> 200 </div>
                                    <div> Actives </div> 
                                </div>
                                <div class=" text-center">
                                    <div> 10 </div>
                                    <div> Passives </div> 
                                </div>
                            </div>
                        </div>
                        <div>    
                            <div class="title mt-5">
                                <h2 class="uppercase text-green-400"><i class="fa fa-list-ul"></i> Relatifs</h2>
                            </div>
                            <ul class="mt-5">
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexFees'}"> <i class="fa-solid fa-rectangle-list"></i> Frais / Motif de paiement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexAcademicYear'}"> <i class="fa-solid fa-rectangle-list"></i> Année académique</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexBudgetType'}"> <i class="fa-solid fa-rectangle-list"></i> Type de prévision du budget</router-link></li>

                            </ul>

                        </div>
                    </div>
                    
                    <div class="flex-1 rounded-md bg-white pt-6 pl-6 pr-6 pb-2 ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Liste de types de prévision budgetaire</h2>
                            </div>

                            <div class="" style="margin-top: -5px;">
                                <input  type="search" class="p-1 rounded-md border border-gray-200"> 
                            </div>
                            <div class="ml-5 p-1 rounded" style="margin-top: -5px; margin-right: -3px;">
                                <a href="" class=""> <router-link :to="{}"> <i class="fa fa-print"></i></router-link></a>
                                <a href="" class="ml-5"> <router-link :to="{ }"> <i class="fa fa-file-excel"></i></router-link></a>
                            </div>
                        </div>

                        <div class="flex flex-col m-3 h-100">
                            <div class="overflow-x-auto sm:-mx-12 lg:-mx-12">
                                <div class="inline-block w-96 md:w-full py-2 sm:px-6 lg:px-8">
                                    <div class="border-gray-200 rounded">
                                        <table class="rounded border border-gray-200 w-96 md:w-full text-left text-sm font-light">
                                            <thead class="bg-[#F5F7FB] ">
                                                <tr class="">
                                                    <th scope="col" class=" px-3 py-3">#</th>
                                                    <th scope="col" class=" px-3 py-3">Nom du type de prévision</th>
                                                    <th scope="col" class=" px-3 py-3">Description</th>
                                                    <th scope="col" class=" px-3 py-3">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody class="h-100 border-r border-b border-gray-200">
                                                <tr v-for="budget_type in budget_types" :key="budget_type.id" class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-b border-gray-200">1</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-200">{{ budget_type.name }}</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-200">{{ budget_type.description }}</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-200">
                                                        <button @click="dataPromotion(budget_type.id)" class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2"> Edit</button>

                                                    </td>
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

// import axios from "axios";
import {getBudgetType, addBudgetType, showBudgetType, editBudgetType } from '../../jscore/init.js';
import {successMessage, errorMessage} from '../../jscore/IoNotification.js';


export default {
  name: "IndexBudgetType",
  components: { Head, Header, Sidebar, Footer },

  data() {
        return {
            showModal: false,
            showModalEdit: false,
            pageOne: true,

            budget_types: {},
            budgetTypeData: {}, 

            //form fields
            formData: {
                name: '',
                description: ''
            }
        };
  },

  mounted(){
        this.fetchBudgetTypes();
    },

    methods: {
        //budget type list
        fetchBudgetTypes(){

            getBudgetType()
            .then(response => {
                this.budget_types = response.data.budget_type;
            })
            .catch(error => {
                console.log(error);
            });
        },

        //new budget typee
        newBudgetType(){
            addBudgetType(this.formData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab    
                this.showModal = !this.showModal;

                //fetch List
                this.fetchBudgetTypes();
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            })
        },

        //new budget type
        dataBudgetType(budget_type){
            //open the tab    
            this.showModalEdit = !this.showModalEdit;

            showBudgetType(budget_type)
            .then(response => {

                this.budgetTypeData.id = budget_type;
                this.budgetTypeData.name = response.data.budget_type.name;
                this.budgetTypeData.description = response.data.budget_type.description;
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            });
        },

        showBudgetTypeProfile(budget_type) {
            // When the "Data Profile" button is clicked, fetch the selected course profile
            this.dataBudgetType(budget_type);
        },

        //update budget type
        updateBudgetType(budget_type){

            editBudgetType(budget_type, this.budgetTypeData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab  
                this.showModalEdit = !this.showModalEdit;
                //fetch List
                this.fetchBudgetTypes();
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            })
        },

        //togle modal
        toggleModal(){
            this.showModal = !this.showModal;
        },

        toggleModalEdit(){
            this.showModalEdit = !this.showModalEdit;
        },
    
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
        margin-left: 100%;
    }
}

</style>