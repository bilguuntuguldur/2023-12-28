"use client"
import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summury from "./components/summury";
import NextBreadcrumb from '@/components/breadcrumbs/breadcrumbs';

const CartPage = () => {

    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <div className="bg-white w-full">
            <NextBreadcrumb
                homeElement={'Нүүр хуудас'}
                separator={<span> / </span>}
                activeClasses='main_color'
                containerClasses='flex py-5 bg-gray-100 px-32' 
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
            />
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-2xl w-full border-b pb-4 font-bold text-black">Захиалгын хуудас</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">
                                Одоогоор таны сагсанд бүтээгдэхүүн нэмэгдээгүй байна. </p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem  
                                        key={item.id}
                                        data={item} 
                                    />
                                ))}
                            </ul>
                        </div>
                        <Summury />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default CartPage;