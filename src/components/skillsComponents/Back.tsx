import { Button } from "../ui/Button";
import { useBackStacks } from "../data/MockBackStacks";

export function BackStacks() {
  const { frontStacks } = useBackStacks()
  
  return (
    <div className="flex flex-wrap items-center justify-center">
      {frontStacks.map((stack)=>(
        <Button key={stack.title} title={stack.title} logo={stack.logo} size="xl" logoSize="medium" />
        ))}
    </div>
  );
}
