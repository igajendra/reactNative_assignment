import React, { useState } from 'react';
import { View, StyleSheet, Animated, Pressable } from 'react-native';

const CustomSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const animatedValue = new Animated.Value(isOn ? 30 : 0);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        console.log('isOn:', isOn);

        Animated.timing(animatedValue, {
            toValue: isOn ? 0 : 30,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Pressable onPress={toggleSwitch}>
            <View style={styles.container}>
                <Animated.View style={[styles.circle, { backgroundColor: isOn ? '#C0C0C0' : '#101010' }, { transform: [{ translateX: animatedValue }] }]} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#282828',
        justifyContent: 'center',
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        position: 'absolute',
        left: 5,
    },
});

export default CustomSwitch;