import ProductList from '../Container/ProductList'
import Sidebar from '../Sidebar'
const Home = () => {
  // const [addToCart, setCardProduct, getSingleProduct, handleProductClick] = useOutletContext();
  return (
    <>
      <div className='w-full flex justify-between'>
        <Sidebar />
        <ProductList />
      </div>
   
    </>
  )
}

export default Home