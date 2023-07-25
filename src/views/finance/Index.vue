<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0 border-l border-gray-200">

            <Header/>

            <div class="content rounded-md bg-[#F5F7FB] mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-300 uppercase text-xs"><i class="fa fa-users"></i> Promotion</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border border-green text-green-500 bg-white py-1 px-2 rounded hover:text-white hover:bg-green-500 hover:text-white" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouvelle promotion</button>
                    </div>
                </div>
              
                <!-- modal -->
                <div v-if="showModal">
                        <div class="grid grid-flow-col rounded absolute w-96 top-20 right-0 h-auto">
                            <div class> 
                                <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <div class="flex py-5 w-full">
                                        <div class="title flex-1">
                                            <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Nouvelle promotion</h2>
                                        </div>
                                        <div class="">
                                            <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                        </div>
                                    </div>

                                    <form @submit.prevent="handleSubmit">

                                        <div class="mt-5 pb-5">
                                            <h2 class="uppercase text-green-500 text-xs">Information de la promotion</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoire *</h5>
                                            
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="name" class="block border rounded-md p-2 border-gray-300 w-full" required >
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
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexPayment'}"> <i class="fa-solid fa-rectangle-list"></i> Paiement</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexOtherReceipt'}"> <i class="fa-solid fa-rectangle-list"></i> Autres recettes</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexExpense'}"> <i class="fa-solid fa-table-list"></i> Dépense</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexStaffPayment'}"> <i class="fa-solid fa-table-list"></i> Paiment des employés</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexBalance'}"> <i class="fa-solid fa-table-list"></i> Balance</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexBudget'}"> <i class="fa-solid fa-list"></i> Budget </router-link></li>
                            </ul>

                        </div>
                    </div>
                    
                    <div class="flex-1 rounded-md bg-white px-5 py-5 ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Situation financière</h2>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="md:grid grid-flow-col justify-stretch gap-5">
                                <div class="rounded-md bg-green-100 p-4 text-green-500 staff">
                                    <h2 class=""> Recettes</h2>
                                    <div class="flex mt-3 relative">
                                    <div>
                                        <h1 class="text-2xl">700$</h1>
                                    </div>
                                        <div class="mt-1 absolute right-0">
                                            <span class="bg-white rounded-full text-xs py-1 px-2 " >Montant de prévision 25000$</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-md bg-blue-100 p-4 text-blue-500 staff">
                                    <h2 class="">Dépenses</h2>
                                    <div class="flex mt-2 relative">
                                    <div>
                                        <h1 class="text-2xl">300$</h1>
                                    </div>
                                        <div class="mt-1 absolute right-0">
                                            <span class="bg-white rounded-full  border-red-300 text-xs ml-3 py-1 px-2">Montant de prévision 15000$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="md:grid grid-flow-col mt-5 justify-stretch gap-5">
                                <div class="rounded-md bg-green-100 p-4 text-green-500 staff">
                                    <h2 class="">Autres recettes</h2>
                                    <div class="flex mt-3 relative">
                                        <div>
                                            <h1 class="text-2xl">200$</h1>
                                        </div>
                                        <div class="mt-1 absolute right-0">
                                            <span class="bg-white rounded-full text-xs py-1 px-2 " >Montant total des autres recettes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:grid grid-flow-col mt-5 justify-stretch gap-5">
                                <div class="rounded-md bg-blue-100 p-4 text-blue-500 staff">
                                    <h2 class="">Paiement du personnel</h2>
                                    <div class="flex mt-2 relative">
                                        <div>
                                            <h1 class="text-2xl">150$</h1>
                                        </div>
                                        <div class="mt-1 absolute right-0">
                                            <span class="bg-white rounded-full text-xs py-1 px-2 " >Montant total des paiement du personnel</span>
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
  name: "IndexFinance",
  components: { Head, Header, Sidebar, Footer },

  data() {
        return {
            text: "Required field are marked *",
            showModal: false,
            pageOne: true,


            //form fields
            number: '',
            name: '',
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