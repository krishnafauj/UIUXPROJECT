import { Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Profile", headerShown:false }} />
      <Tabs.Screen name="SimSelectionScreen" options={{ title: "Sim", headerShown:false }} />
      <Tabs.Screen name="RelationshipOverview" options={{ title: "RelationShip", headerShown:false }} />
      <Tabs.Screen name="Contactus" options={{ title: "Contact", headerShown:false }} />
      <Tabs.Screen name="Explore" options={{ title: "Explore", headerShown:false }} />
      <Tabs.Screen name="ServiceRequest" options={{ title: "ServiceeRequest", headerShown:false }} />
      <Tabs.Screen name="Login" options={{ title: "Login", headerShown:false }} />
      <Tabs.Screen name="Home" options={{ title: "Home", headerShown:false }} />

    </Tabs>
  );
}
