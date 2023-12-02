import { Link, useLoaderData, useParams } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const BrandProduct = () => {
    const productAll=useLoaderData()
    const {id}=useParams()
    
    // console.log(id,pros)
    const products=productAll.filter(product=> product.brand_id===id)
    
 
  
    return (
        <div className="bg-[#FAF8ED] py-12">
            <div className="my-6 w-3/4 mx-auto bg-red-100 px-4 py-7">
            <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        //   pagination={{
        //     clickable: true,
        //   }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper text-center"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/qNFcmyd/com.jpg" className="object-fit w-96 mx-auto rounded-md" alt="" />
            <p className="text-xl font-bold mt-6">Compact Drone Explorer</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/pXJ0HpF/paint.jpg"  className="w-96 mx-auto rounded-md" alt="" />
            <p className="text-xl font-bold mt-6">Digital Drawing Tablet</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/S5WYRcP/watch.jpg"  className="w-96 mx-auto rounded-md" alt="" />
            <p className="text-xl font-bold mt-6">Smart Fitness Watch</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/rMpdt2B/tham.jpg"  className="w-5/12 mx-auto rounded-md" alt="" />
            <p className="text-xl font-bold mt-6">Smart Thermostat</p>
          </SwiperSlide>
       
        </Swiper>
            </div>
  <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto gap-5">
        {
            products.length >0?  products.map(brand=><AllProduct key={brand._id} product={brand}>

                </AllProduct>) :
                <>
        <h1 className="text-4xl text-red-500 font-bold text-center  ">This brand does not have any data <span className="text-indigo-800 font-medium border-2 border-red-900 rounded-md  p-3 text-xl"><Link to="/">Go Back</Link></span></h1>
                </>
            }
        </div> 
        </div>
    );
};

export default BrandProduct;