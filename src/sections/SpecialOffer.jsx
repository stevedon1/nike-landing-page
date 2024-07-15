import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

export default function SpecialOffer() {
  return (
    <section className="flex items-center justify-wrap max-lg:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img
              src={offer}
              width={777}
              height={687}
              className="object-contain w-full"
            />
        </div>
        <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3 "> Spcial </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
           Embark on a shopping journey that redifines your experience with unbeateble deal.
           From premier selection to incredible savings, we offer unparalleled value that set us apart
           
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, 
          surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
           <div className="mt-11 flex flex-wrap gap-4">
           <Button label="Shop Now" iconUrl={arrowRight} 
           
           />
           <Button label="Learn More"
           />
           </div>
           </div>
    </section>
  )
}
// style the learn button to bg white, check out from da video timestamp 2:17:00