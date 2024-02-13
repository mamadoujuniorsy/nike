import ReviewsCard from "../components/ReviewsCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Que disent nos 
        <span className="text-coral-red"> cliens </span> ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Voici les témoignages de clients,
        satisfaits de la qualité de nos services.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center 
      max-lg:flex-col gap-14">
        {reviews.map((review) => (
            <ReviewsCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedbak={review.feedback}/>
          ))}
      </div>
    </section>
  )
}

export default CustomerReviews
