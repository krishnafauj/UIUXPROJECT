import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Top Feathers */}
      <View style={styles.topBar}>
        <Feather name="edit-3" size={22} color="#000" />
        <Text style={styles.pageName}> My Profile</Text>
        <Feather name="settings" size={22} color="#000" />
      </View>

      {/* Header Card */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Feather name="user" size={24} color="#0B3A75" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.profileName}>Amod Adarsh</Text>
        </View>

        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      {/* SECTION: Basic Details */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Details</Text>
        <View style={styles.headingDivider} />

        {/* Date of birth + Place of birth */}
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

      {/* SECTION: Educational Details */}
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

      {/* SECTION: Occupational Details */}
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
          <Text style={styles.value}>Adarsh yesodharan , Raichur</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 50,
  },

  header: {
    backgroundColor: "#0B3A75",
    margin: 16,
    marginBottom: 0,
    padding: 18,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  profileImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  profileName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },

  pageName: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
  },

  upgradeBtn: {
    backgroundColor: "#ffffff30",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },

  upgradeText: {
    color: "#fff",
    fontSize: 12,
  },

  section: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E4EB",
  },

  sectionHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
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
    borderRadius: 1,
  },


  item: {},

  label: {
    fontSize: 13,
    color: "#777",
  },

  value: {
    marginTop: 3,
    fontSize: 14,
    color: "#222",
  },
});
