import { Card } from "./Card";
import { Text } from "./Text";
import { ActivityIndicator } from "react-native";
import theme from "@/theme";

export const LoadingResults = () => (
  <Card marginTop="m">
    <Text variant="header">Searching...</Text>
    <Text variant="body" marginTop="s">
      Please wait while we search for similar products
    </Text>
    <Card marginTop="s">
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Card>
  </Card>
);
