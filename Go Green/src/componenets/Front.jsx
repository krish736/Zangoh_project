import frontImg from "../assets/frontImg.png";
import north_east from "../assets/north_east.png";
import component6 from "../assets/Component 6.png";
import { Link } from "react-router-dom";

const Front = () => {
  return (
    <>
      <div className="main">
        <div className="main_heading">
          <h1 className="first_half">Greenwave</h1>
          <h2 className="second_half">Ecology</h2>
        </div>

        <div className="sub_main">
          <p className="sub_heading">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient
            pretium turpis.
          </p>
          <p className="sub_heading">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient
            pretium turpis.
          </p>
        </div>
      </div>

      <img className="front_img" src={frontImg} alt="" />

      <div className="left_footer">
        <p className="footer_heading">
          Lorem ipsum dolor sit amet consectetur.{" "}
        </p>

        <Link to="/frame10">
          <button className="green_button">
            Go Green
            <img src={north_east} alt="" />
          </button>
        </Link>
      </div>

      <img src={component6} className="right_footer" />
    </>
  );
};

export default Front;
