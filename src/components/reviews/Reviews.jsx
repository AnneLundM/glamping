import reviews from "../../data";
import Review from "../review/Review";

const Reviews = () => {
  return (
    <div className='container'>
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
};

export default Reviews;
