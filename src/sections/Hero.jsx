import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";


export default function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
  return (
    <section
    id="home"
    className=" flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container w-full "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x">
        <p className="font-montserrat text-xl text-coral-red ">Our Summer Collection</p>
        <h className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3 ">Nike </span> Shoes
        </h>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike arrivals, quality,
           comfort and innovation for your active life</p>
           <Button label="Shop Now" 
              iconUrl={arrowRight}
           />
           <div className="flex justify-start items-start flex-wrap w-fill mt-20 gap-16">
            {statistics.map((stat, index)=>(
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
                <p className="leading-7  font-montserrat text-slate-gray">{stat.label}</p>

              </div>
            ))}

           </div>
      </div>
      <div className="flex flex-1 justify-center relative items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
        src={bigShoeImage}
        alt="big shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map(( shoe)=>(
            <div key={shoe}>
              <ShoeCard 
                imgUrl={shoe}
                changeBigShoeImage={(shoe)=>setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
