import Links from "./Links";
import Logo from "./Logo";
import SignUp from "./SignUp";



export default function Navbar() {
   
   return (
      <nav className="navbar">
         <Logo />
         <Links />
         <SignUp />
      </nav>
   );
}


