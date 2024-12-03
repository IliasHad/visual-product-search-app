import {
  createRestyleComponent,
  createVariant,
  VariantProps,
  createText,
} from "@shopify/restyle";
import { Theme } from "../theme";

type Props = VariantProps<Theme, "textVariants">;
const TextComponent = createRestyleComponent<Props, Theme>([
  createVariant({ themeKey: "textVariants" }),
]);

type ComponentProps = Props & {
  children: React.ReactNode;
};
export const ThemeText = ({ children, ...props }: ComponentProps) => {
  return <TextComponent {...props}>{children}</TextComponent>;
};

export const Text = createText<Theme>();
