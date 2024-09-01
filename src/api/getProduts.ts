import { useQuery } from "@tanstack/react-query"
import { api } from "./api"
import {workWithLink } from "../store/getProductsData"
export const getAllData = () => {
    let { searchText,sort,order } = workWithLink()
    return useQuery({
        queryKey: ['products', searchText,sort,order],
        queryFn: () => api.get(`/search?q=${searchText}&limit=100&sortBy=${sort}&order=${order}`),
        select: ({ data }) => data,
        refetchOnWindowFocus: false
    })
}
export const getIntroData = () => {
    return useQuery({
        queryKey: ['intro'],
        queryFn: () => api.get(`?limit=10`),
        select: ({ data }) => data.products,
        refetchOnWindowFocus: false,
    })
}