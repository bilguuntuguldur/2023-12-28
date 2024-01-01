import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import NavbarActions from "./navbar-actions";
import Container from "../ui/container";


interface NavbarProps {
    toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
    toggle 
}) => {
    return(
        <div className="main_bg  h-auto p-4 md:h-36 lg:justify-around lg:h-36 text-white">
            <Container>
                <div className="flex flex-wrap items-center justify-center md:justify-around">
                    <div className="hidden md:flex md:w-32 lg:w-80">
                        <Input type="search" placeholder="Та юу хайж байна вэ?" className="bg-white w-96 placeholder-gray-600 focus:placeholder-gray-500"/>
                    </div>

                    <div className="w-full flex justify-between md:w-auto mb-10">
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

                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                            onClick={toggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                fill="#B88087"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full flex justify-around md:w-auto gap-8">
                        <div className="main_logo_menu">
                            <Image
                            src="/images/icons/fingerprint.gif"
                            alt="Fingerprint"
                            width={45}
                            height={45}
                            />
                            <span className="text-sm">Хэтэвч</span>
                        </div>
                        <div className="main_logo_menu">
                            <Image
                            src="/images/icons/love-heart.gif"
                            alt="Fingerprint"
                            width={45}
                            height={45}
                            />
                            <span className="text-sm text-center">Хадгалсан</span>
                        </div>
                        <div className="flex-col justify-center relative">
                            <NavbarActions />
                        </div>
                        <div className="main_logo_menu">
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
            </Container>
        </div>
    )
}

export default Navbar;