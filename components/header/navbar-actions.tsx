"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] =useState(false); 

    useEffect (() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")}>
                <Image
                    src="/images/icons/shopping-card.gif"
                    alt="Fingerprint"
                    width={45}
                    height={45}
                />
                <span className="text-sm">Сагс</span>
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
} 

export default NavbarActions;