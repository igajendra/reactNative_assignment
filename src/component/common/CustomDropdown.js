import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Image, SafeAreaView } from 'react-native';

const CustomDropdown = () => {
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const data = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 4', value: 4 },
        { label: 'Option 5', value: 5 },
        { label: 'Option 6', value: 6 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { setSelectedValue(item.value); setVisible(false); }}>
            <Text style={styles.dropdownItem}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setVisible(true)}>
                <Text style={styles.dropdownButton}>Category</Text>
                <Image style={{ tintColor: '#fff', width: 25, height: 25 }} source={require('../../../media/dropdown.png')}></Image>
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade" >
                <TouchableOpacity onPress={() => setVisible(false)} style={styles.modalOverlay}>
                    <View style={styles.dropdownContainer}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

    );
};

const styles = StyleSheet.create({
    dropdownButton: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: '#fff'
    },
    dropdownContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        height: 200
    },
    dropdownItem: {
        fontSize: 14,
        padding: 10,
    },
    modalOverlay: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 50,
        position: 'fixed',
    },
});

export default CustomDropdown;