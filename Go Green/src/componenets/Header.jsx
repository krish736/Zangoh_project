import { RiAccountCircleFill } from "react-icons/ri";
import cil_plant from '../assets/cil_plant.png'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="heading">
          <div className="flex">
            <img className="icon" src={cil_plant} alt="" />
            <p>Green</p>
          </div>
        </div>

        <div className="links">
          <p>About us</p>
          <p>Shop</p>
          <p>Cart</p>
          <p>Offer</p>
        </div>

        <div className="search">
          <input type="search" />
        </div>

        <div className="account">
          <div className="flex">
            <RiAccountCircleFill className="icon" />
            <p>My account</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
