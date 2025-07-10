import ImageSlider from "../components/imageSlider";

import ProjectComp from "../components/projectComp";
import PhoneUs from "../components/phoneUs";
import Studio from "../components/studio";
import Specilzation from "../components/specilazation";

function HomePage() {
  return (
    <>
      <ImageSlider />
      <Studio/>
      <Specilzation/>
      <div className="flex flex-col items-center justify-center">
        <div className="w-2/3 flex justify-end">
          <h1 className="text-black text-4xl font-bold"> اخرین پروژه ها</h1>
          <hr className="w-10 border-t-3 border-[#F9A220] mx-3 mt-8" />
        </div>
        <ProjectComp />
      </div>
      <PhoneUs />
    </>
  );
}

export default HomePage;
