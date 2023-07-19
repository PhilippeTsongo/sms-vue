import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//tailwind
import '../src/assets/index.css'
import '../src/assets/fontawesome/css/all.min.css' 
// import '../src/assets/fontawesome/css/regular.min.css' 
// import '../src/assets/fontawesome/css/solid.min.css' 

// import '../../public/js/chart.js'

//fontawesome
// import '../src/components/head.vue' 


createApp(App).use(router).mount('#app')
