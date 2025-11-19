import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const COLORS = {
  primary: "#0B3A75",
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
  const [mpin, setMpin] = React.useState("");
  const router = useRouter();

  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;

  const pressAnim = (ref: Animated.Value) => ({
    onPressIn: () => Animated.spring(ref, { toValue: 0.96, useNativeDriver: true }).start(),
    onPressOut: () => Animated.spring(ref, { toValue: 1, friction: 5, useNativeDriver: true }).start(),
  });

  const h1 = pressAnim(scale1);
  const h2 = pressAnim(scale2);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.primaryDark} barStyle="light-content" />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* 🔵 HEADER */}
        <View style={styles.header}>
          <View>
            <View style={styles.brandRow}>
              <Text style={styles.brand}>yono</Text>

              {/* 🟦 SBI LOGO (like all screens) */}
              <Image
                source={require("@/assets/images/sbi.png")}
                alt="SBI logo"
                style={styles.brandLogo}
                resizeMode="contain"
              />

              <Text style={styles.brand}>SBI</Text>
            </View>

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
          
          <TextInput
            value={mpin}
            onChangeText={setMpin}
            keyboardType="numeric"
            maxLength={6}
            style={{ width: 0, height: 0, opacity: 0 }}
          />

          {/* MPIN LOGIN */}
          <Animated.View style={{ transform: [{ scale: scale1 }] }}>
            <Pressable
              style={styles.loginRow}
              {...h1}
                onPress={() => router.push("/(tabs)")}
            >
              <Text style={styles.loginText}>Login using MPIN</Text>
              <Feather name="chevron-right" size={20} color={COLORS.muted} />
            </Pressable>
          </Animated.View>

          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.orLine} />
          </View>

          {/* USERNAME LOGIN */}
          <Animated.View style={{ transform: [{ scale: scale2 }] }}>
            <Pressable
              style={styles.loginRow}
              {...h2}
              onPress={() => router.push("/(tabs)")}
            >
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

        {/* QUICK PAY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Pay</Text>
          <View style={styles.grid}>
            {[
              { icon: "smartphone", label: "Mobile/Contact" },
              { icon: "credit-card", label: "Bank A/C" },
              { icon: "grid", label: "My QR" },
              { icon: "file-text", label: "Bill Pay" },
              { icon: "camera", label: "Scan QR" },
              { icon: "database", label: "Transactions" },
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

        {/* REGISTER BUTTON */}
        <Pressable style={styles.registerBtn} onPress={() => router.push("/Explore")}>
          <Text style={styles.registerText}>New User? Register</Text>
        </Pressable>
      </ScrollView>

      {/* BOTTOM NAV */}
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
    </SafeAreaView>
  );
}

// =================== STYLES ===================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: { flex: 1, backgroundColor: COLORS.surface },

  /* 🔵 HEADER FIXED TEMPLATE */
  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    shadowColor: COLORS.softShadow,
  },

  /* BRAND ROW */
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  brand: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.white,
  },

  /* 🟦 SBI LOGO */
  brandLogo: {
    width: 26,
    height: 26,
    marginHorizontal: 6,
  },

  greeting: { marginTop: 6, color: "#D9E7FF", fontSize: 14 },

  /* HEADER ICONS */
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

  /* LOGIN CARD */
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

  loginText: { fontSize: 15, color: COLORS.text, fontWeight: "600" },

  /* OR */
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  orLine: { flex: 1, height: 1, backgroundColor: "#DADFE6" },
  or: { marginHorizontal: 12, color: COLORS.muted, fontSize: 12 },

  /* BALANCE CARD */
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

  /* QUICK GRID */
  section: { paddingHorizontal: 16, marginTop: 28 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

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

  /* REGISTER BUTTON */
  registerBtn: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    elevation: 3,
  },
  registerText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },

  /* BOTTOM NAV */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: "#E1E5EB",
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 10,
  },

  navItem: { alignItems: "center" },
  navLabel: { marginTop: 6, color: COLORS.muted, fontSize: 11, fontWeight: "600" },
});
