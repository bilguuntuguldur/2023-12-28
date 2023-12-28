import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    faLocationDot,
    faEnvelope,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="mx-auto main_bg w-full p-16 h-auto md:h-100 md:p-16 lg:h-64 lg:py-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
                <div className="">
                    <Link 
                    href="/"
                    >
                        <Image 
                        src="/images/Logo-B.svg"
                        alt="Logo-image"
                        width={200}
                        height={90}
                        />
                    </Link>
                </div>
                <div className="">
                    <p className="main_color pb-8 font-semibold text-sm">
                        Биднийг дагаарай
                    </p>
                    <ul className="flex gap-6 text-white text-2xl">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="main_color pb-8 font-semibold text-sm">
                        Холбоосууд
                    </p>
                    <ul className="list-none leading-8 text-white text-sm">
                        <li>Хүргэлтийн мэдээлэл</li>
                        <li>Түгээмэл асуултууд</li>
                        <li>Үйлчилгээний нөхцөл</li>
                    </ul>
                </div>
                <div className="">
                    <p className="main_color pb-8 font-semibold text-sm">
                        Холбоо барих
                    </p>
                    <ul>
                        <li className="flex gap-4">
                            <span className="main_color"><FontAwesomeIcon icon={faPhone} /></span>
                            <span className="text-white text-sm leading-6">7734-7799</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="main_color"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <span className="text-white text-sm leading-6"> info@tsetsegtmendchilgee.mn </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="main_color"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <span className="text-white text-sm leading-6">Улаанбаатар хот, Засгийн газрын ордны хойно, <br /> Астра цэцгийн дэлгүүр</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center h-8">
                <p className="main_secondry_color text-white text-normal pt-8">&#169; 2023 Астра цэцэгт мэндчилгээ ХХК </p>
            </div>
        </div>
    )
}

export default Footer;