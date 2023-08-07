<template>
    <div class="m-0">
        <Head/>
      
      <div class="flex">

         <Sidebar/>

         <div class="content px-5 py-3 bg-[#F5F7FB] mt-0 border-l border-gray-200">

            <Header/>

            <div class="content mt-12">
    
                <div class="mb-2 flex">
                    <h1 class="flex-1 text-gray-300 uppercase text-xs"><i class="fa fa-users"></i> Cours</h1>
                    
                    <div class="">
                        <button v-if="showModal == false" class="border border-green text-green-500 bg-white py-1 px-2 rounded hover:text-white hover:bg-green-500 hover:text-white" @click="toggleModal"><i class="fa fa-plus-circle"></i> Nouveau Cours</button>
                    </div>
                </div>
              
                <!-- modal new -->
                <div v-if="showModal">
                        <div class="grid grid-flow-col rounded absolute w-96 top-20 right-0 h-auto">
                            <div class> 
                                <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <div class="flex py-5 w-full">
                                        <div class="title flex-1">
                                            <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Nouveau Cours</h2>
                                        </div>
                                        <div class="">
                                            <button v-if="showModal" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModal"><i class="fa fa-xmark"></i> </button>
                                        </div>
                                    </div>

                                    <!-- :class="pageOne ? 'text-green-500 font-bold' : '' " -->
                                    <form @submit.prevent>

                                        <div class="mt-5 pb-5">
                                            <h2 class="uppercase text-green-500 text-xs">Informations du cours</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                            
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom du cours <span class="text-red-500">*</span></label>
                                                    <input type="text" :v-model="formData.name" class="block border rounded p-2 border-gray-300 w-full" required>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom abrégé du cours  <span class="text-red-500">*</span></label>
                                                    <input type="text" :v-model="formData.short_name" class="block border rounded p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Departement <span class="text-red-500">*</span></label>
                                                    <select v-model="formData.department" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="department in departmentsList" :key="department.id" :value="department.id">
                                                            {{ department.name }}
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Promotion <span class="text-red-500">*</span></label>
                                                    <select v-model="formData.promotion" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="promotion in promotionsList" :key="promotion.id" :value="promotion.id">
                                                            {{ promotion.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Enseignant </label>
                                                    <select v-model="formData.lecturer" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="lecturer in lecturersList" :key="lecturer.id" :value="lecturer.id">
                                                            {{ lecturer.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Ponderation(40) <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="formData.total_marks" class="block border rounded p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 text-center">
                                                <button @click="newCourse"  class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2 hover:border-none hover:bg-green-500 hover:text-white"> <i class="fa fa-paper-plane-top"></i> Enregistrez</button>

                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>
                </div>


                <!-- modal new -->
                <div v-if="showModalEdit">
                        <div class="grid grid-flow-col rounded absolute w-96 top-20 right-0 h-auto">
                            <div class> 
                                <div class="register-form rounded-md bg-white px-5 border-gray-900 shadow-xl md:absolute md:ml-auto md:mr-auto md:w-3/4 lg:ml-14">

                                    <div class="flex py-5 w-full">
                                        <div class="title flex-1">
                                            <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Modifier le cours</h2>
                                        </div>
                                        <div class="">
                                            <button v-if="showModalEdit" class="bg-white px-2 py-1 rounded text-red-500" @click="toggleModalEdit"><i class="fa fa-xmark"></i> </button>
                                        </div>
                                    </div>

                                    <!-- :class="pageOne ? 'text-green-500 font-bold' : '' " -->
                                    <form @submit.prevent="updateCourse(courseData.id)">

                                        <div class="mt-5 pb-5">
                                            <h2 class="uppercase text-green-500 text-xs">Informations du cours</h2>

                                            <h5 class="mt-3 text-red-500">Les champs obligatoires *</h5>
                                            
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom du cours <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="courseData.name" class="block border rounded p-2 border-gray-300 w-full" required>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-10">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Nom abrégé du cours  <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="courseData.short_name" class="block border rounded p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 md:grid grid-flow-col flex-stretch gap-5">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Departement <span class="text-red-500">*</span></label>
                                                    <select v-model="courseData.department_id" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="department in departmentsList" :key="department.id" :value="department.id" >
                                                            {{ department.name }}
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Promotion <span class="text-red-500">*</span></label>
                                                    <select v-model="courseData.promotion_id" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="promotion in promotionsList" :key="promotion.id" :value="promotion.id" >
                                                            {{ promotion.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Enseignant </label>
                                                    <select v-model="courseData.lecturer_id" class="block border rounded p-3 border-gray-300 w-full" required>
                                                        <option v-for="lecturer in lecturersList" :key="lecturer.id" :value="lecturer.id">
                                                            {{ lecturer.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="mt-5 md:grid grid-flow-col flex-stretch">
                                                <div class="block md:inline">
                                                    <label for="" class="block text-xs uppercase">Ponderation(40) <span class="text-red-500">*</span></label>
                                                    <input type="text" v-model="courseData.total_marks" class="block border rounded p-2 border-gray-300 w-full" required >
                                                </div>
                                            </div>

                                            <div class="mt-5 text-center">
                                                <button  class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2 hover:border-none hover:bg-green-500 hover:text-white"> <i class="fa fa-paper-plane-top"></i> Enregistrez</button>

                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>
                </div>

                <ul class="flex md:hidden bg-white rounded-md p-5">
                    <li class="py-2 px-2 w-100 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexActivity'}"> <i class="fa-solid fa-rectangle-list"></i> Travaux des cours</router-link></li>
                    <li class="ml-5 py-2 px-2 w-100 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexMark'}"> <i class="fa-solid fa-rectangle-list"></i> Points</router-link></li>
                </ul>
                <div class="flex">
                    <div class="hidden md:inline">
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
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexActivity'}"> <i class="fa-solid fa-rectangle-list"></i> Travaux des cours</router-link></li>
                                <li class="py-2 px-2 w-100 mt-4 rounded bg-white border border-[#111827] text-center hover:bg-[#111827] hover:text-white hover:border-[#111827] "><router-link :to="{ name: 'IndexMark'}"> <i class="fa-solid fa-rectangle-list"></i> Points</router-link></li>
                            </ul>

                        </div>
                    </div>

                    <div class="flex-1 rounded-md bg-white pt-6 pl-6 pr-6 pb-2 ml-0 md:ml-5 mt-2 w-100 ">
                        <div class="bg-[#111827]-100 flex">
                            <div class="title flex-1">
                                <h2 class="uppercase text-xl text-green-500"><i class="fa fa-list-ol"></i> Liste de cours</h2>
                            </div>

                            <div class="" style="margin-top: -5px;">
                                <input  type="search" class="p-1 rounded-md border border-gray-200 hidden sm:inline"> 
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
                                                    <th scope="col" class=" px-3 py-3">Numéro</th>
                                                    <th scope="col" class=" px-3 py-3">Nom</th>
                                                    <th scope="col" class=" px-3 py-3">Departement</th>
                                                    <th scope="col" class=" px-3 py-3">Promotion</th>
                                                    <th scope="col" class=" px-3 py-3">Ponderation</th>
                                                    <th scope="col" class=" px-3 py-3">Enseignant</th>
                                                    <th scope="col" class=" px-3 py-3">Statut</th>
                                                    <th scope="col" class=" px-3 py-3">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="h-100 border-r border-b border-gray-200">
                                                <tr v-for="course in courses" :key="course.id" class="">
                                                    <td class="px-3 py-2 font-medium border-r border-b border-gray-200"> {{course.id}}</td>
                                                    <td class="px-4 w-24 py-2 border-r border-b border-gray-200"> {{course.course_number}}</td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200"> {{course.name}}</td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200"> {{course.department.name}}</td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200"> {{ course.promotion.name}} </td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200 text-green-500 text-center"> <span class="bg-green-500 text-white rounded-full p-1"> {{course.total_marks}}</span></td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200"> {{ course.lecturer.name}}</td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200 text-green-500"> {{course.status}}</td>
                                                    <td class="px-3 py-2 border-r border-b border-gray-200">

                                                        <button @click="dataCourse(course.id)" class="text-[#111827] border border-[#111827] w-full rounded-md px-3 py-2"> Edit</button>

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
import {getCourses, addCourse, showCourse, editCourse, getDepartments, getPromotions, getLecturers} from '../../jscore/init.js';
import {successMessage, errorMessage} from '../../jscore/IoNotification.js';


export default {
  name: "IndexCourse",
  components: { Head, Header, Sidebar, Footer },

    data() {
        return {
            text: "Required field are marked *",
            showModal: false,
            showModalEdit: false,
            pageOne: true,
            courses: {}, //courses list
            courseData: {}, //course profile
            departmentData: {}, //department profile
            promotionData: {}, //department profile
            lecturerData: {}, //lecturer profile

            //select options list  
            departmentsList: {},
            promotionsList: {},
            lecturersList: {},

            //form fields for inserting new data
            formData: {
                name: '',
                short_name: '',
                total_marks: '',
                lecturer: '',
                promotion: '',
                department: '',
            },


        };
    },


    mounted(){
        this.fetchCourses();
        
        this.optionList();

    },


    methods: {
        //Course list
        fetchCourses(){

            getCourses()
            .then(response => {
                this.courses = response.data.courses;
            })
            .catch(error => {
                console.log(error);
            });
        },

        //new course
        newCourse(){
            addCourse(this.formData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab    
                this.showModal = !this.showModal;

                //fetch List
                this.fetchCourses();
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            })
        },


        //new course
        dataCourse(course){
            //open the tab    
            this.showModalEdit = !this.showModalEdit;

            showCourse(course)
            .then(response => {
                this.courseData.id = course;
                this.courseData.name = response.data.course.name;
                this.courseData.slug_name = response.data.course.slug_name;
                this.courseData.short_name = response.data.course.short_name;
                this.courseData.total_marks = response.data.course.total_marks;

                this.courseData.department_id = response.data.department.id;
                this.courseData.promotion_id = response.data.promotion.id;
                this.courseData.lecturer_id = response.data.lecturer.id;
            })
            .catch((errors) => {
                //toast notification
                errorMessage(this.$toast, errors.response.data.message);
            });
        },

        showCourseProfile(course) {
            // When the "Data Profile" button is clicked, fetch the selected course profile
            this.dataCourse(course);
        },

        //update course
        updateCourse(course){

            editCourse(course, this.courseData)
            .then(response => {
                //toast notification
                successMessage(this.$toast, response.data.message);
                //close the tab  
                this.showModalEdit = !this.showModalEdit;
                //fetch List
                this.fetchCourses();
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
            //departments list
            getDepartments()
            .then(response => {
                this.departmentsList = response.data.departments;
            })
            .catch(error => {
                console.log(error);
            });

            //promotions list
            getPromotions()
            .then(response => {
                this.promotionsList = response.data.promotions;
            })
            .catch(error => {
                console.log(error);
            });

            //lecturere list
            getLecturers()
            .then(response => {
                this.lecturersList = response.data.lecturers;
            })
            .catch(error => {
                console.log(error);
            })
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