import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "native-base";

const COLORS = {
  white: "#ffffff",
  primary: "#0B3A75",
  accent: "#00ADEF",
  text: "#1F2937",
  textLight: "#6B7280",
  border: "#E5E7EB",
};

export default function ContactUs() {
  return (
    <SafeAreaView style={styles.container}>

      {/* 🔵 PAGE HEADER */}
      <View style={styles.blueHeader}>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <Text style={styles.headerSubtitle}>We are here to assist you</Text>
      </View>

      {/* WHITE CONTENT */}
      <ScrollView
        style={styles.whiteArea}
        showsVerticalScrollIndicator={false}
      >
        {/* CUSTOMER SUPPORT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Customer Support</Text>

          {/* Emergency/Fraud */}
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="phone" size={22} color="#0A66C2" />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.smallText}>Emergency / Fraud Helpline</Text>
              <Text style={styles.boldText}>1800-11-11-09</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* General Queries */}
          <View style={styles.row}>
            <View style={styles.iconCircle}>
              <MaterialIcons name="call" size={22} color="#0A66C2" />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.smallText}>General Queries</Text>
              <Text style={styles.boldText}>1800-1234 / 1800-2100</Text>
            </View>
          </View>
        </View>

        {/* SUPPORT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Support</Text>

          <View style={styles.supportRow}>
            <View style={styles.supportIconCircle}>
              <Feather name="alert-circle" size={20} color="#000" />
            </View>
            <Text style={styles.supportText}>
              Report unauthorized transaction
            </Text>
          </View>

          <View style={styles.supportRow}>
            <View style={styles.supportIconCircle}>
              <Feather name="edit-3" size={20} color="#000" />
            </View>
            <Text style={styles.supportText}>Raise a complaint</Text>
          </View>

          <View style={styles.supportRow}>
            <View style={styles.supportIconCircle}>
              <Feather name="search" size={20} color="#000" />
            </View>
            <Text style={styles.supportText}>Track a complaint</Text>
          </View>

          <View style={styles.supportRow}>
            <View style={styles.supportIconCircle}>
              <Feather name="help-circle" size={20} color="#000" />
            </View>
            <Text style={styles.supportText}>FAQ</Text>
          </View>
        </View>

        {/* ⬇️ ALWAYS AT BOTTOM — SBI LOGO */}
        <View style={styles.bottomLogoWrap}>
          <Image
            source={require("@/assets/images/sbi.png")}
            style={styles.bottomLogo}
            resizeMode="contain"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

//
// STYLES
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  // 🔵 SAME BLUE HEADER ON ALL PAGES
  blueHeader: {
    height: 110,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.white,
  },

  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },

  whiteArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 18,
    color: COLORS.text,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E7F0FF",
    justifyContent: "center",
    alignItems: "center",
  },

  smallText: {
    fontSize: 13,
    color: "#7A7A7A",
  },

  boldText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 8,
  },

  supportRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  supportIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  supportText: {
    fontSize: 15,
    color: COLORS.text,
    flexShrink: 1,
  },

  bottomLogoWrap: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomLogo: {
    width: "80%",
    height: 60,
  },
});
