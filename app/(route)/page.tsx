import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard/Billboard";
import OrderSequence from "@/components/features/order-sequence";
import ShopFeatures from "@/components/features/shop-feaures";
import Subscription from "@/components/features/subscription";
import ProductList from "@/components/product/product-list";
import Container from "@/components/ui/container";
import { SubscriptIcon } from "lucide-react";

export const revalidate = 0;

const  Homepage = async () =>  {

  const products = await getProducts({isFeatured: true});

  const billboard = await getBillboard("38a31ec5-b122-40d4-81b1-e2c7f9b24637");
  return (
    <>
        <div className="pb-10">
          <Billboard data={billboard}/>
        </div>
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"> 
          <ProductList title="" items={products}/>
          <Subscription />
          <ShopFeatures />
          <OrderSequence />
        </div>
      </Container>
    </>

  )
}

export default Homepage;