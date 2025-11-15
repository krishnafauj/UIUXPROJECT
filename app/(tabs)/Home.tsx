import React, { useState, useEffect, useRef, FC } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Switch,
  ActivityIndicator,
  Animated,
  Platform,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const COLORS = {
    white:"#ffffff",
  primary: "#0B3A75",
  primaryLight: "#115AA3",
  accent: "#00ADEF",
  accentLight: "#4DD0FF",
  secondary: "#FF6B35",
  success: "#10B981",
  warning: "#F59E0B",
  background: "#FFFFFF",
  surface: "#F6F8FA",
  surfaceElevated: "#FFFFFF",
  text: "#1F2937",
  textLight: "#6B7280",
  border: "#E5E7EB",
  danger: "#EF4444",
  purple: "#8B5CF6",
  teal: "#14B8A6",
};

interface ActionItem {
  id: string;
  label: string;
  icon: string;
  color: string;
}

interface Banner {
  id: string;
  text: string;
}

const QUICK_ACTIONS: ActionItem[] = [
  { id: "balance", label: "Check Balance", icon: "credit-card", color: COLORS.accent },
  { id: "send", label: "Send Money", icon: "send", color: COLORS.success },
  { id: "qr", label: "Scan QR", icon: "camera", color: COLORS.purple },
  { id: "recent", label: "Recent", icon: "clock", color: COLORS.warning },
];

const BANKING: ActionItem[] = [
  { id: "accounts", label: "Accounts", icon: "folder", color: COLORS.primary },
  { id: "deposits", label: "Deposits", icon: "briefcase", color: COLORS.teal },
  { id: "loans", label: "Loans", icon: "dollar-sign", color: COLORS.secondary },
  { id: "invest", label: "Investments", icon: "trending-up", color: COLORS.success },
];

const PAYMENTS: ActionItem[] = [
  { id: "yonoPay", label: "YONO Pay", icon: "credit-card", color: COLORS.accent },
  { id: "bill", label: "Bill Payment", icon: "file-text", color: COLORS.warning },
  { id: "mobility", label: "Mobility", icon: "navigation", color: COLORS.purple },
];

const LIFESTYLE: ActionItem[] = [
  { id: "shop", label: "Shop & Order", icon: "shopping-bag", color: COLORS.secondary },
  { id: "train", label: "Train Ticket", icon: "truck", color: COLORS.primaryLight },
  { id: "krishi", label: "YONO Krishi", icon: "globe", color: COLORS.success },
];

const BANNERS: Banner[] = [
  { id: "ins", text: "Life cover up to ₹2,00,000 — Tap to avail" },
  { id: "sip", text: "JanNivesh SIP — Start investing from ₹250" },
  { id: "ipo", text: "Don’t miss the upcoming IPO opportunities!" },
];

const QuickAction: FC<{ item: ActionItem; onPress: (item: ActionItem) => void }> = ({
  item,
  onPress,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={() => onPress(item)}
        onPressIn={() => Animated.spring(scale, { toValue: 0.92, useNativeDriver: true }).start()}
        onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()}
        style={styles.quickAction}
      >
        <View style={[styles.quickIconWrap, { backgroundColor: item.color + "15" }]}>
          <Feather name={item.icon as any} size={24} color={item.color} />
        </View>
        <Text style={styles.quickLabel}>{item.label}</Text>
      </Pressable>
    </Animated.View>
  );
};

const FeatureCard: FC<{ item: ActionItem; onPress: (item: ActionItem) => void }> = ({
  item,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.featureCard, pressed && { opacity: 0.6 }]}
    >
      <View style={[styles.featureIconWrap, { backgroundColor: item.color + "15" }]}>
        <Feather name={item.icon as any} size={22} color={item.color} />
      </View>
      <Text style={styles.featureLabel}>{item.label}</Text>
    </Pressable>
  );
};

const BannerCarousel: FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % BANNERS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <View style={styles.bannerWrap}>
      <Text style={styles.bannerText}>{BANNERS[index].text}</Text>
      <View style={styles.bannerDots}>
        {BANNERS.map((b, i) => (
          <View key={b.id} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
};

const CollapsibleGroup: FC<{
  title: string;
  data: ActionItem[];
  onPress: (item: ActionItem) => void;
}> = ({ title, data, onPress }) => {
  const [open, setOpen] = useState(true);
  const rotate = useRef(new Animated.Value(1)).current;

  const toggle = () => {
    Animated.timing(rotate, {
      duration: 200,
      toValue: open ? 0 : 1,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  return (
    <View style={styles.groupWrap}>
      <Pressable onPress={toggle} style={styles.groupHeader}>
        <Text style={styles.groupTitle}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"],
          }) }] }}>
          <Feather name="chevron-right" size={20} color={COLORS.textLight} />
        </Animated.View>
      </Pressable>

      {open && (
        <View style={styles.groupGrid}>
          {data.map((d) => (
            <FeatureCard key={d.id} item={d} onPress={onPress} />
          ))}
        </View>
      )}
    </View>
  );
};

