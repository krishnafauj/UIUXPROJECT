import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "native-base";

const COLORS = {
  primary: "#0B3A75",
  white: "#ffffff",
  text: "#1F2937",
  textLight: "#6B7280",
};

export default function MyProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* 🔵 BLUE HEADER */}
      <View style={styles.blueHeader}>
        <Pressable style={styles.headerIconBtn}>
    <Feather name="edit-2" size={20} color={COLORS.white} />
  </Pressable>

  {/* Center Title */}
  <Text style={styles.headerTitle}>My Profile</Text>

  {/* Right - Settings Icon */}
  <Pressable style={styles.headerIconBtn}>
    <Feather name="settings" size={22} color={COLORS.white} />
  </Pressable>
      </View> 

      {/* WHITE SCROLL AREA */}
      <ScrollView style={styles.whiteArea} showsVerticalScrollIndicator={false}>

        {/* Profile Header Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileImageContainer}>
            <Feather name="user" size={24} color={COLORS.primary} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Amod Adarsh</Text>
          </View>

          <View style={styles.upgradeBtn}>
            <Text style={styles.upgradeText}>Upgrade</Text>
          </View>
        </View>

        {/* SECTION: Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Personal Details</Text>
          <View style={styles.headingDivider} />

          <View style={styles.rowBetween}>
            <View style={styles.item}>
              <Text style={styles.label}>Date of birth</Text>
              <Text style={styles.value}>04-01-04</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.label}>Place of birth</Text>
              <Text style={styles.value}>-</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Male</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Marital Status</Text>
            <Text style={styles.value}>Single</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Number of dependents</Text>
            <Text style={styles.value}>00</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Religion</Text>
            <Text style={styles.value}>Hindu</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>Hindu Other Backward Caste</Text>
          </View>
        </View>

        {/* SECTION: Occupational Details */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Occupational Details</Text>
          <View style={styles.headingDivider} />

          <View style={styles.item}>
            <Text style={styles.label}>Occupation Type</Text>
            <Text style={styles.value}>Others</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Sub-Occupation Type</Text>
            <Text style={styles.value}>Students</Text>
          </View>
        </View>

        {/* SECTION: Educational Details */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Educational Details</Text>
          <View style={styles.headingDivider} />

          <View style={styles.item}>
            <Text style={styles.label}>Qualification</Text>
            <Text style={styles.value}>Matriculate</Text>
          </View>
        </View>

        {/* SECTION: Contact Details */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Contact Details</Text>
          <View style={styles.headingDivider} />

          <View style={styles.item}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>amodadarsh25@gmail.com</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>7437483249</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>Adarsh yesodharan, Raichur</Text>
          </View>
        </View>

        {/* SECTION: Identification Details */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Identification Details</Text>
          <View style={styles.headingDivider} />

          <View style={styles.item}>
            <Text style={styles.label}>CIF No.</Text>
            <Text style={styles.value}>XXXXXXXX1085</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>AADHAAR Vault No.</Text>
            <Text style={styles.value}>XXXXXXXXUmVA</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>PAN</Text>
            <Text style={styles.value}>XXXXXXXX324C</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Passport Number</Text>
            <Text style={styles.value}>-</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>CKYC Number</Text>
            <Text style={styles.value}>XXXXXXXX6030</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Driving License</Text>
            <Text style={styles.value}>-</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Voter ID</Text>
            <Text style={styles.value}>-</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.item}>
            <Text style={styles.label}>Other</Text>
            <Text style={styles.value}>-</Text>
          </View>
        </View>

        {/* SBI LOGO */}
        <View style={styles.bottomLogoWrap}>
          <Image
            source={require("@/assets/images/sbi.png")}
            alt="SBI logo"
            
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

  blueHeader: {
  height: 110,
  backgroundColor: COLORS.primary,
  paddingHorizontal: 20,
  paddingBottom: 18,
  marginTop: -20,

  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
},

  headerTitle: {
  color: COLORS.white,
  fontSize: 22,
  fontWeight: "700",
},

  // White Body
  whiteArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Profile Card
  profileCard: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
  },
  headerIconBtn: {
  padding: 6,
},

  profileImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  profileName: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "600",
  },

  upgradeBtn: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },

  upgradeText: {
    color: COLORS.white,
    fontSize: 12,
  },

  // Sections
  section: {
    backgroundColor: COLORS.white,
    marginBottom: 20,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E4EB",
  },

  sectionHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },

  headingDivider: {
    height: 2,
    backgroundColor: "#D4D7DE",
    marginVertical: 10,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  divider: {
    height: 1,
    backgroundColor: "#E6E6E6",
    marginVertical: 12,
  },

  // REQUIRED: Fix TS error
  item: {},

  label: {
    fontSize: 13,
    color: COLORS.textLight,
  },

  value: {
    marginTop: 3,
    fontSize: 14,
    color: COLORS.text,
  },

  bottomLogoWrap: {
    padding: 30,
    alignItems: "center",
  },

  bottomLogo: {
    width: "80%",
    height: 60,
  },
});
