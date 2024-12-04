import { TextInput, useColorScheme } from "react-native";
import {
  launchImageLibrary,
  type ImageLibraryOptions,
  type ImagePickerResponse,
} from "react-native-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box } from "./Container";
import theme, { darkTheme } from "@/theme";

export const ShopSearchBar = ({
  placeholder = "Search products",
  setSelectedImage,
  searchQuery,
  setSearchQuery,
}: {
  onFilterPress?: () => void;
  placeholder?: string;
  setSelectedImage: (image: string) => void;
  searchQuery: string | null;
  setSearchQuery: (query: string | null) => void;
}) => {
  const colorSchema = useColorScheme();
  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log("Image picker error: ", response.errorMessage);
      } else if (response.assets) {
        let imageUri = response.assets[0].base64;
        if (imageUri) {
          setSelectedImage(imageUri);
        }
      }
    });
  };

  const handleTextChange = (text: string) => {
    if (text === "") {
      setSearchQuery(null);
      return;
    }
    setSearchQuery(text);
  };
  return (
    <Box
      flexDirection="row"
      padding="s"
      marginRight="s"
      marginLeft="s"
      backgroundColor="cardPrimaryBackground"
      borderRadius="m"
    >
      <Box
        flexDirection="row"
        padding="s"
        flex={1}
        justifyContent="space-between"
        alignContent="center"
      >
        <Ionicons
          name="search"
          size={20}
          color={
            colorSchema === "dark"
              ? darkTheme.colors.iconColor
              : theme.colors.iconColor
          }
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            colorSchema === "dark"
              ? darkTheme.colors.placeholderText
              : theme.colors.placeholderText
          }
          value={searchQuery || ""}
          onChangeText={handleTextChange}
          onSubmitEditing={() => setSearchQuery(searchQuery)}
          clearButtonMode="while-editing"
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            fontSize: 16,
            color:
              colorSchema === "dark"
                ? darkTheme.colors.white
                : theme.colors.black,
            flex: 1,
            marginLeft: 10,
          }}
        />
        <Ionicons
          name="camera"
          size={20}
          color={
            colorSchema === "dark"
              ? darkTheme.colors.iconColor
              : theme.colors.iconColor
          }
          onPress={openImagePicker}
        />
      </Box>
    </Box>
  );
};