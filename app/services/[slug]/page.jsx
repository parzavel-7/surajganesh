import { serviceData } from "@/assets/assets";
import ServiceDetailsProfile from "@/app/components/ServiceDetailsProfile";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  return <ServiceDetailsProfile slug={slug} />;
}
