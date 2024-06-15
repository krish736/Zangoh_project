import Rating from '../assets/Rating.png'
import Quantity from '../assets/Quantity.png'
import cart from '../assets/Vector(1).png'
import facebook from '../assets/facebook.png'
import twitter from "../assets/twitter.png";
import pinterest from '../assets/pinterest.png'
import insta from "../assets/insta.png";

const Buy =() =>{
    return (
      <>
        <h1 className="buy_h1">Lorem Ispum</h1>
        <img className="rating" src={Rating} alt="" />

        <h4 className="canceled_price">₹48.00</h4>
        <h4 className="price">₹17.00</h4>

        <p className="buy_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et
          aperiam rerum fugit iste praesentium natus obcaecati eveniet dolorem
          minus nesciunt error magni, aspernatur impedit nulla minima officiis
          deserunt accusamus!
        </p>

        <div className="share">
          <p className="share_item">Share Item: </p>
          <img className="social_icon" src={facebook} alt="" />
          <img className="social_icon" src={twitter} alt="" />
          <img className="social_icon" src={pinterest} alt="" />
          <img className="social_icon" src={insta} alt="" />
        </div>

        <img className="quantity" src={Quantity} alt="" />

        <button className="cart">
          Add to Cart <img src={cart} alt="" />{" "}
        </button>

        <div className="buy_footer">
          <div className="flex">
            <p className="bold">Category: </p>
            <p>Lorem Ispum</p>
          </div>
          <div className="flex">
            <p className="bold">Tags: </p>
            <p>Lorem Ispum</p>
          </div>
        </div>
      </>
    );
}

export default Buy