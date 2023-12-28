import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard/Billboard";
import ProductList from "@/components/product/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const  Homepage = async () =>  {

  const products = await getProducts({isFeatured: true});

  const billboard = await getBillboard("4680aaea-41d1-48d2-b9c0-0259be64c8b9");
  return (
    <>
      <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
        </div>
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8"> 
          <ProductList title="Санал болгох бүтээгдэхүүн" items={products}/>
        </div>
      </Container>
    </>

  )
}

export default Homepage;