import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

export default function CustomerReviews() {
  return (
    <section className="max-container ">
        <h3 className="font-palanquin text-center text-4xl font-bold">What our 
          <span className="text-coral-red"> Customers </span>
            say?
        </h3>
        <p className="text-center info-text m-auto mt-4 max-w-lg">
          Hear genuine stories from our satisfied customers about their exceptional experience with us
        </p>
        <div className="mt-24 justify-evenly flex-1 items-center max-lg:flex-col ">
            {reviews.map(review=>(
              <ReviewCard key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              />
            ))}
        </div>
    </section>
  )
}
