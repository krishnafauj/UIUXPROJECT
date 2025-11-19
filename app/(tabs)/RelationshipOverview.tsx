import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as NBImage } from "native-base";

const COLORS = {
  primary: "#0B3A75",
  white: "#ffffff",
  text: "#1F2937",
  textLight: "#6B7280",
};

export default function RelationshipOverview() {
  return (
    <SafeAreaView style={styles.container}>

      {/* 🔵 BLUE HEADER (UNIFORM FOR ALL SCREENS) */}
      <View style={styles.blueHeader}>
        <Text style={styles.headerTitle}>Relationship Overview</Text>
      </View>

      {/* ⚪ WHITE CONTENT */}
      <ScrollView style={styles.whiteArea} showsVerticalScrollIndicator={false}>

        {/* ⭐ TOP ICON BAR + AVATAR */}
        <View style={styles.topRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              style={styles.avatar}
            />
            <Text style={styles.topTitle}>Overview</Text>
          </View>

          <View style={styles.iconRow}>
            <Feather name="bar-chart-2" size={22} color="#000" />
            <Feather name="bell" size={22} color="#000" style={{ marginLeft: 20 }} />
          </View>
        </View>

        {/* 🔍 SEARCH BAR */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={"#7a7a7a"} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        {/* 🔵 SCROLLABLE TABS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          style={{ marginTop: 20 }}
        >
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>My Balance</Text>
          </TouchableOpacity>

          <View style={{ width: 12 }} />

          <TouchableOpacity>
            <Text style={styles.tab}>My Deposits</Text>
          </TouchableOpacity>

          <View style={{ width: 12 }} />

          <TouchableOpacity>
            <Text style={styles.tab}>My Borrowings</Text>
          </TouchableOpacity>

          <View style={{ width: 12 }} />

          <TouchableOpacity>
            <Text style={styles.tab}>My Insurance</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* 💰 BALANCE CARD */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>₹1200</Text>
            <Ionicons name="chevron-down" size={22} color="#6c6c6c" />
          </View>

          <View style={styles.accRow}>
            <Text style={styles.accNumber}>xxxxxxx6551 (SINGLE)</Text>

            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
              }}
              style={styles.flag}
            />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionCol}>
              <Ionicons name="add-circle-outline" size={32} color="#1E88E5" />
              <Text style={styles.actionText}>Add money</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCol}>
              <Ionicons name="swap-horizontal" size={32} color="#1E88E5" />
              <Text style={styles.actionText}>Bank Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCol}>
              <Ionicons name="ellipsis-horizontal-circle" size={32} color="#1E88E5" />
              <Text style={styles.actionText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🧾 TRANSACTIONS */}
        <View style={styles.transHeader}>
          <Text style={styles.transTitle}>Transactions</Text>
          <Ionicons name="ellipsis-horizontal" size={22} color="#999" />
        </View>

        {/* Transaction 1 */}
        <View style={styles.transItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3600/3600913.png",
            }}
            style={styles.transIcon}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.transName}>To Jane</Text>
            <Text style={styles.transTime}>Today, 11:07 PM</Text>
            <Text style={styles.transMsg}>Hello have a great day</Text>
          </View>

          <Text style={styles.amountPositive}>+₹589</Text>
        </View>

        {/* Transaction 2 */}
        <View style={styles.transItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1997/1997928.png",
            }}
            style={styles.transIcon}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.transName}>Pm Care Fund</Text>
            <Text style={styles.transTime}>Today, 11:05 PM</Text>
          </View>

          <Text style={styles.amountNegative}>-₹1200</Text>
        </View>

        {/* SBI LOGO */}
        <View style={styles.bottomLogoWrap}>
          <NBImage
            source={require("@/assets/images/sbi.png")}
            style={styles.bottomLogo}
            resizeMode="contain"
            alt="SBI logo"
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

  blueHeader: {
    height: 110,
    marginTop: -20,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 14,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "700",
  },

  whiteArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },

  topTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },

  iconRow: {
    flexDirection: "row",
  },

  searchContainer: {
    marginTop: 18,
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  searchInput: {
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.text,
  },

  tabs: {
    flexDirection: "row",
    alignItems: "center",
  },

  activeTab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  activeTabText: {
    fontWeight: "700",
    color: COLORS.text,
  },

  tab: {
    color: COLORS.textLight,
    fontSize: 14,
  },

  balanceCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginTop: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceAmount: {
    fontSize: 28,
    fontWeight: "700",
  },

  accRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  accNumber: {
    fontSize: 14,
    color: COLORS.textLight,
  },

  flag: {
    width: 34,
    height: 24,
  },

  actionRow: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  actionCol: {
    alignItems: "center",
  },

  actionText: {
    marginTop: 5,
    color: "#1E88E5",
    fontSize: 13,
  },

  transHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    alignItems: "center",
  },

  transTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  transItem: {
    flexDirection: "row",
    marginTop: 22,
    alignItems: "center",
  },

  transIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    marginRight: 12,
  },

  transName: {
    fontSize: 16,
    fontWeight: "600",
  },

  transTime: {
    fontSize: 13,
    color: COLORS.textLight,
  },

  transMsg: {
    fontSize: 13,
    color: "#555",
  },

  amountPositive: {
    color: "#009B34",
    fontSize: 15,
    fontWeight: "700",
  },

  amountNegative: {
    color: "#D32F2F",
    fontSize: 15,
    fontWeight: "700",
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
