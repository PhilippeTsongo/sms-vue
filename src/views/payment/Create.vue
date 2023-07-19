<template>
   <div class="m-0">
      <Head/>
       
      <Header/>
       
      <div class="container-fluid ml-0 mr-0 flex">
       
         <Sidebar/>
 
         <div class="content p-5 rounded-md ml-1 mr-1 bg-[#F5F7FB] mt-16">

            <div class="mb-2 flex">
                  <h1 class="mr-24"><i class="fa fa-home text-[#111827]"></i> Etudiants</h1>
            </div>
            <div class="rounded-md bg-white p-7 flex">
               <div class="border-r w-40 mr-10">
                  <a href="" class="text-left text-green-500ray-500"><router-link :to="{name: 'student'}"> <i class="fa fa-users"></i>  Etudiants </router-link></a>
               </div>
            </div>

            <div class="flex">
               <form action="">
                  <label for="">Nom*</label>
                  <input type="text" class="" v-model="name" placeholder="Nom">
                  <label for="">Post-nom*</label>
                  <input type="text" class="" v-model="lastname" placeholder="Post-nom">
                  <label for="Prénom">Prénom*</label>
                  <input type="text" class="" v-model="firstname" placeholder="Prénom">
                  <label for="">Email</label>
                  <input type="email" class="" v-model="email" placeholder="Email">
                  <label for="">Tél</label>
                  <input type="phone" class="" v-model="email" placeholder="Téléphone">
                  
               </form>
            </div>
         </div>
 
      </div>    
   </div>
</template>
 
<script>
import Head from "../../components/layouts/head.vue";
import Header from "../../components/layouts/Header.vue";
import Sidebar from "../../components/layouts/Sidebar.vue";

export default {
  name: "CreatePayment",
  components: { Head, Header, Sidebar }
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