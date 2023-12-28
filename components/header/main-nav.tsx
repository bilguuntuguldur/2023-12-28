import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import NavbarActions from "./navbar-actions";

const Navbar = () => {
    return(
        <div className="main_bg flex flex-wrap items-center justify-around h-auto p-8 md:justify-around md:h-32 lg:justify-around lg:h-32 text-white">
            <div className="hidden sm:flex sm:w-32 md: lg:w-80">
                <Input type="search" placeholder="Та юу хайж байна вэ?" className="bg-white w-96 placeholder-gray-600 focus:placeholder-gray-500"/>
            </div>

            <div>
                <Link 
                href="/"
                >
                    <Image 
                    src="/images/Logo-B.svg"
                    alt="Logo-image"
                    width={140}
                    height={80}
                    />
                </Link>
            </div>

            <div className="flex justify-around gap-8">
                <div className="text-center">
                    <Image
                    src="/images/icons/fingerprint.gif"
                    alt="Fingerprint"
                    width={45}
                    height={45}
                    />
                    <span className="text-sm">Хэтэвч</span>
                </div>
                <div className="text-center">
                    <Image
                    src="/images/icons/love-heart.gif"
                    alt="Fingerprint"
                    width={45}
                    height={45}
                    />
                    <span className="text-sm">Хадгалсан</span>
                </div>
                <div className="text-center relative">
                    <NavbarActions />
                </div>
                <div className="text-center">
                    <Image
                    src="/images/icons/avatar.gif"
                    alt="Fingerprint"
                    width={45}
                    height={45}
                    />
                    <span className="text-sm">Нэвтрэх</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;