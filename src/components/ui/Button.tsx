import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "text-white hover:bg-[#24292F]/90 focus:ring-4 gap-2",
    "focus:outline-none focus:ring-[#24292F]/50 font-medium",
    "rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center",
    "items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",
  ],
  variants: {
    bg: {
      primary: "bg-[#24292F]",
      secondary: "bg-[#E83752]",
    },
    size: {
      small: "w-24 h-7",
      medium: "w-[114px] h-[31px]",
      large: "w-[114px] h-[31px]",
    },
  },
  defaultVariants: {
    bg: "primary",
    size: "medium",
  },
});

interface IButtonProps extends VariantProps<typeof buttonVariants> {
  title: string;
  logo: string;
  endereco?: string
}

export function Button({ title, logo, bg, size, endereco }: IButtonProps) {
  return (
    <a href={endereco} target="_blank">
      <button type="button" className={buttonVariants({ bg, size, })}>
        <img src={logo} alt="" />
        {title}
      </button>
    </a>
  );
}
