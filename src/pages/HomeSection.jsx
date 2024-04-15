import { useState, useEffect } from "react";
import General from "./Books/General";
import Newbooks from "./Books/Newbooks";
import Permium from "./Books/Permium";
import Membership from "./Membership";
import SecondBanner from "./SecondBanner";
import Testimonial from "./Testimonial";

const HomeSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgrounds = [
    "url('https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww')",
    "url('https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Here-Know-Why-Books-Are-Important-in-Students-Life-1.jpg')",
  ];

  return (
    <div>
      <section
        className="pt- bg-cover m-5 bg-gray-200 bg-center h-[30rem] relative transition duration-1000 mt-2"
        style={{
          backgroundImage: backgrounds[backgroundIndex],
          backgroundSize: "cover",
          backgroundPosition: "center",
          transitionProperty: "background-image",
          borderRadius: "20px", // Example border radius
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Example box shadow
        }}
        id="home"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-25" // Darkens the background image
          style={{ borderRadius: "20px" }} // Apply the same border radius as the parent
        ></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/2 p-5">
            <div className="content flex flex-col justify-center items-center bg-transparent p-5 rounded-xl h-full">
              <h3 className="text-4xl font-bold text-white text-center">
                Books Feed Your Soul
              </h3>
              <p className="text-base text-gray-700 leading-relaxed my-4 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                ipsam et maxime libero inventore placeat illo, illum deserunt
                rem aperiam fuga repudiandae distinctio quo odio sit
                perspiciatis vero laudantium minima.
              </p>
              <a
                href="#populer"
                className="btn bg-[#007bff] hover:text-black hover:bg-white text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-secondaryColor"
              >
                Shop Now !
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* You can add any additional content here */}
          </div>
        </div>
      </section>

      <SecondBanner />

      <div className="m-10">
        <General />
        <Permium />
        <Newbooks />
      </div>

      <Testimonial />

      <Membership />
    </div>
  );
};

export default HomeSection;
