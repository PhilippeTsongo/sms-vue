<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0 border-l border-gray-200">

            <Header/>

            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-300 uppercase text-xs"><i class="fa fa-users"></i> Paiement</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border border-green text-green-500 bg-white py-1 px-2 rounded hover:text-white hover:bg-green-500 hover:text-white" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouveau Paiement</button>
                    </div>
                </div>
              
                <!-- modal -->
                <div v-if="showModal">
                    <div class="grid grid-flow-col rounded absolute w-3/4 right-0 top-10 h-auto">
                        <div class> 
                            <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                <div class="flex py-5 w-full">
                                    <div class="title flex-1">
                                        <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Enregistrer un Paiement</h2>
                                    </div>
                                    <div class="">
                                        <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                    </div>
                                </div>

                                <form @submit.prevent="handleSubmit">
                                    <div class="mt-5 pb-5">
                                        <h2 class="uppercase text-green-500 text-xs">Information de l'activité</h2>
                                        <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Departemnt <span class="text-red-500">*</span></label>
                                                <select v-model="department" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option value="Phil">Calculus 1</option>
                                                    <option value="Luc">Web development</option>
                                                </select>
                                            </div>
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Promotion <span class="text-red-500">*</span></label>
                                                <select v-model="promotion" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option value="Phil">Calculus 1</option>
                                                    <option value="Luc">Web development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Etudiant <span class="text-red-500">*</span></label>
                                                <select v-model="student" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option value="TP">Philippe Tsongo</option>
                                                    <option value="TP">Philippe THKV</option>
                                                    <option value="TP">John Doe</option>
                                                    <option value="TP">Jacques Museka</option>
                                                    <option value="TP">Kambale Makusu</option>
                                                </select>
                                            </div>

                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Motifs <span class="text-red-500">*</span></label>
                                                <select v-model="payment_type" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option value="TP">Frais d'étude</option>
                                                    <option value="TP">Frais stage</option>
                                                    <option value="TP">Frais de participation aux examens</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Montant <span class="text-red-500">*</span></label>
                                                <input type="text" v-model="amount" class="block border rounded-md p-2 border-gray-300 w-full" required >
                                            </div>
                                        </div>
                                        <div class="text-left mt-5">
                                            <button class="text-[#111827] border border-[#111827] rounded-md px-3 py-2 hover:bg-green-500 hover:border-green-500 hover:text-white"> <i class="fa fa-paper-plane-top"></i> Enregistrer</button>
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
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexPayment'}"> <i class="fa-solid fa-rectangle-list"></i> Paiement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexOtherReceipt'}"> <i class="fa-solid fa-rectangle-list"></i> Autres recettes</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexExpense'}"> <i class="fa-solid fa-table-list"></i> Dépense</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexBalance'}"> <i class="fa-solid fa-table-list"></i> Balance</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexBudget'}"> <i class="fa-solid fa-list"></i> Budget </router-link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="flex-1 rounded-md bg-white pt-6 pl-6 pr-6 pb-2 ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Liste de paiements</h2>
                            </div>

                            <div class="" style="margin-top: -5px;">
                                <input  type="search" class="p-1 rounded-md border border-gray-100"> 
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
                                        <table class="rounded border border-gray-100 min-w-full text-left text-sm font-light">
                                            <thead class="bg-[#F5F7FB] ">
                                                <tr class="">
                                                    <th scope="col" class="px-3 py-3">#</th>
                                                    <th scope="col" class="px-3 py-3">Numéro</th>
                                                    <th scope="col" class="px-3 py-3">Nom & Post-nom</th>
                                                    <th scope="col" class="px-3 py-3">Departement/Promotion</th>
                                                    <th scope="col" class="px-3 py-3">Montant</th>
                                                    <th scope="col" class="px-3 py-3">Type de paiement</th>
                                                    <th scope="col" class="px-3 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody class="h-100 border-r border-gray-100">
                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-b border-gray-100">1</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-b border-gray-100">34562M23</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Philippe Tsongo </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Computer Science/G2 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100 text-green-500">50 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Frais d'études</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">12-12-2023</td>

                                                </tr>

                                                <tr class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-b border-gray-100">2</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-b border-gray-100">34562M23</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Patrique Mugisho </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Computer Science/G1 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100 text-green-500">50 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Frais d'études</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">12-12-2023</td>

                                                </tr>
                                                <tr class="bg-[#F5F7FB]">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-b border-gray-100">3</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-b border-gray-100">34562M23</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Archippe Nzanzu </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Computer Science/L2 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100 text-green-500">150 </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">Frais d'études</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">12-12-2023</td>

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
  name: "IndexPayment",
  components: { Head, Header, Sidebar, Footer },

  data() {
        return {
            text: "Required field are marked *",
            showModal: false,
            pageOne: true,


            //form fields
            number: '',
            department: '',
            promotion: '',
            student: '',
            payment_type: '',
            montant: '',
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

    handleSubmit(){
        console.log('1' + this.pageOne)

        console.log(
            this.number,
            this.name,
            this.description,
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