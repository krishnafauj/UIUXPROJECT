import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function RelationshipOverview() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.headerTitle}>Relationship Overview</Text>
        </View>

        <View style={styles.headerIcons}>
          <Feather name="bar-chart-2" size={22} color="black" />
          <Feather name="bell" size={22} color="black" style={{ marginLeft: 20 }} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={"#7a7a7a"} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>My Balance</Text>
        </TouchableOpacity>

        <Text style={styles.tab}>My Deposits</Text>
        <Text style={styles.tab}>My Borrowings</Text>
        <Text style={styles.tab}>My Insurance</Text>
      </View>

      {/* Balance Card */}
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

        {/* Action Buttons */}
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

      {/* Transactions Title */}
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

      {/* Bottom Space */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

//
// STYLES
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  // Header
  header: {
    marginTop: 55,
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

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  headerIcons: {
    flexDirection: "row",
  },

  // Search Bar
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
  },

  // Tabs
  tabs: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  activeTab: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },

  tab: {
    color: "#7a7a7a",
    fontSize: 14,
  },

  // Balance Card
  balanceCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 4,
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
    color: "#444",
  },

  flag: {
    width: 34,
    height: 24,
    resizeMode: "contain",
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

  // Transaction section
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
    color: "#777",
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
});
