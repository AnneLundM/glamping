import Review from "../review/Review";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const reviews = useLoaderData();

  return (
    <section className='container'>
      {reviews.map((review) => (
        <Review review={review} key={review._id} />
      ))}
    </section>
  );
};

export default Reviews;
