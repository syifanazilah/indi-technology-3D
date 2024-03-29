import Card, { CardImg, CardTitle } from "../components/Card";

const Portfolio = () => {
  return (
    <section className="container flex flex-col justify-center items-center">
      <div className="text-start w-[7.6rem] mb-12">
        <h1 className="text-white font-medium text-3xl">Portfolio</h1>
        <div className="flex space-x-1 mt-2">
          <div className="bg-blue-500 w-[3rem] py-[0.10rem] rounded-lg"></div>
          <div className="bg-blue-500 w-full py-[0.10rem] rounded-lg"></div>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card to={"/portfoliodetail1"}>
          <CardImg src={"/assets/icons/Debat-Capres-Cawapres-RI-2019-1.jpg"} />
          <CardTitle>Debat Pilpres 2019 Inf. System</CardTitle>
        </Card>

        <Card to={"/portfoliodetail2"}>
          <CardImg src={"/assets/icons/Amalia-Cosmetic-1.jpg"} />
          <CardTitle>Amalia Cosmetics Ecommerce</CardTitle>
        </Card>

        <Card to={"/portfoliodetail3"}>
          <CardImg src={"/assets/icons/AhwalNote-1.jpg"} />
          <CardTitle>AhwalNote App</CardTitle>
        </Card>

        <Card to={"/portfoliodetail4"}>
          <CardImg src={"/assets/icons/Denny-AK-1.jpg"} />
          <CardTitle>Denny AK Attorney</CardTitle>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
