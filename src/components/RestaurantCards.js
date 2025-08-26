
// const imgl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";
import {IMG} from "../utils/constants.js";
const RestaurantCards=(props)=>{
  const {resData} = props;
  const {name: resName, cuisines: cuisine, avgRating: rating, costForTwo: Costfortwo,cloudinaryImageId:cloudinaryImageId} = resData?.info;
  return (
    
    <div className="res-card">
      <img src={IMG+cloudinaryImageId} alt="Unable to load"/>
      <h3>{resName}</h3>
     <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
     <h4>{Costfortwo}</h4>

    </div>
  )
}
export default RestaurantCards;