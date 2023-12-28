import Image from "next/image";



const OrderSequence = () => {

    return (
        <div className="grid grid-cols-1 justify-around gap-8 my-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-4">

            <div className="flex flex-col items-center gap-4 relative">
                <span className="owl_box flex items-center justify-center main_color text-5xl font-normal relative">
                    1
                    <Image 
                        src="/images/icons/success.gif"
                        alt="Order-sequence-image"
                        width={70}
                        height={70}
                        className="sequence_image_one"
                    />
                </span>
                <span className="text-lg main_gray font-meduim">Сонго</span>
                <p className="text-s main_secondry_color text-center px-16 sm:px-10 lg:px-4">Монголын хамгийн өргөн сонголттой цэцгийн дэлгүүр.</p>
                <Image 
                    src="/images/icons/arrow-right-down.png"
                    alt="Order-sequence-image"
                    width={100}
                    height={36}
                    className="sequence_arrow_one hidden sm:block lg:block"
                />
            </div>

            <div className="flex flex-col items-center gap-4 relative">
                <span className="owl_box flex items-center justify-center main_color text-5xl font-normal relative">
                    2
                    <Image 
                        src="/images/icons/credit_card.gif"
                        alt="Order-sequence-image"
                        width={70}
                        height={70}
                        className="sequence_image_two"
                    />
                </span>
                <span className="text-lg main_gray font-meduim">Захиал</span>
                <p className="text-s main_secondry_color text-center px-16 sm:px-10 lg:px-4">Монголын хамгийн хялбар төлбөрийн хэрэгсэл.</p>
                <Image 
                    src="/images/icons/arrow-right-under.png"
                    alt="Order-sequence-image"
                    width={100}
                    height={36}
                    className="sequence_arrow_two hidden sm:hidden lg:block"
                />
            </div>

            <div className="flex flex-col items-center gap-4 relative">
                <span className="owl_box flex items-center justify-center main_color text-5xl font-normal relative">
                    3
                    <Image 
                        src="/images/icons/delivery-truck.gif"
                        alt="Order-sequence-image"
                        width={70}
                        height={70}
                        className="sequence_image_three"
                    />
                </span>
                <span className="text-lg main_gray font-meduim">Хүргүүл</span>
                <p className="text-s main_secondry_color text-center px-16 sm:px-10 lg:px-4">Монголын хамгийн хурдан хүргэлт.</p>
                <Image 
                    src="/images/icons/arrow-right-down.png"
                    alt="Order-sequence-image"
                    width={100}
                    height={36}
                    className="sequence_arrow_three hidden sm:block lg:block"
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <span className="owl_box flex items-center justify-center main_color text-5xl font-normal relative">
                    4
                    <Image 
                        src="/images/icons/gift-box.gif"
                        alt="Order-sequence-image"
                        width={70}
                        height={70} 
                        className="sequence_image_four"
                    />
                </span>
                <span className="text-lg main_gray font-meduim">Энжой</span>
                <p className="text-s main_secondry_color text-center px-16 sm:px-10 lg:px-4">Монголын хамгийн enjoyable цэцгийн Астра дэлгүүр.</p>
            </div>

        </div>
    )
}

export default OrderSequence;