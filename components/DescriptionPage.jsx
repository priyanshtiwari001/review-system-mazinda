import React from "react";

export function DescriptionPage() {
  return (
    <div id="deatils" className="px-7 py-3  w-full md:w-[70%]">
      <div>
        <h1 className="text-xl font-bold md:text-3xl">
          Zandu Pure Honey(500gm)
        </h1>
        <div className="flex items-center justify-between w-1/3 py-2">
          <h3 className="text-2xl">$30/-</h3>
          <span className="pl-7 text-green-600 text-2xl">
            <del className="pr-4 text-gray-500 text-lg">$25</del>17.5%
          </span>
        </div>
      </div>
      <div className="border-[2px] "></div>
      {/* icon-images */}
      <div className="my-3">
        <ul className="flex justify-between items-center text-center">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            Fast delivery
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
              />
            </svg>
            Refund
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            COD
          </li>
        </ul>
      </div>
      <div className="border-[2px] "></div>
      {/* description and unit */}
      <div className="my-3">
        <h1 className="text-2xl pb-2">Description</h1>
        <ul className="font-light">
          <li>
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex!
            Laboriosam amet, adipisci voluptatem sequi odit dicta! Omnis,
            nostrum adipisci.
          </li>
          <li>
            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            deleniti!
          </li>
          <li> - Lorem ipsum dolor sit amet.</li>
          <li>
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            repudiandae, nobis cupiditate quia saepe magni commodi hic ipsum
            maxime laboriosam esse voluptatem, accusamus possimus voluptas
            perferendis officiis magnam atque aliquid?
          </li>
        </ul>
        <div className="border-[1px] "></div>
        <div>
          <h2 className="text-xl pb-2 ">Units</h2>
          <p className="font-light">-500gm</p>
        </div>
      </div>
      <div className="border-[2px] "></div>
    </div>
  );
}
