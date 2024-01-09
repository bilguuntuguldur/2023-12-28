import * as z from "zod";
import axios from "axios";
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useParams, useRouter } from "next/navigation"
import { Order } from "@prisma/client"

import { Input } from "@/components/ui/input"
import Button from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
    subscriberName: z.string().min(1),
    recieverName: z.string().min(1),
    subscriberPhone: z.string().min(1),
    recieverPhone: z.string().min(1),
    greeting: z.string().min(1), 
    address: z.string().min(1),
});

interface OrderFormProps {
    initialData: Order | null;
};

const CheckoutFormPage: React.FC<OrderFormProps> = ({
    initialData
}) => {

    const params = useParams();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<OrderFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            label: '',
            imageUrl: ''
        }
    });

    const onSubmit = async (data: OrderFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
            await axios.patch(`/api/${params.storeId}/orders/${params.orderId}`, data);
        } else {
            await axios.post(`/api/${params.storeId}/orders`, data);
        }
            router.refresh();
            router.push(`/${params.storeId}/orders`);
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error('Алдлаа гарлаа.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full my-16 flex flex-col">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                </form>
            </Form>
        </div>
    )
}

export default CheckoutFormPage;