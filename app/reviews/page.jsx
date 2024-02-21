import Image from "next/image";
import HoneyImg from "@/public/honey.png";
import Formdetails from "../../components/Formdetail";
const page = () => {
  return (
    <div className="mt-6 w-full md:w-1/2  flex flex-col items-center justify-center border-[2px]  rounded-lg border-orange-600 mx-auto">
      <div className="border-[3px]"></div>
      <div className="text-xl md:text-2xl p-2 font-mono ">
        Please write the Review of the product
      </div>
      <div className="flex items-center">
        <Image src={HoneyImg} alt="honey-red-honey" width={100}></Image>
        <div>
          <h1 className="text-sm font-bold">Zandu Pure Honey(500gm)</h1>
        </div>
      </div>
      <Formdetails />
    </div>
  );
};
export default page;
