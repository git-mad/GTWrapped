import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InsightListCardView from "./InsightListCardView";
import { Card } from "react-native-paper";
import { GestureHandler } from "expo";
import * as React from "react";
import { UseSwipe } from "./UseSwipe";

export default Test2 = ({ navigation }) => {
  const { onTouchStart, onTouchEnd } = UseSwipe(onSwipeLeft, onSwipeRight, 6);

  function onSwipeLeft() {
    navigation.navigate("Default");
  }

  function onSwipeRight() {
    navigation.navigate("Default");
  }

  return (
    <>
      <View
        style={styles.container}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <InsightListCardView></InsightListCardView>
        <StatusBar style="auto" />
      </View>
      <Text>Test2</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(34,38,37)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
