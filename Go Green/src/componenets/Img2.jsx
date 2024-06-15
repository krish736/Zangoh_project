import Spam from "./Spam";
import Property3 from '../assets/Property3.png'
import Buy from "./Buy";

const Img2 = () => {
  return (
    <>
      <Spam />
        <img className="big_img" src={Property3} alt="" />
        <Buy/>
    </>
  );
};

export default Img2;
