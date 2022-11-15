import { createApp } from 'vue'
import { createPinia } from 'pinia'





import App from './App.vue'
// import App1 from './App1.vue'
// import App_Administration from './App_Administration.vue'

import router from './router'

import './assets/main.css'

const app = createApp(App)
// const app_Administration = createApp(App_Administration)

app.use(createPinia())
app.use(router)

// app_Administration.use(createPinia())
// app_Administration.use(router)
// const app1 = createApp(App1)
 

app.mount('#app')
// app1.mount('#app1')
