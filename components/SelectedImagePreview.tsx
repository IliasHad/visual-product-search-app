import { Image } from "react-native";
import { Card } from "./Card";
export const SelectedImagePreview = ({
  base64Image,
}: {
  base64Image: string;
}) => (
  <Card marginTop="m">
    <Image
      source={{ uri: `data:image/png;base64,${base64Image}` }}
      style={{ width: "auto", height: 250, objectFit: "contain" }}
    />
  </Card>
);
