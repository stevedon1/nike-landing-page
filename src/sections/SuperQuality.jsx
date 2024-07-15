import Button from "../components/Button"
import { shoe8 } from "../assets/images"

export default function SuperQuality() {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you 
          
          <span className="text-coral-red inline-block mt-3 "> Super </span>
          <span className="text-coral-red inline-block mt-3 "> Quality </span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted 
          footware is designed to elevate yourexperience, providing you with unmatched quality 
          innovation and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Our dedication to detail and exellence ensures your satisfaction</p>
           <div>
           <Button label="View Details" 
           
           />
           </div>
           
        </div>
        <div className="flex flex-1 justify-center items-center">
            <img
                src={shoe8} alt="shoe8"
                width={570}
                height={522}
                className="object-contain"
            />
        </div>
    </section>
  )
}
