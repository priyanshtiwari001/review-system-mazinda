import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
export const StarCount = ({ num }) => {
  function starCounter(n) {
    let abc = n * 10;
    let list1 = [];

    for (let i = 1; i < 6; i++) {
      if (i * 10 <= abc) {
        //   console.log('x');
        list1.push(1);
      } else {
        if (i * 10 - abc <= 5 && i * 10 - abc !== 0) {
          //   console.log("Half")
          list1.push(2);
        } else {
          //   console.log('0')
          list1.push(0);
        }
      }
    }

    return list1;
  }

  let StarCreate = starCounter(num);
  return (
    <div className="flex flex-row ">
      {StarCreate.map((e, index) => {
        if (e === 1) {
          return (
            <BiSolidStar className="text-yellow-500 text-2xl " key={index} />
          );
        } else if (e === 2) {
          return (
            <BiSolidStarHalf className="text-yellow-500 text-2xl" key={index} />
          );
        } else {
          return <BiStar className="text-yellow-500 text-2xl" key={index} />;
        }
      })}
    </div>
  );
};
