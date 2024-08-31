import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";
//import router from './router'

const app = createApp(App)

const options = {
    // You can customize the options here
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
  };

app.use(createPinia())
app.use(Toast, options);
//app.use(router)

app.mount('#app')
