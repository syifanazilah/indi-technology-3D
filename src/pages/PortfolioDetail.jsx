import React from "react";
import { Carousel } from "flowbite-react";
import portfolio from "/assets/icons/portfolio.png"
import portfolio2 from "/assets/icons/portfolio2.png"
import portfolio3 from "/assets/icons/portfolio3.png"

export const PortfolioDetail1 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Web HENGKERVVIBUTEZETYE
        </h1>
      </div>

      <div className="h-56 sm:h-64 xl:h-[25rem] 2xl:h-96 mt-10 w-[50rem]">
        <Carousel slideInterval={1500}>
          <img
            src={portfolio}
            alt="..."
          />
          <img
            src={portfolio2}
            alt="..."
          />
          <img
            src={portfolio3}
            alt="..."
          />
        </Carousel>
      </div>

      <div className="mt-16 mb-10 flex flex-col items-center space-y-4">
        <h1 className="text-white font-medium text-center text-2xl">Description</h1>

        <div className="w-[25rem]">
            <p>Non-Government Budget Investment Financing or Pembiayaan Investasi Non-Anggaran Pemerintah PINA is a facilitation scheme aimed to accelerate the private investment financing of national strategic projects, which source of funding is originated from non-government budget non-APBN/APBD and is fully supported by government policies.</p>
        </div>
      </div>
    </section>
  );
};

// import React from 'react'

// const PortfolioDetail = () => {
//   return (
//     <section className="mx-10 flex flex-col justify-center items-center">
//         <div className="text-start w-[7.7rem]">
//             <h1 className="text-white font-medium text-3xl border-b-2 border-blue-500"></h1>
//         </div>
//     </section>
//   )
// }

// export default PortfolioDetail
