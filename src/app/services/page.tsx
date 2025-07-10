import ServiceComp from "../components/service";


function Services() {

  return (
    <div className="mx-30 my-10 flex flex-col justify-center items-center gap-10">
      <h2 className="text-xl font-bold">خدمات</h2>
      <hr className="w-20 text-[#F9A220] my-5" />
      <ServiceComp/>
    </div>
  );
}

export default Services;
