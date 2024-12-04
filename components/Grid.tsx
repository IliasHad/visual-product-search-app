import { View } from "react-native";
import { styles } from "@/styles";

export const Grid = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.grid}>{children}</View>
);


