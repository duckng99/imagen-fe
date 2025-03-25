import tailwindPrimeUI from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{js,ts,vue}',
    './node_modules/@primevue/themes/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-950': 'var(--primary-950)',
        'surface-50': 'var(--surface-50)',
        'surface-100': 'var(--surface-100)',
        'surface-200': 'var(--surface-200)',
        'surface-300': 'var(--surface-300)',
        'surface-400': 'var(--surface-400)',
        'surface-500': 'var(--surface-500)',
        'surface-600': 'var(--surface-600)',
        'surface-700': 'var(--surface-700)',
        'surface-800': 'var(--surface-800)',
        'surface-900': 'var(--surface-900)',
        'surface-950': 'var(--surface-950)',
        primary: 'var(--primary)',
        'primary-contrast': 'var(--primary-contrast)',
        'primary-emphasis': 'var(--primary-emphasis)',
        'border-surface': 'var(--border-surface)',
        'bg-emphasis': 'var(--bg-emphasis)',
        'bg-highlight': 'var(--bg-highlight)',
        'bg-highlight-emphasis': 'var(--bg-highlight-emphasis)',
        'text-color': 'var(--text-color)',
        'text-color-emphasis': 'var(--text-color-emphasis)',
        'text-muted-color': 'var(--text-muted-color)',
        'text-muted-color-emphasis': 'var(--text-muted-color-emphasis)',
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-teal': 'var(--color-teal)',
        'color-tomato': 'var(--color-tomato)',
      },
      borderRadius: {
        lg: 'var(--border-radius)',
      },
    },
  },
  plugins: [tailwindPrimeUI],
}
