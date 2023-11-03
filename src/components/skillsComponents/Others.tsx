import { Button } from "../ui/Button";
import React from "../../assets/images/react.svg";
import Typescript from "../../assets/images/typescript.svg";

export function OthersStacks() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Button title="React" logo={React} size="medium" logoSize="medium" />
      <Button title="Typescript" logo={Typescript} size="medium" logoSize="medium" />
    </div>
  );
}
