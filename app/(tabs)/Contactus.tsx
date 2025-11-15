import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export default function ContactUs() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <View style={styles.headerIconCircle}>
                        <MaterialIcons name="support-agent" size={28} color="#fff" />
                    </View>

                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.headerTitle}>Contact Us</Text>
                        <Text style={styles.headerSubtitle}>We are here to assist you</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.subText}>
              
            </Text>

            {/* Customer Support Card */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Customer Support</Text>

                {/* Emergency/Fraud */}
                <View style={styles.row}>
                    <View style={styles.iconCircle}>
                        <MaterialIcons name="phone" size={22} color="#0A66C2" />
                    </View>
                    <View style={styles.rowTextBox}>
                        <Text style={styles.smallText}>Emergency / Fraud Helpline</Text>
                        <Text style={styles.boldText}>1800-11-11-09</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* General Queries */}
                <View style={styles.row}>
                    <View style={styles.iconCircle}>
                        <MaterialIcons name="call" size={22} color="#0A66C2" />
                    </View>
                    <View style={styles.rowTextBox}>
                        <Text style={styles.smallText}>General Queries</Text>
                        <Text style={styles.boldText}>1800-1234 / 1800-2100</Text>
                    </View>
                </View>
            </View>

            {/* SUPPORT */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Support</Text>

                {/* Unauthorized */}
                <View style={styles.supportRow}>
                    <View style={styles.supportIconCircle}>
                        <Feather name="alert-circle" size={20} color="#000" />
                    </View>
                    <Text style={styles.supportText}>Report unauthorized transaction</Text>
                </View>

                {/* Raise complaint */}
                <View style={styles.supportRow}>
                    <View style={styles.supportIconCircle}>
                        <Feather name="edit-3" size={20} color="#000" />
                    </View>
                    <Text style={styles.supportText}>Raise a complaint</Text>
                </View>

                {/* Track complaint */}
                <View style={styles.supportRow}>
                    <View style={styles.supportIconCircle}>
                        <Feather name="search" size={20} color="#000" />
                    </View>
                    <Text style={styles.supportText}>Track a complaint</Text>
                </View>

                {/* FAQ */}
                <View style={styles.supportRow}>
                    <View style={styles.supportIconCircle}>
                        <Feather name="help-circle" size={20} color="#000" />
                    </View>
                    <Text style={styles.supportText}>FAQ</Text>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>YONO SBI</Text>
                

            </View>
        </ScrollView>
    );
}

//
// STYLES
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F5F9",
        paddingHorizontal: 20,
        paddingTop: 28,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#0A0A0A",
        marginBottom: 8,
    },

    subText: {
        fontSize: 15,
        color: "#6F6F6F",
        lineHeight: 22,
        marginBottom: 25,
    },

    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 4,
    },
    headerContainer: {
        backgroundColor: "#0B3A75",
        marginTop:20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
        marginBottom: 20,
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    headerIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "rgba(255,255,255,0.25)",
        justifyContent: "center",
        alignItems: "center",
    },

    headerTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
    },

    headerSubtitle: {
        marginTop: 2,
        fontSize: 14,
        color: "rgba(255,255,255,0.8)",
    },


    cardTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 18,
        color: "#0A0A0A",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },

    iconCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#E7F0FF",
        justifyContent: "center",
        alignItems: "center",
    },

    rowTextBox: {
        marginLeft: 12,
    },

    smallText: {
        fontSize: 13,
        color: "#7A7A7A",
    },

    boldText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#0A0A0A",
    },

    divider: {
        height: 1,
        backgroundColor: "#E2E2E2",
        marginVertical: 8,
    },

    // Support section
    supportRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },

    supportIconCircle: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    supportText: {
        fontSize: 15,
        color: "#1A1A1A",
        flexShrink: 1,
    },

    // Footer
    footer: {
        marginTop: 35,
        alignItems: "center",
        marginBottom: 50,
    },

    footerText: {
        fontSize: 26,
        fontWeight: "700",
        color: "#C8C8C8",
    },
});
