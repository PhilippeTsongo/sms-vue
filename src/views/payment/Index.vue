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
              
                <!-- new modal -->
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

                                <form @submit.prevent="newPayment()">
                                    <div class="mt-5 pb-5">
                                        <h2 class="uppercase text-green-500 text-xs">Information du paiement</h2>
                                        <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                        
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Année académique <span class="text-red-500">*</span></label>
                                                <select v-model="formData.academic_year_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="academic_year in academicYearsList" :key="academic_year.id" class="select" :value="academic_year.id">
                                                        {{ academic_year.start_date }} {{ academic_year.end_date }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Etudiant <span class="text-red-500">*</span></label>
                                                <select v-model="formData.student_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="student in studentsList" :key="student.id" class="select" :value="student.id">
                                                        {{student.firstname + ' ' + student.lastname + ' ' + student.familyname}}
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Frais <span class="text-red-500">*</span></label>
                                                <select v-model="formData.fee_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="fee in feesList" :key="fee.id" class="select" :value="fee.id">
                                                        {{fee.name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Montant <span class="text-red-500">*</span></label>
                                                <input type="text" v-model="formData.amount" class="block border rounded-md p-2 border-gray-300 w-full" required >
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


                <!-- new modal -->
                <div v-if="showModalEdit">
                    <div class="grid grid-flow-col rounded absolute w-3/4 right-0 top-10 h-auto">
                        <div class> 
                            <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                <div class="flex py-5 w-full">
                                    <div class="title flex-1">
                                        <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Modifiez le Paiement</h2>
                                    </div>
                                    <div class="">
                                        <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                    </div>
                                </div>

                                <form @submit.prevent="updatePayment(paymentData.id)">
                                    <div class="mt-5 pb-5">
                                        <h2 class="uppercase text-green-500 text-xs">Information du paiement</h2>
                                        <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                        
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Année académique <span class="text-red-500">*</span></label>
                                                <select v-model="paymentData.academic_year_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="academic_year in academicYearsList" :key="academic_year.id" class="select" :value="academic_year.id">
                                                        {{ academic_year.start_date }} {{ academic_year.end_date }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Etudiant <span class="text-red-500">*</span></label>
                                                <select v-model="paymentData.student_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="student in studentsList" :key="student.id" class="select" :value="student.id">
                                                        {{student.firstname + ' ' + student.lastname + ' ' + student.familyname}}
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Frais <span class="text-red-500">*</span></label>
                                                <select v-model="paymentData.fee_id" class="block border rounded-md p-2 border-gray-300 w-full" required>
                                                    <option v-for="fee in feesList" :key="fee.id" class="select" :value="fee.id">
                                                        {{fee.name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                            <div class="block md:inline">
                                                <label for="" class="block text-xs uppercase">Montant <span class="text-red-500">*</span></label>
                                                <input type="text" v-model="paymentData.amount" class="block border rounded-md p-2 border-gray-300 w-full" required >
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
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexOtherReceipt'}"> <i class="fa-solid fa-rectangle-list"></i> Autres recettes</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexExpense'}"> <i class="fa-solid fa-table-list"></i> Dépense</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexStaffPayment'}"> <i class="fa-solid fa-table-list"></i> Paiment des employés</router-link></li>
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
                                                    <th scope="col" class="px-3 py-3">Frais</th>
                                                    <th scope="col" class="px-3 py-3">Date</th>
                                                    <th scope="col" class="px-3 py-3">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="h-100 border-r border-gray-100">
                                                <tr v-for="payment in payments" :key="payment.id" class="">
                                                    <td class="whitespace-nowrap  px-3 py-2 font-medium border-r border-b border-gray-100">1</td>
                                                    <td class="whitespace-nowrap  px-4 w-24 py-2 border-r border-b border-gray-100">{{ payment.payment_number }}</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">{{ payment.student.firstname + ' ' + payment.student.familyname + ' ' +payment.student.lastname }} </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">{{ payment.promotion.name + ' / ' + payment.promotion.department.name}} </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100 text-green-500">{{ payment.amount }} </td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">{{ payment.fee.name}}</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-100">{{ payment.payment_date}}</td>
                                                    <td class="whitespace-nowrap  px-3 py-2 border-r border-b border-gray-200">
                                                        <button @click="dataFee(payment.id)" class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2"> Edit</button>
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
import {getPayment, addPayment, showPayment, editPayment, getAcademicYears, getStudents} from '../../jscore/init.js';
import {successMessage, errorMessage} from '../../jscore/IoNotification.js';


export default {
  name: "IndexPayment",
  components: { Head, Header, Sidebar, Footer },

  data() {
        return {
            text: "Required field are marked *",
            showModal: false,
            showModalEdit: false,
            pageOne: true,
            payments: {},

            // section option
            academicYearsList: {},
            studentsList: {},
            feesList: {},

            //form fields
            academic_year_id: '',
            student_id: '',
            fee_id: '',
            amount: '',
        };
  },

  mounted(){
        this.fetchDepartments();
        
        this.optionList();

    },


    methods: {
        //payment list
        fetchPayments(){

            getPayment()
            .then(response => {
                this.payments = response.data.payment;
            })
            .catch(error => {
                console.log(error);
            });
        },

        //new payment
        newPayment(){
            addPayment(this.formData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab    
                this.showModal = !this.showModal;

                //fetch List
                this.fetchPayments();
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            })
        },


        //new payment
        dataPayment(payment){
            //open the tab    
            this.showModalEdit = !this.showModalEdit;

            showPayment(payment)
            .then(response => {

                console.log(payment);
                this.paymentData.id = payment;
                this.paymentData.amount = response.data.payment.amount;

                this.paymentData.academic_year_id = response.data.academic_year.id;
                this.paymentData.student_id = response.data.student.id;
                this.paymentData.fee_id = response.data.fee.id;
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            });
        },

        showPaymentProfile(payment) {
            // When the "Data Profile" button is clicked, fetch the selected payment profile
            this.dataPayment(payment);
        },

        //update payment
        updatePayment(payment){

            editPayment(payment, this.paymentData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab  
                this.showModalEdit = !this.showModalEdit;
                //fetch List
                this.fetchPayments();
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

        //option list
        optionList(){
            //academic year list
            getAcademicYears()
            .then(response => {
                this.academicYearsList = response.data.academic_year;
            })
            .catch(error => {
                console.log(error);
            });

            //student list
            getStudentsList()
            .then(response => {
                this.studentsList = response.data.student;
            })
            .catch(error => {
                console.log(error);
            });

           
        }
    
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