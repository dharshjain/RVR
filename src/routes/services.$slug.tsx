import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/rvr-pages";
import { getService } from "@/lib/rvr-content";

export const Route = createFileRoute("/services/$slug")({ loader: ({params}) => { const service=getService(params.slug); if(!service) throw notFound(); return service; }, head: ({loaderData}) => ({meta:[{title:loaderData?`${loaderData.name} — RVR Global Logistics`:"Service Not Found — RVR"},{name:"description",content:loaderData?.intro ?? "Explore RVR logistics services."},{property:"og:title",content:loaderData?`${loaderData.name} — RVR Global Logistics`:"RVR Logistics"},{property:"og:description",content:loaderData?.focus ?? "Connected logistics services."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component: Detail });
function Detail(){return <ServicePage service={Route.useLoaderData()}/>}