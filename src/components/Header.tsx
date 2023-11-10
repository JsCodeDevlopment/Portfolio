import Logo from "../assets/images/mini-logo.png";
import HbgBtn from "../assets/images/menu.png";
import CloseBtn from "../assets/images/close-menu.png";
import { Link } from "react-router-dom";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { useState } from "react";

export function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="hidden fixed items-center justify-between px-10 py-2 bg-gradient-to-b from-background to-black/60 shadow-md w-full z-50 max-lg:flex max-md:px-6">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            className="w-[44px] h-[44px] rounded-md max-md:w-7 max-md:h-7"
            src={Logo}
            alt="" />
        </Link>
      </div>
      <div className="flex cursor-pointer" onClick={()=>setMenuVisible(!menuVisible)}>
        <img
          className="w-[44px] h-[44px] max-md:w-7 max-md:h-7"
          src={menuVisible ? CloseBtn : HbgBtn}
          alt="" />
      </div>
      {menuVisible && <ResponsiveMenu setMenuVisible={setMenuVisible}/>}
    </div>
  );
}