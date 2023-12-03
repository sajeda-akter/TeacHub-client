

const About = () => {
    return (
       <div>
        <h1 className="text-5xl font-medium text-center mt-24 mb-6 text-red-600">Why you choose us?</h1>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

            <img src="https://i.ibb.co/rMpdt2B/tham.jpg" className="w-11/12" alt="" />
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold">About Us!</h1>
            <p className="py-6">Electronics stores are the ideal place to shop for all types of consumer electronics, from televisions and sound systems to computers and gaming devices. Stores stock numerous brands in many styles and sizes so that customers have plenty of options available when making their purchase decisions.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default About;