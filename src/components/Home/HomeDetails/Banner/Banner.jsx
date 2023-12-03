import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className=' bg-gray-100 lg:p-44 p-12 flex flex-col-reverse lg:flex-row justify-around items-center '>
            <div className=''>
            <h1 className='mt-6 text-3xl text-center lg:text-left lg:text-5xl font-medium'>
               Our Latest 
          <span className='font-bold text-red-400  mt-2'>  Product</span>
           
            </h1>
            <p className='my-3'>This is world famous brand shop.You can buy anything of your ability with best services.This is world famous brand shop.You can buy anything of your ability with best services.</p>
            <button className='lg:ml-32 ml-28 mb-3 bg-indigo-500 uppercase text-xl rounded-md p-2 mt-6 text-white '>Get Started</button>
            </div>
        <div className='lg:w-2/5 w-96 lg:mt-0 mt-12'>
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
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper text-center"
        >
          <SwiperSlide>
            <img className='rounded-md h-96 w-full' src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='rounded-md h-96 w-full' src="https://images.unsplash.com/photo-1644571663498-f4f18db66c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='rounded-md h-96 w-full' src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1vbml0b3J8ZW58MHx8MHx8fDA%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='rounded-md h-96 w-full' src="https://plus.unsplash.com/premium_photo-1671017793626-51a8214427b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGh1YnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='rounded-md h-96 w-full' src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img  className='rounded-md h-96 w-full' src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFjdCUyMGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
          </SwiperSlide>
          
        </Swiper>
        </div>
      </div>
    );
};

export default Banner;