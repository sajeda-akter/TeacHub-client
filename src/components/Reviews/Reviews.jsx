import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Initialize AOS
AOS.init();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews)
  useEffect(() => {
    fetch("https://tech-hub-server-rust.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  
  return (
    <div className="mt-12 mb-12">
      <p className="text-center text-xl font-medium text-red-500">
        {" "}
        What say our customer
      </p>
      <p className="text-3xl font-bold text-center my-3 border-y-4 w-52 mx-auto border-indigo-900">
        Reviews
      </p>

      <div className="w-10/12 mx-auto grid lg:grid-cols-2 mt-6">
        {reviews.slice(0, 4).map((review) => (
          <div
            data-aos={review.animate}
            className=" mt-3 w-10/12 bg-indigo-200 p-12 text-center rounded-xl "
            key={review._id}
          >
            <p className="text-xl">{review.review.slice(0, 100)}</p>
            <p className="w-32 mx-auto my-4">
              {" "}
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </p>
            <img src={review.img} className="w-16 h-16 rounded-full mx-auto" alt="" />
            <p className="text-2xl font-medium">{review.name}</p>
          </div>
        ))}
      </div>
          <div className="w-24 mx-auto">
          <Link to='/allreview'><button className=" bg-indigo-500 uppercase text-xl rounded-md p-2 mt-6 text-white w-32">See All</button></Link>

          </div>
    </div>
  );
};

export default Reviews;
