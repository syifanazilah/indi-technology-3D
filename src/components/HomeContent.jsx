import PopUp from "./ui/popup";

const HomeContent = ({ currentStage }) => {
  if (currentStage === 1) {
    // tangan
    return (
      <PopUp to={"/about"}>
        As we believe peoples are the most essential part to produce appropriate
        technology for a brighter future, we are enthusiastic to encourage them
        to improve their skills in technology
      </PopUp>
    );
  }
  if (currentStage === 2) {
    // roket
    return (
      <PopUp to={"/about"}>
        We understand Technology is an important part of our society and will
        deliver us to a brighter future. But in the meantime, we also realized
        human is the most crucial part to encourage technology and make a
        brighter future for the world.
      </PopUp>
    );
  }
  if (currentStage === 3) {
    // puzzle
    return (
      <PopUp to={"/portfolio"}>
        We are able to assist our partners to achieve their digital
        transformation goals with the righteous technology solution their need
      </PopUp>
    );
  }
  if (currentStage === 4) {
    // rumah
    return (
      <PopUp to={"/about"}>
        We have a great desire to produce innovative technology that will able
        to improve society and encourage our partners with emerging technology
        and proper toward their goals
      </PopUp>
    );
  }
};

export default HomeContent;
