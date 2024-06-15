import ImageFlex from "./ImageFlex";

const Frame10 = () =>{
    return (
      <>
        <select className="select_category" name="select category" id="">
          <option value="">select category</option>
        </select>

        <select className="select_price" name="select price" id="">
          <option value="">select price</option>
        </select>

        <select className="sort_by" name="sort by" id="">
          <option value="">Sort By: Price: Low to High</option>
        </select>

        <ImageFlex />
      </>
    );
}

export default Frame10