export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')

export const useProducts = () => async () => await useAsyncData('products', () => $fetch('http://api.tortam.ru/api/v1/products'))