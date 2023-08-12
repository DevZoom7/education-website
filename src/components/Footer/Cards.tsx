import InfoCard from "./InfoCard";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";

export default function Cards() {
   return (
      <>
         <InfoCard
            iconSrc={icon1}
            title="Expert Teacher"
            description={description}
         />
         <InfoCard
            iconSrc={icon2}
            title="Online Courses"
            description={description}
         />
         <InfoCard
            iconSrc={icon3}
            title="24/7 Support"
            description={description}
         />
      </>
   );
}

const description = "a learning system based on formalised teaching";
