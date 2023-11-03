import { useOtherStacks } from "../data/MockOtherStacks";
import { Button } from "../ui/Button";

export function OthersStacks() {
  const { frontStacks } = useOtherStacks()
  
  return (
    <div className="flex flex-wrap items-center justify-center">
      {frontStacks.map((stack)=>(
        <Button key={stack.title} title={stack.title} logo={stack.logo} size="xl" logoSize="medium" />
        ))}
    </div>
  );
}
