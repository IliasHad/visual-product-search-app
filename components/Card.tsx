import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "@/theme";

type Props = SpacingProps<Theme> & VariantProps<Theme, "cardVariants">;
const Box = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "cardVariants" }),
]);

type CardProps = Props & {
  children: React.ReactNode;
};

export const Card = ({ children, ...props }: CardProps) => {
  return <Box {...props}>{children}</Box>;
};
