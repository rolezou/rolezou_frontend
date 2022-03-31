import React, { useEffect } from "react";
import { View } from "react-native";
import { COLORS } from "./src/shared/colors";
import Home from "./src/pages/Home";
import UserService from "./src/services/UserService";

export default function App() {
  useEffect(async () => {
    await UserService.setLoggedUser({
      id: "UuzMBWlzAyWpChu6mbWN",
    });
  }, []);

  return (
    <View style={{ height: "100%" }}>
      <Home />
    </View>
  );
}
