import Spam from "./Spam";
import Property1 from "../assets/Property1.png";
import Buy from "./Buy";

const Img4 = () => {
  return (
    <>
      <Spam />
      <img className="big_img" src={Property1} alt="" />
      <Buy/>
    </>
  );
};

export default Img4;
