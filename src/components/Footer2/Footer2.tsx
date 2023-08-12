import iIcon from "../../images/i-icon.svg";

export default function Footer2() {
   return (
      <footer className="footer2">
         <ul className="footer2__links">
            <li>
               Designed By{" "}
               <a
                  className="footer2__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/@taqwah_digital"
               >
                  Taqwah
               </a>
            </li>
            <li>
               Available At{" "}
               <a
                  className="footer2__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1106419083809244171"
               >
                  Figma
               </a>
            </li>
            <li>
               License{" "}
               <a
                  className="footer2__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://creativecommons.org/licenses/by/4.0/"
               >
                  CC BY 4.0
               </a>
            </li>
         </ul>
         <ul className="footer2__links">
            <li>
               Coded By{" "}
               <a
                  className="footer2__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/DevZoom7"
               >
                  DevZoom7
               </a>
            </li>
            <li>
               Source Code On{" "}
               <a
                  className="footer2__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/DevZoom7/education-website"
               >
                  Github
               </a>
            </li>
            <li className="footer2__alert">
               <img src={iIcon} alt="alert icon" />
               <p>
                  The design has been slightly <b>modified</b>
               </p>
            </li>
         </ul>
      </footer>
   );
}
