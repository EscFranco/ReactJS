import ItemCount from "./ItemCount"
import { StarIcon } from '@heroicons/react/solid'
import { cartContext } from "../Context/CartContext.jsx";
import { useContext } from "react";


const ItemDetail = ({ item }) => {

    const { addProduct, getProductStock } = useContext(cartContext);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const onAdd = (cantidad) => {
        addProduct(item, cantidad)
    }

    return (
        <div className="bg-white">
            <div className="pt-6">

                <div className="flex p-5">
                    <img src={item.image} alt={item.title} className="h-fit m-auto md:max-w-sm" />
                </div>

                <div className="text-center max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:row-span-3">

                        <h2 className="sr-only">Informacion Producto</h2>
                        <p className="text-3xl text-gray-900">${item.precio}</p>

                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex justify-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon key={rating} className={classNames(item.promedio > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0')} aria-hidden="true" />
                                    ))}
                                </div>
                                <p className="sr-only">{item.promedio} out of 5 stars</p>
                                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {item.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <ItemCount stock={getProductStock(item.id) ?? item.stock} initial={1} onAdd={onAdd} />

                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <div>
                            <h3 className="sr-only">Descripcion</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{item.descripcion}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Informacion</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-none text-sm space-y-2">
                                    <li className="text-gray-400">Genero:<span className="text-gray-600"> {item.genero}</span></li>
                                    <li className="text-gray-400">Material:<span className="text-gray-600"> {item.material}</span></li>
                                    <li className="text-gray-400">Marca:<span className="text-gray-600"> {item.marca}</span></li>
                                    <li className="text-gray-400">Origen:<span className="text-gray-600"> {item.origen}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Garantia</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{item.garantia}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemDetail;






