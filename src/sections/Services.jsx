import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

export default function Services() {
  return (
    <section className="flex justify-center flex-wrap max-container gap-9">
        <div>
          {services.map(service=>(
            <ServiceCard key={service.label} {...service}/>
          ))}
        </div>
    </section>
  )
}
