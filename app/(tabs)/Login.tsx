import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  StatusBar,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const COLORS = {
  primary: "#0B3A75",      // SBI Blue
  primaryDark: "#06284F",
  white: "#FFFFFF",
  text: "#0D1A26",
  muted: "#7A8894",
  accent: "#00ADEF",
  surface: "#F5F7FA",
  softBlue: "#D8E6F5",
  lightBox: "#EEF5FC",
  softShadow: "rgba(0,0,0,0.12)",
};

export default function Login() {
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;

  const pressAnim = (ref: Animated.Value) => ({
    onPressIn: () => Animated.spring(ref, { toValue: 0.96, useNativeDriver: true }).start(),
    onPressOut: () =>
      Animated.spring(ref, { toValue: 1, friction: 5, useNativeDriver: true }).start(),
  });

  const h1 = pressAnim(scale1);
  const h2 = pressAnim(scale2);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryDark} barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>
              yono <Text style={styles.brandDot}>●</Text> <Text style={styles.brandSBI}>SBI</Text>
            </Text>
            <Text style={styles.greeting}>Hi, Amod Adarsh</Text>
          </View>

          <View style={styles.headerIcons}>
            <Pressable style={styles.headerIconBtn}>
              <Feather name="bell" size={20} color={COLORS.white} />
              <View style={styles.dot} />
            </Pressable>
            <Pressable style={[styles.headerIconBtn, { marginLeft: 12 }]}>
              <Feather name="help-circle" size={20} color={COLORS.white} />
            </Pressable>
          </View>
        </View>

        {/* LOGIN CARD */}
        <View style={styles.card}>
          {/* MPIN LOGIN */}
          <Animated.View style={{ transform: [{ scale: scale1 }] }}>
            <Pressable style={styles.loginRow} {...h1}>
              <Text style={styles.loginText}>Login using MPIN</Text>
              <Feather name="chevron-right" size={20} color={COLORS.muted} />
            </Pressable>
          </Animated.View>

          {/* OR SEPARATOR */}
          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.orLine} />
          </View>

          {/* USERNAME LOGIN */}
          <Animated.View style={{ transform: [{ scale: scale2 }] }}>
            <Pressable style={styles.loginRow} {...h2}>
              <Text style={styles.loginText}>Login using Username</Text>
              <Feather name="user" size={20} color={COLORS.muted} />
            </Pressable>
          </Animated.View>
        </View>

        {/* VIEW BALANCE */}
        <Pressable style={styles.balanceCard}>
          <View style={styles.balanceIcon}>
            <Feather name="eye" size={20} color={COLORS.accent} />
          </View>
          <View>
            <Text style={styles.balanceTitle}>View Balance</Text>
            <Text style={styles.balanceDesc}>Instant account balance & statements</Text>
          </View>
        </Pressable>

        {/* QUICK PAY SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Pay</Text>
          <View style={styles.grid}>
            {[
              { icon: "smartphone", label: "Mobile/Contact" },
              { icon: "credit-card", label: "Bank A/C" },
              { icon: "grid", label: "My QR" },
              { icon: "file-text", label: "Bill Pay" },
              { icon: "camera", label: "Scan QR" },
            ].map((item, i) => (
              <Pressable key={i} style={styles.gridItem}>
                <View style={styles.gridIcon}>
                  <Feather name={item.icon as any} size={22} color={COLORS.primary} />
                </View>
                <Text style={styles.gridLabel}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* BOTTOM SHORTCUTS */}
        <View style={styles.bottomNav}>
          {[
            { icon: "credit-card", label: "YONO Cash" },
            { icon: "trending-up", label: "Loans" },
            { icon: "bar-chart", label: "Invest" },
            { icon: "gift", label: "Offers" },
          ].map((item, i) => (
            <Pressable key={i} style={styles.navItem}>
              <Feather name={item.icon as any} size={18} color={COLORS.muted} />
              <Text style={styles.navLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ======================= STYLES ===========================

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },

  // HEADER
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 45,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    shadowColor: COLORS.softShadow,
  },
  brand: { fontSize: 28, fontWeight: "800", color: COLORS.white },
  brandDot: { color: COLORS.accent, fontSize: 32 },
  brandSBI: { fontWeight: "900" },
  greeting: { marginTop: 6, color: "#D9E7FF", fontSize: 14 },

  headerIcons: { flexDirection: "row" },
  headerIconBtn: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 12,
  },
  dot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },

  // LOGIN CARD
  card: {
    backgroundColor: COLORS.white,
    margin: 16,
    padding: 18,
    borderRadius: 18,
    elevation: 3,
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    elevation: 1,
  },
  loginText: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "600",
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  orLine: { flex: 1, height: 1, backgroundColor: "#DADFE6" },
  or: { marginHorizontal: 12, color: COLORS.muted, fontSize: 12 },

  // VIEW BALANCE
  balanceCard: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
    elevation: 2,
    marginTop: 4,
    alignItems: "center",
  },
  balanceIcon: {
    width: 46,
    height: 46,
    backgroundColor: COLORS.softBlue,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  balanceTitle: { fontSize: 16, fontWeight: "700", color: COLORS.text },
  balanceDesc: { fontSize: 12, marginTop: 3, color: COLORS.muted },

  // QUICK PAY
  section: { paddingHorizontal: 16, marginTop: 28 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: COLORS.text, marginBottom: 16 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  gridItem: { width: "30%", alignItems: "center", marginBottom: 22 },
  gridIcon: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: COLORS.lightBox,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  gridLabel: { marginTop: 8, fontSize: 12, color: COLORS.text, fontWeight: "600" },

  // BOTTOM NAV
  bottomNav: {
    marginTop: 12,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: "#E1E5EB",
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: { alignItems: "center" },
  navLabel: { marginTop: 6, color: COLORS.muted, fontSize: 11, fontWeight: "600" },
});
