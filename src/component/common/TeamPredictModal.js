import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import PriceSlider from "./PriceSlider";
import SwipeComponent from "./SwipeComponent";

const TeamPredictModal = ({
    visible,
    setModalVisible,
    subHeader,
    keyboard = false,
    clickrdValue
}) => {

    const [value, setValue] = useState(50);

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            isVisible={visible}
            hasBackdrop
            backdropOpacity={0.7}
            onBackdropPress={() =>
                setModalVisible(false)
            }
            onBackButtonPress={() => setModalVisible(false)}
            backdropColor="grey"
            style={keyboard ? styles.keyboardBottomModal : styles.bottomModal}
        >
            <KeyboardAvoidingView enabled behavior="position">
                <View style={styles.modalWrapper}>
                    <View style={styles.headerContainer}>
                        <View>
                            <View>
                                <Text style={styles.header}>{'Kolkata to win the match vs Mumbai?'}</Text>
                                <Text style={styles.subHeader}>{subHeader}</Text>
                            </View>
                        </View>
                        <TouchableOpacity >
                            <Image
                                source={require("../../../media/ipllogo.png")}
                                style={styles.iplLogo}
                            />
                        </TouchableOpacity>
                    </View>
                    {clickrdValue == 'Yes' && <View style={styles.buttonView}>
                        <View style={styles.buttonInnerView}>
                            <View style={styles.yesView}>
                                <Text style={styles.yesNoText}>Yes ₹ 5.3</Text>
                            </View>
                        </View>
                        <Text style={styles.yesNoText}>No ₹ 4.7</Text>
                    </View>}

                    {clickrdValue == 'No' && <View style={styles.buttonView}>
                        <Text style={styles.yesText}>Yes  ₹ 5.3</Text>
                        <View style={styles.buttonInnerView}>
                            <View style={styles.noView}>
                                <Text style={styles.yesNoText}>No ₹ 4.7</Text>
                            </View>
                        </View>
                    </View>}
                    <View style={styles.buttonView2}>
                        <View style={styles.pricePytView}>
                            <Text style={styles.priceText}>Price</Text>
                            <Text style={styles.priceText}>₹ 5.3</Text>
                        </View>
                        <Text style={styles.quntatyText}>132045 qty available</Text>

                        <PriceSlider min={0} max={100} initialValue={50}
                            onValueChange={handleValueChange}
                            clickrdValue={clickrdValue} />

                        <View style={styles.borderView}>
                            {[...new Array(40)].map((_, index) => <Text
                                style={{ color: '#fff', fontSize: 9, paddingHorizontal: 2 }} key={index}>-</Text>)}
                        </View>
                        <View style={styles.rupeesView}>
                            <Text style={styles.putText}>₹ 5.7</Text>
                            <Text style={[styles.putText, { color: 'green', }]}>₹ 10</Text>
                        </View>
                        <View style={styles.pricePytView}>
                            <Text style={styles.putText}>You Put</Text>
                            <Text style={[styles.putText, { color: '#E2DFD2' }]}>You get</Text>
                        </View>
                    </View>
                    <SwipeComponent clickrdValue={clickrdValue} />
                    <Text style={styles.availableBlance}>Available Blance: 400.00</Text>
                </View>
            </KeyboardAvoidingView>
        </Modal >
    );
};

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    keyboardBottomModal: {
        justifyContent: "flex-end",
        margin: 0,

    },
    modalWrapper: {
        backgroundColor: '#000',
        paddingBottom: 40,
        paddingVertical: 16,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    borderView: { flexDirection: 'row', margin: 10, alignItems: 'center', justifyContent: 'center' },
    yesText: { fontSize: 20, fontWeight: '900', color: '#fff', borderWidth: 0, margin: 15, paddingHorizontal: 15 },
    yesView: { borderWidth: 1.1, borderColor: '#2a6ff7', flex: 1, alignItems: 'center', borderRadius: 24, padding: 15, backgroundColor: '#1036A6' },
    buttonView: { borderColor: 'white', borderRadius: 24, backgroundColor: '#1c1c1c', flexDirection: 'row', alignItems: 'center', gap: 40, marginTop: 10 },
    buttonInnerView: { borderColor: 'white', borderRadius: 24, width: '50%' },
    noView: { borderWidth: 1.1, borderColor: '#49b957', flex: 1, alignItems: 'center', borderRadius: 24, padding: 15, backgroundColor: '#2ecc72' },
    yesNoText: { fontSize: 20, fontWeight: '900', color: '#fff' },
    buttonView2: { borderWidth: 0.2, borderColor: '#fff', marginTop: 15, borderRadius: 10 },
    quntatyText: { color: 'grey', fontSize: 14, fontWeight: '500', alignSelf: 'flex-end', padding: 5 },
    priceText: { color: '#fff', fontSize: 18, fontWeight: '800' },
    rupeesView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 },
    putText: { color: '#E2DFD2', fontSize: 18, fontWeight: '500' },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10,
    },
    iplLogo: { width: 45, height: 50, borderWidth: 0, borderColor: 'red', borderRadius: 15, },
    pricePytView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 },
    header: {
        fontSize: 16,
        fontWeight: Platform.OS === "ios" ? "700" : "bold",
        color: '#fff',
    },
    subHeader: {
        color: 'red',
        fontSize: 14,
        lineHeight: 20,
    },
    availableBlance: { color: '#fff', alignSelf: 'center', fontSize: 15, fontWeight: '500' }
});

export default TeamPredictModal;
