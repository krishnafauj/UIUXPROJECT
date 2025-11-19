import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "SSRProvider is not necessary",
]);
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      {/* HIDDEN TAB NAVIGATION */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },   // completely hide tab bar
          tabBarButton: () => null,           // remove button space
        }}
      >
        {/* Your screens (tabs) */}
        <Tabs.Screen name="index" />
        <Tabs.Screen name="Explore" />
        <Tabs.Screen name="SimSelectionScreen" />
      
      </Tabs>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
