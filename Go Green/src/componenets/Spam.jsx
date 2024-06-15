import vector from "../assets/expand_more.png";

const Spam = () => {
  return (
    <>
      <div className="spam">
        <p>lorem ipsum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
        <p>lorem islum</p>
      </div>

      <div className="Back">
        <img className="expand" src={vector} alt="" />
        <p>Back</p>
      </div>
    </>
  );
};

export default Spam;
