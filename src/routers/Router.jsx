import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import ProductsBox, { productsLoader } from "../components/ProductsBox"
import ProductDetail, { productLoader } from '../pages/ProductDetail'
import About from '../pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProductsBox />,
        loader: productsLoader,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'product-detail/:id',
        element: <ProductDetail />,
        loader: productLoader
      },
    ],
  },
])

export default router