'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';
import Container from '@/components/ui/container';
import NextBreadcrumb from '@/components/breadcrumbs/breadcrumbs';

export type FormData = {
    name: string;
    phone: number;
    email: string;
    recieverName: string;
    recieverPhone: number;
    recieverAddress: string;
    message: string;
    flowerCode: string;
};

    const Order: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <>
            <NextBreadcrumb
                    homeElement={'Нүүр хуудас'}
                    separator={<span> / </span>}
                    activeClasses='main_color'
                    containerClasses='flex py-5 bg-gray-100 px-32' 
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
            />
            <Container>
                <div className='my-12 lg:grid lg:grid-cols-12 lg:items-center gap-x-12'>
                    <div className='lg:col-span-6'>
                            <h1 className="text-xl w-full border-b pb-4 mb-8 font-bold text-black">Захиалгын мэдээллээ бөглөөд цэцэгээ хүргүүлээд аваарай.</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-5'>
                                <label
                                htmlFor='name'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Нэр
                                </label>
                                <input
                                type='text'
                                placeholder='Өөрийн бүтэн нэрээ оруулна уу!'
                                className='w-full rounded-2xl border border-gray-300 bg-white py-1 px-6 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('name', { required: true })}
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='phone'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Утасны дугаар
                                </label>
                                <input
                                type='number'
                                placeholder='Өөрийн утасны дугаараа оруулна уу!'
                                className='w-full rounded-2xl border border-gray-300 bg-white py-1 px-6 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('phone', { required: true })}
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='email'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Имэйл хаяг
                                </label>
                                <input
                                type='email'
                                placeholder='Имэйл хаягаа оруулна уу!'
                                className='w-full rounded-2xl border border-gray-300 bg-white py-1 px-6 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('email', { required: true })}
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='recieverName'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Хүлээн авагчийн нэр
                                </label>
                                <input
                                type='text'
                                placeholder='Хүлээн авагчын бүтэн нэр оруулна уу!'
                                className='w-full rounded-2xl border border-gray-300 bg-white py-1 px-6 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('recieverName', { required: true })}
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='recieverPhone'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Хүлээн авагчийн утас
                                </label>
                                <input
                                type='number'
                                placeholder='Хүлээн авагчийн утасны дугаар оруулна уу!'
                                className='w-full rounded-2xl border border-gray-300 bg-white py-1 px-6 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('recieverPhone', { required: true })}
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='address'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Хүлээн авагчийн хаяг
                                </label>
                                <textarea
                                rows={4}
                                placeholder='Хүлээн авагчийн хаяг оруулна уу!'
                                className='w-full resize-none rounded-2xl border border-gray-300 bg-white py-1 px-6 text-base font-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('recieverAddress', { required: true })}
                                ></textarea>
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='message'
                                className='mb-3 block text-sm font-semibold text-black'
                                >
                                Мэндчилгээний үг
                                </label>
                                <textarea
                                rows={4}
                                placeholder='Мэндчилгээний үг '
                                className='w-full resize-none rounded-2xl border border-gray-300 bg-white py-1 px-6 text-base font-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('message', { required: false })}
                                ></textarea>
                            </div>
                            <div className='mb-5'>
                                <input
                                type='hidden'
                                id="flowerId"
                                value="flowerCode"
                                />
                            </div>
                            <div>
                                <button className='hover:sh2xlow-form rounded-full main_secondry_bg py-2 px-12 text-base font-semibold text-white outline-none'>
                                    Илгээх
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-span-5 px-8'>
                    </div>
                </div>

            </Container>
        </>
        
    );
};

export default Order;