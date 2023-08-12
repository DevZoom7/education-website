import Buttons from "./Buttons";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

export default function Hero() {
   return (
      <main className="hero">
         <Title />
         <Description />
         <Image />
         <Buttons />
      </main>
   );
}
