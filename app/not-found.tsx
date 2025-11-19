import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const COLORS = {
  primary: "#0B3A75",
  accent: "#00ADEF",
  white: "#FFFFFF",
  text: "#1F2A36",
  muted: "#748A9D",
};

export default function NotFoundScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        
        {/* SBI Logo */}
        <Image
          source={require("@/assets/images/sbi.png")}
          alt="SBI logo"
          style={styles.logo}
        />

        {/* Heading */}
        <Text style={styles.oops}>Oops!</Text>
        <Text style={styles.message}>Looks like you're lost.</Text>

        {/* Sub text */}
        <Text style={styles.subText}>
          This page doesn’t exist in YONO SBI.  
          Let’s get you back on track.
        </Text>

        {/* Go Home Button */}
        <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
          <Feather name="home" size={18} color={COLORS.white} />
          <Text style={styles.btnText}>Go Back Home</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 22,
    resizeMode: "contain",
  },

  oops: {
    fontSize: 40,
    fontWeight: "800",
    color: COLORS.primary,
    textAlign: "center",
  },

  message: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 6,
    textAlign: "center",
  },

  subText: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 20,
  },

  btn: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 14,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },

  btnText: {
    color: COLORS.white,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "700",
  },
});
