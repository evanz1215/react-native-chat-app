import { View } from "react-native";
import { Slot } from "expo-router";

// Import your global CSS file
import "../global.css";

export default function _layout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
