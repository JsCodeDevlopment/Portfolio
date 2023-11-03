import { Button } from "../ui/Button";
import React from "../../assets/images/react.svg";
import Html from "../../assets/images/html.svg";
import Css from "../../assets/images/css.svg";
import Javascript from "../../assets/images/javascript.svg";
import Typescript from "../../assets/images/typescript.svg";
import Lottie from "../../assets/images/lottie.png";
import Tailwind from "../../assets/images/tailwind.svg";
import Styled from "../../assets/images/styledcomponents.svg";
import Vite from "../../assets/images/vite.svg";

export function FrontStacks() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Button title="HTML" logo={Html} size="xl" logoSize="medium" />
      <Button title="CSS" logo={Css} size="xl" logoSize="medium" />
      <Button title="Javascript" logo={Javascript} size="xl" logoSize="medium" />
      <Button title="Typescript" logo={Typescript} size="xl" logoSize="medium" />
      <Button title="React" logo={React} size="xl" logoSize="medium" />
      <Button title="Lottie" logo={Lottie} size="xl" logoSize="medium" />
      <Button title="Tailwind" logo={Tailwind} size="xl" logoSize="medium" />
      <Button title="Styled Components" logo={Styled} size="xl" logoSize="medium" />
      <Button title="Vite" logo={Vite} size="xl" logoSize="medium"/>
    </div>
  );
}
