"use client"

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../ui/currency";
import { Product } from "@/types";
import IconButton  from "@/components/ui/icon-button";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart";
import Button from "../ui/button";
 
interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
data
}) => {

    const cart = useCart();
    const previewModal = usePreviewModal();

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();

        cart.addItem(data);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Action */}

            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    alt="Image"
                    className="product_image object-cover rounded-md"
                    width={300}
                    height={500}
                /> 
                <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 w-full bottom-5">

                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>

                </div>
            </div>

            {/* Description */}

            <div className="text-center">
                <p className="font-semibold text-lg main_gray">
                    {data.name}
                </p>
                {/* <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p> */}

                 {/* Price */}

                <div className="font-bold main_gray">
                <Currency value={data?.price} currencyDisplay="symbol" />
                </div>

                <div className="my-4">
                    <Button className="main_secondry_bg w-full justify-center">Захиалах</Button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard