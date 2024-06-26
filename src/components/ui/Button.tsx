import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "text-white hover:bg-[#24292F]/90 gap-2",
    "font-medium",
    "rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center",
    "items-center dark:hover:bg-[#050708]/30 mr-2 mb-2",
  ],
  variants: {
    bg: {
      primary: "bg-[#24292F]",
      secondary: "bg-[#E83752]",
      tertiary: "bg-[#ffff]",
    },
    size: {
      small: "w-24 h-7",
      medium: "w-[114px] h-[31px]",
      large: "w-[170px] h-[33px]",
      xl: "w-[160px] h-[40px]",
      noTitleSmall: "w-12 h-7 p-1",
      noTitleMedium: "w-14 h-7 p-1",
      noTitleLarge: "w-16 h-7 p-1",
    },
    focus: {
      activeFocus:
        "focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 dark:focus:ring-gray-500",
    },
  },
  defaultVariants: {
    bg: "primary",
    size: "medium",
  },
});

const iconVariants = tv({
  base: ["w-5 h-5"],
  variants: {
    logoSize: {
      small: "w-3 h-3",
      medium: "w-5 h-5",
      large: "w-7 h-7",
    },
  },
});

interface IButtonProps
  extends VariantProps<typeof buttonVariants>,
  VariantProps<typeof iconVariants> {
  title: string;
  logo: string;
  endereco?: string;
}

export function Button({ title, logo, bg, size, endereco, logoSize }: IButtonProps) {
  return (
    <a href={endereco} target="_blank">
      <button type="button" className={buttonVariants({ bg, size })}>
        <img className={iconVariants({ logoSize })} src={logo} alt="" />
        {title}
      </button>
    </a>
  );
}