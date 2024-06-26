import { Link } from "react-router-dom";
import { useMenuOptions } from "./data/MockMenu";
import { IconAnimation } from "./IconAnimation";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface IResponsiveMenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>
}

export function ResponsiveMenu ({ setMenuVisible }: IResponsiveMenuProps) {
  const { menuOptions } = useMenuOptions();
  const dropDownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
   const handleOutsideClick = (e: MouseEvent) => {

    if (!dropDownRef.current) {
      return
    }

    if (e.target !== dropDownRef.current) {
      setMenuVisible(false)
    }
  }

  setTimeout(() => {
    document.querySelector('body')?.addEventListener('click', handleOutsideClick)
  }, 100);
  
  return () => document.querySelector('body')?.removeEventListener('click', handleOutsideClick)
  }, [])
  

  return (
    <div className="inline-flex flex-col items-center absolute bg-gradient-to-b from-black/90 to-black/40 rounded-md shadow-md top-[4.3rem] right-2 max-md:top-[3rem]">
      <ul className="flex p-2 flex-col gap-1 items-start w-48 h-70">
        <li ref={dropDownRef} className="flex gap-2 py-1 px-2 w-full text-white font-semibold border-b border-white/20">
          Menu
        </li>
        {menuOptions.map((option) => (
          <li
            key={option.title}
            className="flex gap-2 py-1 w-full text-white rounded-md hover:bg-gradient-to-r hover:from-white/30 hover:to-white/5" >
            <Link to={option.href} key={option.title} onMouseEnter={() => option.iconRef.current?.play()} onMouseLeave={() => option.iconRef.current?.stop()}>
              <div className="flex gap-2 items-center w-full p-1 h-10">
                <IconAnimation data={option.icon} iconRef={option.iconRef} speed={option.speed}/>
                <p className="text-lg">{option.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}