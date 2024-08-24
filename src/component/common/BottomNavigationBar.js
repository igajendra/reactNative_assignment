import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../Components/Constants";
import { navigateCommunity } from "../Utils/UtilityFunctions";
import store from "../store";
import LogData from "../Utils/LogData";

const icons = [
  {
    image: require("../../media/images/home-icon.png"),
    activeImage: require("../../media/images/home-icon-colored.png"),
  },
  {
    image: require("../../media/images/reports-icon.png"),
    activeImage: require("../../media/images/reports-icon-colored.png"),
  },
  // {
  //   image : require("../../media/images/ic_home_logo.png")
  // },
  {
    image: require("../../media/images/community-icon.png"),
    activeImage: require("../../media/images/community-icon-colored.png"),
  },
  {
    image: require("../../media/images/learning.png"),
    activeImage: require("../../media/images/learning-colored.png"),
  },
  {
    image: require("../../media/images/shop-icon.png"),
    activeImage: require("../../media/images/shop-icon-colored.png"),
  },

];

const BottomNavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          }
          );

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'Community') {
              navigateCommunity();
              LogData.logEvent("Community_Section_WebView_Loaded");
            } else {
              navigation.navigate(route.name);
            }
          }
          store.dispatch({ type: "ADD_ORIGHN_PATH", payload: route.name });
        };

        return (
          <TouchableOpacity
            key={index}
            style={styles.buttonStyle}
            onPress={() => {
              onPress();
            }}>
            <Image
              source={isFocused ? icons[index].activeImage : icons[index].image}
              style={styles.image} />
            <Text
              style={[styles.textStyle, isFocused && styles.activeTextStyle]}>
              {label}
            </Text>
          </TouchableOpacity>
        );

      })}
    </View>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    height: 72,
    backgroundColor: COLORS.PrimaryWhite,
  },
  buttonStyle: {
    flex: 1,
    flexDirection: "column",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textStyle: {
    fontFamily: FONTS.Regular,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "400",
    marginTop: 8,
    color: FONTS.FontColorTertiary,
  },
  activeTextStyle: {
    fontWeight: "bold",
    color: FONTS.FontColorPrimary,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  centerIcon: { height: 80, width: 80, marginBottom: 16 },
});
