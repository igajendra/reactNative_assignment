import React, { useState, useRef } from 'react';
import { View, PanResponder, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PriceSlider = ({ min, max, onValueChange, initialValue, clickrdValue }) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                animatedValue.setOffset(animatedValue.__getValue());
                animatedValue.setValue(0);
            },
            onPanResponderMove: Animated.event(
                [null, { dx: animatedValue }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (e, gestureState) => {
                animatedValue.flattenOffset();
                const value = Math.max(0, Math.min(sliderWidth, gestureState.moveX));
                const selectedValue = Math.round((value / sliderWidth) * (max - min) + min);
                onValueChange(selectedValue);
            },
        })
    ).current;

    const translateX = animatedValue.interpolate({
        inputRange: [0, sliderWidth],
        outputRange: [0, sliderWidth],
        extrapolate: 'clamp',
    });

    const handleLayout = (event) => {
        setSliderWidth(event.nativeEvent.layout.width);
        const initialPosition = ((initialValue - min) / (max - min)) * event.nativeEvent.layout.width;
        animatedValue.setValue(initialPosition);
    };

    const increment = () => {
        const newValue = Math.min(max, initialValue + 1);
        onValueChange(newValue);
    };

    const decrement = () => {
        const newValue = Math.max(min, initialValue - 1);
        onValueChange(newValue);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { marginRight: 5 }]} onPress={decrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.sliderContainer}>
                <View style={styles.track} onLayout={handleLayout}>
                    <Animated.View
                        style={[
                            styles.thumb,
                            { transform: [{ translateX }] },

                            { backgroundColor: clickrdValue == 'Yes' ? '#007AFF' : '#2ecc72' }

                        ]}
                        {...panResponder.panHandlers}
                    />
                </View>
            </View>
            <TouchableOpacity style={[styles.button, { marginLeft: 5 }]} onPress={increment}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    sliderContainer: {
        flex: 1,
        alignItems: 'center',
    },
    track: {
        width: '100%',
        height: 15,
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
    thumb: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        top: -15,
    },
    button: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
    },
});

export default PriceSlider;
