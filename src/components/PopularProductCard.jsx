import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex-1 flex flex-col w-full max-sm:w-full">
      <img 
        src={imgURL} alt={name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex flex-start flex-col gap-2.5">
        <img 
          src={star} alt="rating"
          width={24} height={24}
        />
        <p className="font-monserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
        <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
          {name}
        </h3>
        <p className="font-semibold font-montserrat mt-2 leading-normal
        text-2xl text-coral-red">
          {price}
        </p>
      </div>
    </div>
  )
}

export default PopularProductCard
