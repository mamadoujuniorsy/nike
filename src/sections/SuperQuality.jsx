import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl
         capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative
          z-10 pr-10">
            Nous vous offrons</span>
          <br/>          
          des chaussures de <span className="text-coral-red inline-block mt-3 mr-20">
             qualité</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nous vous assurons conforts et qualités,
          avec des chaussures haut de gammes,
          des couleurs magnifiques et une
          élégance inégalée.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Votre satisfaction notre
          priorité
        </p>
        <div className="mt-11">
          <Button label="voir détails"
          iconURL={arrowRight}/>
        </div>     
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
