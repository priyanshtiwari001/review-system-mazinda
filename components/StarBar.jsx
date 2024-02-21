export const StarBar = ({ total, starCount }) => {
  let abc = (starCount / total) * 100;
  return (
    <div className="border h-[19px] mt-1  w-[100px] border-gray-200">
      <div
        style={{
          width: `${abc}px`,
        }}
        className={`h-[17px] bg-yellow-500`}
      ></div>
    </div>
  );
};
