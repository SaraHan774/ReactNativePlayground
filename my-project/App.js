import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  // 알러트 다일로그 만들기 정말 쉽네 ;
  const onPressAddGoal = () => {
    Alert.alert("목표를 추가!");
    //Alert.prompt("목표 추가"); 안드로이드에서는 반응을 안하네
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
      <Image
        style={{ width: "100%", height: "50%", marginBottom: 30 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        }}
      />
      <Text style={styles.title}>
        목표를 추가하는 앱이에용 {"\n"}목표를 추가해주세요
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="학습 목표를 정해주세요."
          style={{
            borderBottomColor: "#999",
            borderBottomWidth: 1,
            flex: 1,
            marginEnd: 20,
          }}
        />
        <Button
          title="목표 추가"
          onPress={onPressAddGoal}
          color="#232323"
          accessibilityLabel="Enter your course goal"
          style={{ cornerRadius: 20 }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 16,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
