import { useLoaderData } from 'react-router-dom';

function ProductDetail() {

  const { product } = useLoaderData()
  return (
    <>
      <div className='product-detail'>
        <figure className='product-detail__img'>
          <img src={product.image} alt="{title}" />
        </figure>
        <div>{product.title}</div>
        <div>Price: ${product.price}</div>
        <div>{product.description}</div>
        <div>{`Product number {${product.id}}`}</div>
      </div>
    </>
  )
}

export default ProductDetail

export const productLoader = async ({ params }) => {
  try {
    const { id } = params
    console.log(id)
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return { product: data }

  } catch (error) {
    console.log(error)
  }
}

