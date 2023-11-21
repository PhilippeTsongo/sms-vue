<template>
    <div class="flex w-100 pb-3 bg-[#F5F7FB]">
      <div class="flex">
          <form action="" class="flex absolute ml-0">
              <i class="fa fa-search absolute mt-3 ml-3"></i>
              <input type="search" class="pl-8 p-2 rounded-md w-24 sm:w-96" placeholder="recherchez...">
          </form>

          <div class="flex absolute right-5">
              <div class="bg-white mr-2 rounded-md p-2 ">
                    <span class="notification-icon m-2">
                      <i class="fa fa-bell"></i>
                    </span>
                    <span class="parameter-icon m-2">
                      <i class="fa fa-envelope"></i>
                    </span>
              </div>
              
              <div class="flex font-bold ">
                <span id="focusableNames" class="bg-white rounded-md p-2 pl-2 pr-2 ">{{ firstname }} {{ lastname }}  </span>
                <img @click="profileInfo" src="../../../public/images/profiles/phil.jpeg" class="rounded-full ml-2 w-9 h-9 cursor-pointer" alt="Philippe Tsongo THKV">
              </div>
			  <div v-if="showModalProfile" class="flex absolute right-5 mt-14 rounded-lg bg-white border border-gray-300 shadow-xl">
				<div class="">
					<div class="bg-gray-100 border-b border-gray-200 p-2 rounded-tr-lg rounded-tl-lg text-black"> Profile
						<span @click="profileInfo" title="Déconnexion" class="absolute cursor-pointer right-2 bg-white px-2 py-0 rounded text-red-500"><i class="fa fa-xmark"></i></span> 
					</div>
					<div class="flex justify-center mx-auto px-3 mt-3">
						<img src="../../../public/images/profiles/phil.jpeg" class="rounded-full ml-2 w-14 h-14 cursor-pointer" alt="{{ firstname }} {{ lastname }} {{ name }}">
					</div>
					<div class="font-bold mt-5 px-5 py-2">
						{{ firstname }} {{ lastname }}
					</div>

					<form @submit.prevent="SignOut" class="flex justify-center mb-2">
						<input type="text" id="focusableEmail" value="{{user_email}}" class="hidden block border rounded-md p-2 border-gray-300 w-full"  >

						<button class="text-xl bg-red-500 text-white px-2 py-0 rounded"><i class="fa fa-power-off"></i></button>
					</form>
					
				</div>
			  </div>
          </div>
      </div>
    </div>
</template>

<script>
import {authenticatedUser, userLogout} from '../../jscore/init.js';
import axios from 'axios';


export default {
	name: "Header",
	components: {},

	data() {
		return {
		firstname: '',
		lastname: '',
		name: '',
		showModalProfile: false,
		user_email: ''
		};
	},

	created() {
		this.fetchUserInfo()
	},

  
	methods: {
		
		fetchUserInfo(){

			axios.get('/authenticated_user')
			// authenticatedUser()
			.then((response) =>{
				this.firstname = response.data.user.first_name;
				this.lastname = response.data.user.last_name;
				this.name = response.data.user.name;
				this.user_email = response.data.user.email;

				console.log(localStorage.getItem('authToken'));

			})
			.catch( (error) => {
				console.error('Error fetching user information:', error);
			});

			
		},

		profileInfo(){
			this.showModalProfile = !this.showModalProfile;
		},

		SignOut(){

			const credentials = {
				user_email: this.user_email,
			};
			userLogout(credentials)
				.then((response) => {
					localStorage.removeItem('authToken'); // Clear the authentication token
					window.location.href = '/login'; // Redirect to the login route
					successMessage(this.$toast, response.data.message);
				})
				.catch((errors) => {
					// console.error(errors.response.data.error);
					errorMessage(this.$toast, errors.response.data.error);
				});
		}
	
	}
}
</script>



<style>
.header h1 {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bolder;
}

.search-icon-table {
  position: absolute;
  margin: 5px 0px 0px -25px;
}

@media (max-width: 900px) {
  .header form {
    display: none;
  }
}
</style>