import Spam from "./Spam";
import Property2 from "../assets/Property2.png";
import Buy from "./Buy";
const Img3 = () => {
  return (
    <>
      <Spam />
      <img className="big_img" src={Property2} alt="" />
      <Buy/>
    </>
  );
};

export default Img3;
