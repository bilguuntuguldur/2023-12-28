import Button from "../ui/button";
import backgroundImageOne from "../../public/images/feature-1.png";



const ShopFeatures = () => {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 my-16">
            <div className="text-center px-6 py-10 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Баяр хүргэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_secondry_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Баяр хүргэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_secondry_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Баяр хүргэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_secondry_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Баяр хүргэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_secondry_bg mt-8">Захиалах</Button>
            </div>
        </div>
    )

}

export default ShopFeatures;