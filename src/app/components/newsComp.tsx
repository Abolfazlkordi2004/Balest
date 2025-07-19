import Image from "next/image";
import toPersianDigits from "../helper/persian";
import Link from "next/link";
import { NewsProps } from "../News/page";

function NewsComp({ slug, img, date, header, text }:NewsProps) {
  return (
    <div className="flex flex-row justify-center items-center">
      {
        <div
          key={slug}
          className="w-[500px] h-full flex flex-col justify-center items-end"
        >
          <div className="w-full h-[500px] relative overflow-hidden">
            <Link href={`/News/${slug}`}>
              <Image src={img} alt="image" fill className="object-cover" />
            </Link>
          </div>
          <h2 className="w-full text-black text-right my-1 text-xl">
            {toPersianDigits(date)}
          </h2>
          <Link href={`/News/${slug}`}>
            <h1 className="w-full text-black text-right my-1 font-bold text-2xl">
              {header}
            </h1>
          </Link>
          <p className="w-full text-gray-600 text-right my-1">
            {text.slice(0, 50)}...
          </p>
          <div className="w-[200px] h-[100px] text-right my-5">
            <Link href={`/News/${slug}`}>
              <button
                type="submit"
                className="text-lg text-white font-bold bg-[#F9A220] w-[120px] h-[50px] rounded-3xl cursor-pointer"
              >
                ادامه
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export default NewsComp;
