import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const SwipeForNoComponent = ({ clickrdValue }) => {
    const [isSwiped, setIsSwiped] = useState(false);
    console.log('isSwiped', isSwiped)

    const handleSwipeRight = () => {
        console.log('jiuy98y')
        setIsSwiped((prev) => !prev);
        // Perform your desired action when the user swipes right
    };

    const renderLeftActions = () => {
        return (
            <View style={styles.leftActions}>
                <Text style={styles.actionText}>Swipe for No</Text>
            </View>
        );
    };

    return (
        <GestureHandlerRootView>
            <View style={{ backgroundColor: clickrdValue == 'Yes' ? '#007AFF' : '#2ecc72', borderWidth: 0, marginVertical: 10, borderRadius: 30, }}>
                <Swipeable
                    renderLeftActions={renderLeftActions}
                    onSwipeableRightOpen={handleSwipeRight}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 100 }}>
                        <View style={styles.container}>
                            <Image style={{ width: 23, height: 23, tintColor: clickrdValue == 'Yes' ? '#007AFF' : '#2ecc72' }} source={require('../../../media/rightswipe2.png')}></Image>
                        </View>
                        {!isSwiped && <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{'Swipe for No'}</Text>}
                    </View>
                </Swipeable>
            </View>
        </GestureHandlerRootView>
    );
};

export default SwipeForNoComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 50,
        height: 50,
        margin: 8,
        alignItems: 'center',
        justifyContent: "center",
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    swipedText: {
        color: 'red',
    },
    leftActions: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: "60%",
        opacity: 0
    },
    actionText: {
        color: 'white',
        fontSize: 16,
    },
});
