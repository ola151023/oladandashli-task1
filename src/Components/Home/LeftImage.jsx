
import "../../Cssfolders/LeftImage.css"


const LeftImage = () => {
    return (
      <div className="left-image">
        <img src="../src/assets/images/featured.jpg" alt="" />
        <a href="property-details.html">
          <img
            src="../src/assets/images/featured-icon.png"
            alt=""
            style={{ maxWidth: "60px", padding: "0px" }}
          />
        </a>
      </div>
    );
  };
export default LeftImage;  