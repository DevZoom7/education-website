import img from "../../images/man.svg";
import arrow1 from "../../images/arrow1.svg";
import arrow2 from "../../images/arrow2.svg";
import ellipse from "../../images/ellipse.svg";

export default function Image() {
   return (
      <div className="hero__images-wrapper">
         <img className="shape arrow1" src={arrow1} alt="arrow" />
         <img className="shape arrow2" src={arrow2} alt="arrow" />
         <img className="shape ellipse" src={ellipse} alt="ellipse" />
         <img src={img} alt="Man" />
      </div>
   );
}
