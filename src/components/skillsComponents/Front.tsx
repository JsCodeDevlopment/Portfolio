import { Button } from "../ui/Button";
import { useFrontStacks } from "../data/MockFrontStacks";

export function FrontStacks() {
  const { frontStacks } = useFrontStacks()
  
  return (
    <div className="flex flex-wrap items-center justify-center">
      {frontStacks.map((stack)=>(
        <Button key={stack.title} title={stack.title} logo={stack.logo} size="xl" logoSize="medium" />
        ))}
    </div>
  );
}