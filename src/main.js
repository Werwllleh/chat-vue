import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directives from '@/directives';



import App from './App.vue'

const app = createApp(App)

directives.forEach(directive => {
  app.directive(directive.name, directive.bind)
})


// app.use(router)
app.use(createPinia())
app.mount('#app')
