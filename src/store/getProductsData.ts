import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { IProducts } from "../types/types";
interface IGetProductsData {
    products: IProducts[] | null,
    productsAmount: number,
    error: any | null,
    getProducts: (data: any, error: any) => void
}

interface workWithLink {
    searchText: string,
    setSearchText: (text: string) => void,
    sort: string,
    setSort: (value: string) => void,
    order: string,
    setOrder: (value:string) => void,
}
export const getProductsData = create<IGetProductsData>()(devtools((set) => ({
    products: null,
    productsAmount: 0,
    error: null,
    getProducts: (data, error) => set({ products: data?.products, error: error, productsAmount: data?.limit, }),
})))


export const workWithLink = create<workWithLink>()(devtools((set) => ({
    searchText: '',
    setSearchText: (text) => set({ searchText: text }),
    sort: '',
    setSort: (value) => set({ sort: value }),
    order: '',
    setOrder: (value) => set({ order: value }),
})))