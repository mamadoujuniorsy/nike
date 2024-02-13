/* eslint-disable react/no-unescaped-entities */

import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { statistics } from "../constants"
import { shoes } from "../constants"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center 
    min-h-screen p-2 gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Notre collection d'été</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative
          z-10 pr-10">
            Nos nouveautés</span>
          <br/>          
          chaussures <span className="text-coral-red inline-block mt-3 mr-20">
             Nike</span>
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8
        mt-6 mb-14 sm:max-w-sm">
          Découvrez les nouveautés Nike,
          qui allignent confort et qualités,
          pour vous accompagnez dans votre vie active.
        </p>
        <Button label="Shop now"
        iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full
        mt-20 gap-16">
          {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover
       bg-center">
        <img 
          src= {bigShoeImg}
          alt="big shoes collections"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard 
              imgURL={image}
              changeBigShoeImage={ (shoe) =>{setBigShoeImg(shoe)}}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default Hero
