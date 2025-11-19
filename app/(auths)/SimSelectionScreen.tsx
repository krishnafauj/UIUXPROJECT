import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SimSelectScreen() {
  const [sim, setSim] = useState<1 | 2>(1);

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* SIM Select Card */}
      <View style={styles.card}>
        <View style={styles.simRow}>

          {/* SIM 1 */}
          <View style={styles.simCol}>
            <Image
              source={require("../../assets/images/sim.png")}
              style={styles.simImg}
            />

            <TouchableOpacity
              style={styles.simOption}
              onPress={() => setSim(1)}
            >
              <Ionicons
                name={sim === 1 ? "radio-button-on" : "radio-button-off"}
                size={22}
                color="black"
              />
              <Text style={styles.simLabel}>SIM 1</Text>
            </TouchableOpacity>
          </View>

          {/* SIM 2 */}
          <View style={styles.simCol}>
            <Image
              source={require("../../assets/images/sim.png")}
              style={styles.simImg}
            />

            <TouchableOpacity
              style={styles.simOption}
              onPress={() => setSim(2)}
            >
              <Ionicons
                name={sim === 2 ? "radio-button-on" : "radio-button-off"}
                size={22}
                color="black"
              />
              <Text style={styles.simLabel}>SIM 2</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      {/* SBI Circle */}
      {/* SBI Image Only */}
      <View style={{ marginTop: 45, alignSelf: "center" }}>
        <Image
          source={require("../../assets/images/sbi.png")}
          style={{ width: 90, height: 90, resizeMode: "contain" }}
        />
      </View>


      {/* Text Section */}
      <Text style={styles.title}>Register to Make Upi Payments</Text>
      <Text style={styles.subTitle}>Choose your phone number/ sim slot</Text>

      <View style={styles.bulletBox}>
        <Text style={styles.bullet}>• Select the sim that is registered with your bank</Text>
        <Text style={styles.bullet}>• Standard SMS charges apply</Text>
        <Text style={styles.bullet}>• Only Indian mobile number can register</Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 20,
  },

  backBtn: {
    marginTop: 50,
    marginBottom: 10,
  },

  // SIM Card Box
  card: {
    backgroundColor: "#F3F3F3",
    padding: 82,
    borderRadius: 16,
    marginTop: 10,
  },

  simRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  simCol: {
    alignItems: "center",
  },

  simImg: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },

  simOption: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  simLabel: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "600",
  },

  // SBI
  sbiCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#0A66C2",
    marginTop: 35,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  sbiLogo: {
    width: 55,
    height: 55,
    tintColor: "white",
    resizeMode: "contain",
  },

  // Text Section
  title: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "700",
  },

  subTitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#444",
  },

  bulletBox: {
    marginTop: 18,
    gap: 10,
  },

  bullet: {
    fontSize: 14,
    color: "#222",
  },

  // Register Button
  registerBtn: {
    marginTop: 35,
    backgroundColor: "#FF623D",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 60,
  },

  registerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
