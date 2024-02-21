import { DescriptionPage } from "../components/DescriptionPage";
import Image from "next/image";
import honeyImg from "@/public/honey.png";
import ProductReviews from "../components/ProductReviews";
export default function Home() {
  return (
    <>
      <div className="w-full h-1/2 flex flex-col md:flex-row">
        {/* img div */}
        <div
          id="img"
          className="py-12 mt-4  rounded-lg em-auto border-[3px] md:w-1/3  mx-2 md:h-1/2 "
        >
          <Image
            src={honeyImg}
            width="0"
            height="0"
            style={{ width: "100%", height: "auto" }}
            alt="dabour-red-honey"
          />
        </div>
        <DescriptionPage />
      </div>
      <div>
        <ProductReviews />
      </div>
    </>
  );
}
