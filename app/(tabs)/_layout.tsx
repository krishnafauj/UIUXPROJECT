import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Contactus" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="ServiceRequest" />
      <Stack.Screen name="RelationshipOverview" />
    </Stack>
  );
}
