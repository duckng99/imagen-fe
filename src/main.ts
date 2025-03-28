/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import { definePreset } from '@primeuix/themes'
import router from './router/router'
import Button from 'primevue/button'
import { Form } from '@primevue/forms'
import { FormField } from '@primevue/forms'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Textarea from 'primevue/textarea'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff4ed',
      100: '#ffe5d4',
      200: '#ffc7a8',
      300: '#ffa071',
      400: '#ff7f50',
      500: '#fe4711',
      600: '#ef2d07',
      700: '#c61c08',
      800: '#9d190f',
      900: '#7e1810',
      950: '#440806',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
})

const app = createApp(App)
app.component('Button', Button)
app.component('Form', Form)
app.component('FormField', FormField)
app.component('InputText', InputText)
app.component('Select', Select)
app.component('SelectButton', SelectButton)
app.component('Textarea', Textarea)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primeui, primevue, primevue-tailwind, tailwind-utilities;',
      },
    },
  },
})
app.use(router)
app.mount('#app')
