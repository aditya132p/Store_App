import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaGetCategory, sagaGetProduct } from "../store/Product/product.action";

// Sidebar.js
const categories = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronic' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: "Shoes" },
    { id: 5, name: 'Miscellaneous' },
];

const Sidebar = () => {
    const dispatch = useDispatch()
    const cate = useSelector(state => state.product.products);
    useEffect(()=>{
        console.log("")
    }, [cate])

    return (
        <div className="w-[20%] bg-yellow-50 border-r-1 p-4 z-20 pt-32 h-screen sticky top-0 left-0">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="pl-6">
                <li  onClick={() => dispatch(sagaGetProduct())} className="py-4">
                    <a

                        className="text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300"
                    >
                        All
                    </a>
                </li>
                {categories.map((category ) => (
                    <li  key={category.id} onClick={()=> dispatch(sagaGetCategory(category.id))} className="py-4">
                        <a
                           
                            className="text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300"
                        >
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;