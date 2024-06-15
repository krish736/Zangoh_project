import img1 from "../assets/Frame 238(3).png";
import img2 from "../assets/Frame 238(2).png";
import img3 from "../assets/Frame 238.png";
import img4 from "../assets/Frame 238(1).png";
import { Link } from "react-router-dom";

const ImageFlex = () => {
  return (
    <>
      <Link to="/img1">
        <div className="first_img">
          <img src={img1} alt="" />
        </div>
      </Link>

      <Link to="/img2">
        <div className="second_img">
          <img src={img2} alt="" />
        </div>
      </Link>

      <Link to="/img3">
        <div className=" third_img">
          <img src={img3} alt="" />
        </div>
      </Link>

      <Link to="/img4">
        <div className="fourth_img">
          <img src={img4} alt="" />
        </div>
      </Link>
    </>
  );
};

export default ImageFlex;
