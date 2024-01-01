"use client"

import { Billboard as BillboardType } from "@/types";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
data
}) => {
     return(
        <div className="relative">
            <div className="banner_image md:aspect-[3/1] overflow-hidden bg-contain"
                style={{backgroundImage: `url(${data?.imageUrl})`}}
            >
            </div>
            {/* <div className=" left-24 text-4xl font-extrabold text-white">{data.label}</div> */}
            <h1 className="main_gray w-full py-8 font-semibold text-lg flex justify-center items-center">
            <span className="">
            Энэ сарын {" "}
            </span>
            <div className="text-center">
              <TypeAnimation
                sequence={[
                    "хамгийн эрэлттэй",
                  1000,
                    "хамгийн гоёмсог",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            цэцэгнүүд.
          </h1>
        </div>
     )
}

export default Billboard;