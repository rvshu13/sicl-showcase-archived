import { writable } from 'svelte/store'

const storeTheme = writable('dark')

export { storeTheme }