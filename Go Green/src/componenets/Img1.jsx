import Spam from "./Spam";
import component8 from '../assets/Component 8.png'
import Buy from "./Buy";

const Img1 = () =>{
    return (
      <>
        <Spam/>
        <img className="big_img" src={component8} alt="" />
        <Buy/>
      </>
    );
}

export default Img1