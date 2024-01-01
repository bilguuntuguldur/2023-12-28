import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";


const TopHeader = () => {

    return (
        <div className="hidden md:flex md:justify-evenly h-10 py-2">
        <Link href=""
        className="main_gray text-sm font-semibold flex items-center gap-4"
        >
            <FontAwesomeIcon icon={faLocationDot} className="top_header_icon"/>
            Байршил харах
        </Link>
        <Link href=""
        className="main_gray text-sm font-semibold flex items-center gap-4"
        >
            <FontAwesomeIcon icon={faEnvelope} className="top_header_icon"/>
            info@tstetsegtmendchilgee.mn
        </Link>
        <Link href=""
        className="main_gray text-sm font-semibold flex items-center gap-4"
        >
            <FontAwesomeIcon icon={faPhone} className="top_header_icon"/>
            7734-7799
        </Link>
    </div>
    )

}

export default TopHeader; 