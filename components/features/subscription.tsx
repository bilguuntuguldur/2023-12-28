import Image from "next/image";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscription = () => {

    return (
        <div className="round_box w-full h-auto main_bg text-white grid grid-cols-1 gap-4 items-center p-6 my-16 sm:grid-cols-2 sm:h-80 sm:px-6 md:grid-cols-4 lg:grid-cols-4 lg:h-44">
            <div className="flex items-center gap-2">
                <Image 
                    src="/images/icons/gift-box.gif"
                    alt="subscription-image"
                    width={105}
                    height={105}
                />
                <p>Яг одоо захиалаад хүргүүлээрэй</p>
            </div>
            <div className="">
                <p className="pb-4">Хүргүүлэх хаяг?</p>
                <Input type="search" placeholder="Хүргүүлэх хаягаа бичих" className="h-16 bg-white"/>
            </div>
            <div className="">
                <p className="pb-4">Утасны дугаар?</p>
                <Input type="search" placeholder="Утасны дугаараа бичих" className="h-16 bg-white"/>
            </div>
            <div className="mt-10">
                <Button className="main_secondry_bg w-full h-16 justify-center uppercase sm:w-full">Захиалах</Button>
            </div>
        </div>
    )

}

export default Subscription;