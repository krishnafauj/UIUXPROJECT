import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// -------------------- TYPES --------------------
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: keyof typeof Feather.glyphMap;
  type: "quick" | "category";
}

interface TollFreeNumber {
  id: string;
  number: string;
}

const SCREEN_WIDTH = Dimensions.get("window").width;

// -------------------- MOCK DATA --------------------
const QUICK_ACTIONS: ServiceItem[] = [
  {
    id: "1",
    title: "Manage PIN",
    description: "Change ATM/Internet Banking PIN",
    iconName: "key",
    type: "quick",
  },
  {
    id: "2",
    title: "SMS Alerts",
    description: "Instant transaction notifications",
    iconName: "smartphone",
    type: "quick",
  },
  {
    id: "3",
    title: "Stop Cheque",
    description: "Halt cheque payment",
    iconName: "slash",
    type: "quick",
  },
  {
    id: "4",
    title: "Update KYC",
    description: "Verify/Update personal details",
    iconName: "user-check",
    type: "quick",
  },
];

const SERVICE_CATEGORIES: ServiceItem[] = [
  {
    id: "5",
    title: "Loans",
    description: "Car, home, education loans",
    iconName: "credit-card",
    type: "category",
  },
  {
    id: "6",
    title: "Account Services",
    description: "Nominee, alerts, statement",
    iconName: "file-text",
    type: "category",
  },
  {
    id: "7",
    title: "Tax & Investments",
    description: "TDS, 15G/H, Mutual Funds",
    iconName: "trending-up",
    type: "category",
  },
  {
    id: "8",
    title: "Cheque Book",
    description: "Order or stop cheque book",
    iconName: "book",
    type: "category",
  },
  {
    id: "9",
    title: "Pension Services",
    description: "Pension info, forms",
    iconName: "user",
    type: "category",
  },
  {
    id: "10",
    title: "Locker",
    description: "Manage locker services",
    iconName: "lock",
    type: "category",
  },
  {
    id: "11",
    title: "Doorstep",
    description: "Cash pickup/cheque collection",
    iconName: "truck",
    type: "category",
  },
  {
    id: "12",
    title: "Govt Schemes",
    description: "PMJJBY, PMSBY",
    iconName: "users",
    type: "category",
  },
];

const TOLL_FREE_NUMBERS: TollFreeNumber[] = [
  { id: "tf1", number: "1800-1234" },
  { id: "tf2", number: "1800-2100" },
];

// -------------------- REUSABLE COMPONENTS --------------------

const QuickActionItem = ({
  item,
  onPress,
}: {
  item: ServiceItem;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.quickRow} onPress={onPress}>
    <View style={styles.quickLeft}>
      <Feather
        name={item.iconName}
        size={22}
        color={styles.primaryColor.color}
      />
      <Text style={styles.quickTitle}>{item.title}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#aaa" />
  </TouchableOpacity>
);

const ServiceCard = ({
  item,
  onPress,
}: {
  item: ServiceItem;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <View style={{ flex: 1, padding: 14 }}>
      <Feather
        name={item.iconName}
        size={30}
        color={styles.primaryColor.color}
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

// -------------------- MAIN SCREEN --------------------

export default function ServiceRequestScreen() {
  const handlePress = (id: string, title: string) => {
    console.log(`Pressed: ${title} (${id})`);
  };

  const callNumber = (number: string) => {
    Linking.openURL(`tel:${number.replace(/-/g, "")}`);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="chevron-left" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Service Request</Text>
        <Feather name="menu" size={24} color="#000" />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        {/* QUICK ACTIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickWrapper}>
            {QUICK_ACTIONS.map((item) => (
              <QuickActionItem
                key={item.id}
                item={item}
                onPress={() => handlePress(item.id, item.title)}
              />
            ))}
          </View>
        </View>

        {/* GRID SERVICES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Services</Text>
          <View style={styles.grid}>
            {SERVICE_CATEGORIES.map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
                onPress={() => handlePress(item.id, item.title)}
              />
            ))}
          </View>
        </View>

        {/* TOLL FREE */}
        <View style={styles.tollSection}>
          <Text style={styles.tollTitle}>24x7 Toll-Free Support</Text>

          <View style={styles.tollNumbers}>
            {TOLL_FREE_NUMBERS.map((t) => (
              <TouchableOpacity
                key={t.id}
                style={styles.tollBtn}
                onPress={() => callNumber(t.number)}
              >
                <Text style={styles.tollNum}>{t.number}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.tollInfo}>
            Tap on a number to call customer support.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// -------------------- STYLES --------------------

const styles = StyleSheet.create({
  primaryColor: { color: "#0B3A75" },

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  // HEADER
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  // SECTION
  section: {
    paddingHorizontal: 18,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  // QUICK ACTION ROW
  quickWrapper: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#eee",
  },
  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  quickLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  quickTitle: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "600",
    color: "#222",
  },

  // GRID CARDS
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: (SCREEN_WIDTH - 50) / 2,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 16,
    padding: 0,
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 3,
  },
  cardTitle: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 15,
    color: "#222",
  },
  cardDesc: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },

  // TOLL SECTION
  tollSection: {
    marginHorizontal: 18,
    marginTop: 25,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  tollTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B3A75",
    marginBottom: 14,
  },
  tollNumbers: {
    flexDirection: "row",
  },
  tollBtn: {
    backgroundColor: "#E8F0FD",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  tollNum: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B3A75",
  },
  tollInfo: {
    color: "#666",
    marginTop: 8,
    fontSize: 13,
  },
});
