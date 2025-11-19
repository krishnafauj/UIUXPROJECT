import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const COLORS = {
  primary: "#0B3A75",
  primaryDark: "#06284F",
  surface: "#F5F7FA",
  white: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#444444",
  accent: "#FF6B6B",
};

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.primaryDark} barStyle="light-content" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 🔵 HEADER */}
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View>
              {/* BRAND ROW */}
              <View style={styles.brandRow}>
                <Text style={styles.yono}>yono</Text>

                {/* 🔵 SBI LOGO INSTEAD OF DOT/CHIP */}
                <Image
                  source={require("@/assets/images/sbi.png")}
                  alt="SBI logo"
                  style={styles.sbiLogo}
                  resizeMode="contain"
                />

                <Text style={styles.sbiText}>SBI</Text>
              </View>

              <Text style={styles.tagline}>for every Indian</Text>
            </View>

            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerBtn}>
                <Feather name="bell" size={20} color={COLORS.white} />
                <View style={styles.dot} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.headerBtn}>
                <Feather name="help-circle" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>

          {/* HERO CARD */}
          <View style={styles.heroCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.heroWelcome}>Welcome to</Text>
              <Text style={styles.heroMain}>
                a Smarter Way{"\n"}to Bank
              </Text>
              <Text style={styles.heroSub}>
                Seamlessly manage finances, invest,{"\n"}shop & more — all in one place.
              </Text>
            </View>

            <View style={styles.heroGraphic}>
              <View style={styles.circleLg} />
              <View style={styles.circleSm} />
            </View>
          </View>
        </View>

        {/* BODY CONTENT */}
        <View style={styles.content}>
          {/* CARD 1 */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/online-registration-concept-illustration_114360-4489.jpg",
              }}
              style={styles.illustration}
            />

            <Text style={styles.note}>Are you an existing SBI customer?</Text>

            <Pressable
              style={styles.primaryBtn}
              onPress={() => router.push("/SimSelectionScreen")}
            >
              <Text style={styles.btnText}>Register Now</Text>
              <Feather name="arrow-right" size={16} color={COLORS.white} />
            </Pressable>
          </View>

          {/* CARD 2 */}
          <View style={styles.card}>
            <Text style={styles.heading}>Other Bank Customer</Text>
            <Text style={styles.subText}>
              Start UPI Payments. Open an account & link for payments.
            </Text>

            <Pressable
              style={styles.primaryBtn}
              onPress={() => router.push("/SimSelectionScreen")}
            >
              <Text style={styles.btnText}>Register Now for Upi</Text>
              <Feather name="external-link" size={20} color={COLORS.white} />
            </Pressable>
          </View>

          {/* CARD 3 */}
          <View style={styles.card}>
            <Text style={styles.heading}>Start a New Journey with SBI</Text>

            <View style={styles.featureGrid}>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Feather name="dollar-sign" size={22} color={COLORS.primary} />
                </View>
                <Text style={styles.featureText}>Open Savings Account</Text>
              </View>

              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Feather name="trending-up" size={22} color={COLORS.primary} />
                </View>
                <Text style={styles.featureText}>Apply for a loan</Text>
              </View>

              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Feather name="shopping-bag" size={22} color={COLORS.primary} />
                </View>
                <Text style={styles.featureText}>Shopping offers</Text>
              </View>
            </View>
          </View>

          {/* ↓ BOTTOM SBI LOGO */}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------- STYLES ----------------------
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  /* 🔵 HEADER WRAP */
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  /* BRAND (yono + SBI logo + SBI text) */
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  yono: { fontSize: 28, fontWeight: "800", color: COLORS.white },

  sbiLogo: {
    width: 26,
    height: 26,
    marginHorizontal: 6,
  },

  sbiText: { color: COLORS.white, fontWeight: "800", fontSize: 20 },

  tagline: { color: COLORS.white, marginTop: 4, opacity: 0.9 },

  headerActions: { flexDirection: "row" },
  headerBtn: {
    marginLeft: 12,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.accent,
    borderRadius: 4,
    position: "absolute",
    top: 6,
    right: 6,
  },

  /* HERO */
  heroCard: {
    backgroundColor: COLORS.white,
    marginTop: 18,
    padding: 22,
    borderRadius: 22,
    flexDirection: "row",
    elevation: 2,
  },

  heroWelcome: { fontSize: 18, fontWeight: "700", color: COLORS.textPrimary },
  heroMain: { fontSize: 26, fontWeight: "900", marginTop: 8, color: COLORS.textPrimary },
  heroSub: { marginTop: 6, color: COLORS.textSecondary },

  heroGraphic: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  circleLg: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    opacity: 0.1,
    position: "absolute",
  },

  circleSm: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    opacity: 0.15,
    position: "absolute",
    right: 0,
  },

  /* CONTENT */
  content: {
    paddingTop: 20,
    backgroundColor: COLORS.surface,
  },

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 22,
    borderRadius: 20,
    elevation: 3,
  },

  illustration: { width: "100%", height: 130, resizeMode: "contain" },

  note: {
    textAlign: "center",
    marginTop: 10,
    color: COLORS.textSecondary,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    marginTop: 14,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignSelf: "center",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: { color: COLORS.white, fontWeight: "700", marginRight: 8 },

  heading: { fontSize: 20, fontWeight: "800", marginBottom: 6 },
  subText: { color: COLORS.textSecondary, marginBottom: 14 },

  featureGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  featureItem: { alignItems: "center", flex: 1 },

  featureIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(11,58,117,0.10)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  featureText: { fontSize: 12, fontWeight: "700", textAlign: "center" },

  /* SMALL SBI LOGO BOTTOM */
  bottomLogoWrap: {
    marginTop: 30,
    alignItems: "center",
  },

  bottomLogo: {
    width: 90,
    height: 40,
  },
});
