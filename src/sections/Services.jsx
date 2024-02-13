import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <div className="flex flex-row gap-4">
        {services.map((service) =>(
          <ServiceCard 
            key={service.label} {...service}
          />
          ))}
      </div>
    </section>
  )
}

export default Services
