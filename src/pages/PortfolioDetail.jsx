import React from "react";
import { Carousel } from "flowbite-react";
import portfolio from "/assets/icons/portfolio.png"
import portfolio2 from "/assets/icons/portfolio2.png"
import portfolio3 from "/assets/icons/portfolio3.png"
import { Link } from "react-router-dom";


export const PortfolioDetail1 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 1
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail2 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 2
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail3 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 3
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail4 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 4
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail5 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 5
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail6 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 6
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail7 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 7
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};


export const PortfolioDetail8 = () => {
  return (
    <section className="mx-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white font-medium text-3xl">
          Website project 8
        </h1>
      </div>

      <div className="mt-12">
        <img
          src={portfolio}
          alt="..."
          className=""
        />
      </div>

      <div className="mt-[5rem] mb-10 flex items-center flex-col space-y-8">
        <div className="text-start w-[7.9rem]">
          <h1 className="text-white font-medium text-2xl">Description</h1>
          <div className="flex space-x-1 mt-2">
            <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
            <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-between w-[2px] h-auto bg-blue-500">
            <div className="bg-blue-500 p-1 rounded-lg"></div>
            <div className="bg-blue-500 p-1 rounded-lg"></div>
          </div>

          <div className="w-[32rem]">
              <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque tempore cumque esse exercitationem autem accusantium. Nam quisquam doloremque inventore atque voluptatibus ratione, nihil, expedita unde iusto delectus dolor accusantium maxime quae eius quaerat accusamus, quasi autem optio dignissimos tempore.</p>
          </div>
        </div>
      </div>

      <div className="pl-12 mb-10 text-start w-full">
        <Link className="px-5 py-2 rounded-md bg-blue-500" to={'/portfolio'}>Back</Link>
      </div>
    </section>
  );
};