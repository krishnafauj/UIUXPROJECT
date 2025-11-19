import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.78;

const COLORS = {
  primary: "#0B3A75",
  primaryDark: "#06284F",
  white: "#FFFFFF",
  text: "#0D1A26",
  muted: "#7A8894",
  softBlue: "#D8E6F5",
  lightBox: "#EEF5FC",
};

export default function SideDrawer({ visible, onClose }: any) {
  const slideX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideX, { toValue: 0, duration: 260, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideX, { toValue: -DRAWER_WIDTH, duration: 260, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 0, duration: 150, useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);

  if (!visible && fade.__getValue() === 0) return null;

  return (
    <View style={styles.overlay} pointerEvents="box-none">

      {/* BACKDROP */}
      <Animated.View
        style={[styles.backdrop, { opacity: fade }]}
        pointerEvents={visible ? "auto" : "none"}
      >
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>

      {/* DRAWER */}
      <Animated.View
        style={[styles.drawer, { transform: [{ translateX: slideX }] }]}>

        {/* BLUE TOP */}
        <View style={styles.topBlue}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.profileCircle}>
              <Feather name="user" size={30} color={COLORS.white} />
            </View>

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.headerName}>Amod Adarsh</Text>
              <Text style={styles.headerEmail}>amod@example.com</Text>
            </View>
          </View>
        </View>

        {/* SCROLLABLE SECTION */}
        <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>

          {/* MAIN SECTION */}
          <View style={styles.section}>
             <DrawerItem
              label="Home"
              icon="home"
             
              path="/(tabs)/"
              onClose={onClose}
            />
            <DrawerItem
              label="Profile"
               icon="user"
              path="/(tabs)/Home"
              onClose={onClose}
            />

            
             <DrawerItem
              label="Overview"
              icon="layers"
              path="/(tabs)/RelationshipOverview"
              onClose={onClose}
            />
            
            <DrawerItem
              label="Services"
              icon="settings"
              path="/(tabs)/ServiceRequest"
              onClose={onClose}
            />
           
            
            <DrawerItem
              label="Contact Us"
              icon="phone"
              path="/(tabs)/Contactus"
              onClose={onClose}
            />
            <DrawerItem
              label="Insurance"
              icon="shield"
              path="/(tabs)/Notfound"
              onClose={onClose}
            />

            <DrawerItem
              label="Investments"
              icon="trending-up"
              path="/(tabs)/Notfound"
              onClose={onClose}
            />

            <DrawerItem
              label="Loan"
              icon="credit-card"
              path="/(tabs)/Notfound"
              onClose={onClose}
            />

            <DrawerItem
              label="Credit Card"
              icon="file-text"
              path="/(tabs)/Notfound"
              onClose={onClose}
            />
           

            

          </View>

          <View style={styles.section}>
            <DrawerItem label="Settings" icon="settings" path="/(tabs)/Notfound" onClose={onClose} />
            <DrawerItem label="Support" icon="life-buoy" path="/(tabs)/Notfound" onClose={onClose} />
          </View>

          {/* give extra space before bottom logo */}
          <View style={{ height: 40 }} />
        </ScrollView>

        {/* FIXED BOTTOM LOGO */}
        <View style={styles.bottomLogoWrap}>
          <Image
            source={require("@/assets/images/sbi.png")}
            style={styles.bottomLogo}
            resizeMode="contain"
            alt="SBI logo"
          />
        </View>

      </Animated.View>
    </View>
  );
}

const DrawerItem = ({ icon, label, path, onClose }: any) => (
  <Pressable
    style={styles.item}
    onPress={() => {
      router.push(path);
      onClose();    // CLOSE DRAWER
    }}
  >
    <View style={styles.itemIconBox}>
      <Feather name={icon} size={20} color={COLORS.primary} />
    </View>
    <Text style={styles.itemLabel}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
  },

  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  drawer: {
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: COLORS.white,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    overflow: "hidden",
  },

  topBlue: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  profileCircle: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },

  headerName: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.white,
    marginTop: 10,
  },

  headerEmail: {
    fontSize: 13,
    color: "#DCE7FF",
    marginTop: 2,
  },

  scrollArea: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 80, // space above logo
  },

  section: {
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E6EBF2",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  itemIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.lightBox,
    justifyContent: "center",
    alignItems: "center",
  },

  itemLabel: {
    marginLeft: 14,
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
  },

  bottomLogoWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#E6EBF2",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  bottomLogo: {
    width: "75%",
    height: 55,
  },
});