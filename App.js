import { StyleSheet, Text, View } from "react-native";
import { SignUp } from "./src/screens/SignUp.tsx";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
