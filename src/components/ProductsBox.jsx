import ProductCard from "./ProductCard"
import { useLoaderData } from "react-router-dom"



function ProductsBox() {

  const { products = [] } = useLoaderData()

  return (
    <>
      <div className="productsBox">
        {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
        ))}
      </div>
    </>
  )
}

export default ProductsBox

export const productsLoader = async () => {

  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return { products: data }

  } catch (error) {
    console.log(error)
  }
}
