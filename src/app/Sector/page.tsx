import ServiceComp from "../components/serviceAndSector";

function Services() {
  return (
    <div className="flex flex-col justify-center items-center py-32 gap-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold">گروه های تخصصی</h2>
        <hr className="w-24 border-t-[2px] border-[#F9A220] my-5" />
      </div>
      <ServiceComp src="http://localhost:3001/sector" />
    </div>
  );
}

export default Services;
