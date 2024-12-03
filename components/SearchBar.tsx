import { useState } from "react";
import { TextInput, useColorScheme } from "react-native";
import {
  launchImageLibrary,
  type ImageLibraryOptions,
  type ImagePickerResponse,
} from "react-native-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box } from "./Container";
import theme, { darkTheme } from "@/theme";

const ShopSearchBar = ({
  onSearch,
  placeholder = "Search products",
  setSelectedImage,
  setSearching,
}: {
  onSearch?: (query: string) => void;
  onFilterPress?: () => void;
  placeholder?: string;
  setSelectedImage: (image: string | null) => void;
  setSearching: (searching: boolean) => void;
}) => {
  const colorSchema = useColorScheme();
  const [searchQuery, setSearchQuery] = useState("");
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
          setSearching(true);
        }
      }
    });
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
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
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
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

export default ShopSearchBar;
