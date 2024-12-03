import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
  color,
  ColorProps,
} from "@shopify/restyle";

import { Theme } from "../theme";
import theme from "../theme";
import { Text } from "./Text";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  color,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
  tone?: "primary" | "secondary" | "destructive" | "warning";
  size?: "small" | "medium" | "large";
} & React.ComponentProps<typeof View>;

const ButtonItem = ({
  onPress,
  label,
  tone = "primary",
  size = "medium",
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        {...props}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          backgroundColor:
            tone === "primary"
              ? theme.colors.primary
              : tone === "secondary"
              ? theme.colors.secondary
              : tone === "destructive"
              ? theme.colors.destructive
              : theme.colors.warning,
          borderColor:
            tone === "primary"
              ? theme.colors.primary
              : tone === "secondary"
              ? theme.colors.secondary
              : theme.colors.destructive,
          padding:
            size === "small"
              ? theme.spacing.s
              : size === "medium"
              ? theme.spacing.m
              : theme.spacing.l,
          borderRadius:
            size === "small"
              ? theme.borderRadius.s
              : size === "medium"
              ? theme.borderRadius.m
              : theme.borderRadius.l,
        }}
      >
        <Text variant="button" color={"white"} >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const Button = ({ onPress, label, ...rest }: Props) => {
  return <ButtonItem onPress={onPress} label={label} {...rest} />;
};
