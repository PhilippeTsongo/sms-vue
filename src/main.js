import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//tailwind
import '../src/assets/index.css'
import '../src/assets/fontawesome/css/all.min.css' 
import axios from 'axios';

//setup axios default headers
const authToken = localStorage.getItem('authToken');
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'; // Adjust the URL to match your Laravel backend
axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;


//notification
import Toaster from '@meforma/vue-toaster';

createApp(App).use(router).use(Toaster).mount('#app')
// createApp(App).use(router).mount('#app')
