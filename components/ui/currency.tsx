"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
    value?: string | number;
    currencyDisplay?: "symbol" | "code" | "name" | "narrowSymbol";
}

const Currency: React.FC<CurrencyProps> = ({
    value,
    currencyDisplay = "symbol"
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MNT",
        currencyDisplay
    });

    return (
        <div className="font-semibold">{formatter.format(Number(value))}</div>
    );
}

export default Currency;
