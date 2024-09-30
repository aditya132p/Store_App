import { Trash, Sparkles } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { sagaRemoveProducts } from '../../store/Cart/cart.action';


export default function Cart() {


    const products = useSelector(state => state.cartItems.productsCart)
    const dispatch = useDispatch()
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
    const discount = totalPrice * (1 - 0.10);
    const discountedPrice = parseFloat(totalPrice - discount);


    return (
        <div className="mx-auto max-w-7xl  py-12 lg:px-0">
            <div className="mx-auto px-10 max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-700 stroke-black stroke-1 stro sm:text-4xl">
                    Shopping Cart
                </h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start px-3 lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="rounded-lg  bg-white lg:col-span-8">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>
                        <ul role="list" className="divide-y divide-gray-200">
                            {products.map((product) => (
                                <div key={product.id} className="">
                                    <li className="flex py-6 sm:py-6 ">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-semibold text-black">
                                                                {product.title}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm">
                                                        <p className="text-sm text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                                {product.size}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="mt-1 flex items-end">
                                                       
                                                        <p className="text-sm font-medium text-green-900">
                                                            &nbsp;&nbsp; MRP : ₹ {product.price * 80}
                                                        </p>
                                                        &nbsp;&nbsp;
                                                        {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="mb-2 flex">
                                        <div className="min-w-24 flex">
                                            <button type="button" className="h-7 w-7">
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className="mx-1 h-7 w-9 rounded-md border text-center"
                                                defaultValue={1}
                                            />
                                            <button type="button" className="flex h-7 w-7 items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                        <div className="ml-6 flex text-sm">
                                            <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0" 
                                                onClick={()=>dispatch(sagaRemoveProducts(product.id))}
                                            >
                                                <Trash size={12} className="text-red-500" />
                                                <span className="text-xs font-medium text-red-500">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </section>
                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                    >
                        <h2
                            id="summary-heading"
                            className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                        >
                            Price Details
                        </h2>
                        <div>
                            <dl className=" space-y-1 px-2 py-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-800">Price ({products.length || 0} item)</dt>
                                    <dd className="text-sm font-medium text-gray-900">₹ {totalPrice * 80}</dd>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <dt className="flex items-center text-sm text-gray-800">
                                        <span>Discount</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700">- ₹ {parseFloat(discountedPrice.toFixed(1) * 80 - totalPrice)}</dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="flex text-sm text-gray-800">
                                        <span>Delivery Charges</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700">Free</dd>
                                </div>
                                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                    <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                    <dd className="text-base font-medium text-gray-900">₹ {discount.toFixed(1) * 80}</dd>
                                </div>
                            </dl>
                            <div className="px-2 pb-4 font-medium text-green-700">
                                You will save 10% on this order
                            </div>
                            <div className='px-3 py-4'>
                                <button className='px-4 py-2 bg-slate-900 flex items-center justify-center gap-2 text-white rounded-md'> <Sparkles className='text-yellow-200' fill='' size={"15"} /> Buy Now  </button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}
