import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider>  
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auths)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