export default function YonoHomeScreen() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const onPress = (item: ActionItem) => console.log("Pressed:", item.id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>
            yono <Text style={styles.brandDot}>●</Text>{" "}
            <Text style={styles.brandSBI}>SBI</Text>
          </Text>
          <Text style={styles.subtitle}>Welcome back, Anuja</Text>
        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: COLORS.border, true: COLORS.accent }}
        />
      </View>

      {loading ? (
        <View style={styles.loaderWrap}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Loading your accounts...</Text>
        </View>
      ) : (
        <FlatList
          data={[{ key: "main" }]}
          keyExtractor={(i) => i.key}
          contentContainerStyle={styles.scrollContent}
          renderItem={() => (
            <>
              <View style={styles.quickWrap}>
                <FlatList
                  horizontal
                  data={QUICK_ACTIONS}
                  renderItem={({ item }) => <QuickAction item={item} onPress={onPress} />}
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              <View style={styles.accountSummary}>
                <View style={styles.accountHeader}>
                  <View>
                    <Text style={styles.accountTitle}>Primary Account</Text>
                    <Text style={styles.accountNumber}>XXXX 4567</Text>
                  </View>
                  <View style={styles.accountBadge}>
                    <Text style={styles.accountBadgeText}>Active</Text>
                  </View>
                </View>

                <Text style={styles.accountBalance}>₹54,320.75</Text>

                <View style={styles.accountFooter}>
                  <Text style={styles.accountSmall}>Last activity: 1 hour ago</Text>
                  <Pressable>
                    <Text style={styles.accountLink}>View Details</Text>
                  </Pressable>
                </View>
              </View>

              <BannerCarousel />

              <CollapsibleGroup title="Banking" data={BANKING} onPress={onPress} />
              <CollapsibleGroup title="Payments" data={PAYMENTS} onPress={onPress} />
              <CollapsibleGroup title="Lifestyle" data={LIFESTYLE} onPress={onPress} />

              <View style={styles.recentWrap}>
                <Text style={styles.sectionHead}>Recent Transactions</Text>

                <View style={styles.recentCard}>
                  <View style={styles.recentIconWrap}>
                    <Feather name="send" size={16} color={COLORS.success} />
                  </View>
                  <View style={styles.recentContent}>
                    <Text style={styles.recentText}>Payment to Riya</Text>
                    <Text style={styles.recentMuted}>UPI • 1 hour ago</Text>
                  </View>
                  <Text style={styles.recentAmount}>-₹500</Text>
                </View>

                <View style={styles.recentCard}>
                  <View style={[styles.recentIconWrap, { backgroundColor: COLORS.accent + "15" }]}>
                    <Feather name="credit-card" size={16} color={COLORS.accent} />
                  </View>
                  <View style={styles.recentContent}>
                    <Text style={styles.recentText}>Salary Credited</Text>
                    <Text style={styles.recentMuted}>NEFT • 2 days ago</Text>
                  </View>
                  <Text style={[styles.recentAmount, { color: COLORS.success }]}>+₹45,000</Text>
                </View>
              </View>

              <View style={{ height: 60 }} />
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: COLORS.surfaceElevated,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  brand: { fontSize: 24, fontWeight: "700", color: COLORS.text },
  brandDot: { color: COLORS.accent },
  brandSBI: { color: COLORS.primary, fontWeight: "700" },
  subtitle: { color: COLORS.textLight, marginTop: 4 },

  scrollContent: { paddingHorizontal: 16, paddingBottom: 40 },

  quickWrap: { marginBottom: 20 },
  quickAction: { width: 90, alignItems: "center" },
  quickIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  quickLabel: { textAlign: "center", fontSize: 12, fontWeight: "500", color: COLORS.text },

  accountSummary: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  accountHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  accountTitle: { color: COLORS.textLight, fontWeight: "600" },
  accountNumber: { color: COLORS.textLight, fontSize: 12 },
  accountBadge: {
    backgroundColor: COLORS.success + "22",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  accountBadgeText: { color: COLORS.success, fontSize: 12, fontWeight: "700" },
  accountBalance: { fontSize: 30, color: COLORS.primary, fontWeight: "700", marginBottom: 10 },
  accountFooter: { flexDirection: "row", justifyContent: "space-between" },
  accountSmall: { color: COLORS.textLight, fontSize: 12 },
  accountLink: { color: COLORS.accent, fontWeight: "600" },

  bannerWrap: {
    backgroundColor: COLORS.accent + "15",
    padding: 18,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
    marginBottom: 20,
  },
  bannerText: { color: COLORS.primary, fontSize: 15, fontWeight: "600" },
  bannerDots: { flexDirection: "row", marginTop: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.accent + "40", marginRight: 6 },
  dotActive: { backgroundColor: COLORS.accent, width: 20 },

  groupWrap: { marginBottom: 18 },
  groupHeader: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 },
  groupTitle: { fontSize: 18, fontWeight: "700", color: COLORS.text },

  groupGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  featureCard: {
    width: (width - 44) / 2,
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  featureIconWrap: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  featureLabel: { fontSize: 14, fontWeight: "600", color: COLORS.text },

  recentWrap: { marginTop: 10 },
  sectionHead: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  recentCard: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  recentIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.success + "15",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  recentContent: { flex: 1 },
  recentText: { fontWeight: "600", color: COLORS.text },
  recentMuted: { fontSize: 12, color: COLORS.textLight },
  recentAmount: { fontWeight: "700", color: COLORS.danger },

  loaderWrap: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, color: COLORS.textLight },
});
