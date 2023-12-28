import getCategories from "@/actions/get-categories";
import Menu from "@/components/header/category-menu";

export const revalidate = 0;

const BottomHeader = async () => {

    const categories = await getCategories();
    
    return (
        <div className="border-b py-4">
            <div className="flex relative px-4 sm:px-6 lg:px-8 h-16 items-center">
                <Menu data={categories} />
            </div>
        </div>
    )
}

export default BottomHeader;
