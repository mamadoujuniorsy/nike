/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section id="contact-us"
     className="max-container flex justify-between items-center 
    max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md 
      font-palaquin font-bold">
        S'inscrire pour étre aux courants   
         des <span className="text-coral-red">
           nouveautés </span> & Newsletter      
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center 
      max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text" placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center 
        max-sm: w-full ">
          <Button label="S'inscrire" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
