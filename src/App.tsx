import { RouterProvider } from "react-router-dom"
import { route } from "./routes/routes"
import { getProductsData } from "./store/getProductsData"
import { useEffect } from "react"
import { getAllData } from "./api/getProduts"
function App() {
  let { getProducts } = getProductsData()
  let { data, error } = getAllData()
  useEffect(() => {
    getProducts(data,error)
  }, [data,error])

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
