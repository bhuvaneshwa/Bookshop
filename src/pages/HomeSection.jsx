import  { useState, useEffect } from "react";
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
        className="pt-20 m-5  bg-cover h-[25rem] relative transition duration-1000"
        style={{
          backgroundImage: backgrounds[backgroundIndex],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transitionProperty: "background-image",
        }}
        id="home"
      >
        <div className="text-5xl pt-0 pl-28 flex  h-[15rem]">
          <h1>Welcome</h1>
        </div>
      </section>

      <SecondBanner />

      <div className="m-10">
        <General />
        <Permium />
        <Newbooks />
      </div>

      <Testimonial/>

      <Membership />
    </div>
  );
};

export default HomeSection;
