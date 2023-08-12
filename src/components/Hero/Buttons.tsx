import longArrow from "../../images/long-arrow.svg";

export default function Buttons() {
   return (
      <div className="hero__buttons">
         <button className="hero__button">Get Started</button>
         <button className="hero__button">Learn More</button>
         <img className="hero__long-arrow" src={longArrow} alt="arrow" />
      </div>
   );
}
