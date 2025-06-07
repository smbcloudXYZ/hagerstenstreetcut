import { Reviews } from "@/components/reviews";
import { getProduct, sampleProductsReviews } from "@/lib/sample-data";

type Params = Promise<{ productId: string }>

export default async function ProductPage(props: { params: Params }) {
  const { productId } = await props.params;
  const product = await getProduct(productId);

  return <Reviews product={product} />;
}

export async function generateStaticParams() {
  const productIds = Object.keys(sampleProductsReviews);

  return productIds.map((id) => ({
    productId: id,
  }));
}
