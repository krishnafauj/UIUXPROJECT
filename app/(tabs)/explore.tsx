import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// --- Color Palette ---
const COLORS = {
  primary: "#0B3A75",
  background: "#F6F7FB",
  white: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#444444",
  textMuted: "#666666",
  textInactive: "#777777",
  buttonPrimary: "#3E79E5",
  buttonSecondary: "#1A73E8",
  shadow: "#000000",
  activeNav: "#0B3A75",
  accent: "#FF6B6B",
  cardBackground: "#FFFFFF",
};

export default function ExploreScreen() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CLASSY HEADER */}
        <View style={styles.header}>
          <View style={styles.headerInner}>
            {/* LOGO */}
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.yonoText}>yono</Text>
                <View style={styles.sbiBadge}>
                  <Text style={styles.sbiText}>SBI</Text>
                </View>
              </View>
              <Text style={styles.tagline}>for every Indian</Text>
            </View>

            {/* ACTION ICONS */}
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerIconBtn}>
                <Feather name="bell" size={20} color={COLORS.white} />
                <View style={styles.notificationDot} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.headerIconBtn}>
                <Feather name="help-circle" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>

          {/* White Welcome Card */}
          <View style={styles.welcomeCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.welcomeGreeting}>Welcome to</Text>
              <Text style={styles.smartWay}>a Smarter Way{"\n"}to Bank</Text>
              <Text style={styles.subtitle}>
                Seamlessly manage finances, invest,{"\n"}shop & more— all in one place
              </Text>
            </View>

            <View style={styles.welcomeGraphic}>
              <View style={styles.circleLarge} />
              <View style={styles.circleSmall} />
            </View>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.contentContainer}>
          {/* LOGIN CARD */}
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/online-registration-concept-illustration_114360-4489.jpg",
              }}
              style={styles.illustration}
            />

            <Text style={styles.smallNote}>Are you an existing SBI customer?</Text>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Register Now</Text>
              <Feather
                name="arrow-right"
                size={16}
                color={COLORS.white}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>

          {/* OTHER BANK CARD */}
          <View style={styles.card}>
            <Text style={styles.cardHeading}>Other Bank Customer</Text>
            <Text style={styles.subText}>
              Start UPI Payments. Open an account & link for payments
            </Text>

            <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountText}>Register for UPI</Text>
              <Feather
                name="external-link"
                size={14}
                color={COLORS.white}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>

          {/* FEATURES */}
          <View style={styles.card}>
            <Text style={styles.cardHeading}>Start a New Journey with SBI</Text>

            <View style={styles.featuresGrid}>
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

          {/* Bottom Spacing */}
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </View>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.background },
  scrollView: { flex: 1 },
  scrollContent: { flexGrow: 1 },

  // Header
  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 25,
    paddingTop: StatusBar.currentHeight || 20,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 7,
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
  flex: 1,
  paddingBottom: 30,
},

  yonoText: {
    fontSize: 34,
    fontWeight: "900",
    color: COLORS.white,
  },

  sbiBadge: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 12,
    marginLeft: 10,
  },
  sbiText: { color: COLORS.white, fontWeight: "700", fontSize: 12 },

  tagline: {
    color: COLORS.white,
    opacity: 0.9,
    marginTop: 4,
    fontWeight: "600",
  },

  headerActions: { flexDirection: "row" },
  headerIconBtn: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 12,
    marginLeft: 12,
  },

  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
    position: "absolute",
    right: 6,
    top: 6,
  },

  welcomeCard: {
    backgroundColor: COLORS.white,
    marginTop: 22,
    padding: 24,
    borderRadius: 22,
    flexDirection: "row",
    elevation: 6,
  },

  welcomeGreeting: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },

  smartWay: {
    fontSize: 26,
    fontWeight: "900",
    color: COLORS.textPrimary,
    marginVertical: 8,
  },

  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },

  welcomeGraphic: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  circleLarge: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    opacity: 0.1,
    position: "absolute",
  },
  circleSmall: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    opacity: 0.15,
    position: "absolute",
    right: 0,
  },

  card: {
    backgroundColor: COLORS.white,
    padding: 22,
    marginTop: 22,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
  },

  illustration: { width: "100%", height: 130, resizeMode: "contain" },

  smallNote: {
    textAlign: "center",
    color: COLORS.textSecondary,
    marginTop: 8,
    fontWeight: "500",
  },

  loginButton: {
    backgroundColor: COLORS.primary,
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 35,
    alignSelf: "center",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: { color: COLORS.white, fontSize: 15, fontWeight: "700" },
  buttonIcon: { marginLeft: 8 },

  cardHeading: { fontSize: 20, fontWeight: "800", marginBottom: 10 },

  subText: { color: COLORS.textSecondary, marginBottom: 16 },

  accountButton: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: { color: COLORS.white, fontWeight: "700" },

  featuresGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  featureItem: {
    alignItems: "center",
    flex: 1,
  },

  featureIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(11,58,117,0.10)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  featureText: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.textPrimary,
    textAlign: "center",
  },
});
