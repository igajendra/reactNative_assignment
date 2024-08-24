import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import YesNoModal from '../component/common/TeamPredictModal';
import CustomDropdown from '../component/common/CustomDropdown';
import CustomSwitch from '../component/common/CustomSwitch';

const Home = () => {

    const { width } = Dimensions.get('window');

    const [showModal, setShowModal] = useState(false);
    const [clickrdValue, setClickedValue] = useState('');

    const data = [{
        img: require('../../media/bitcoin.png'),
        title1: 'Bitcoin',
        title2: '$5438',
        title3: '+0.23',
    },
    {
        img: require('../../media/cricket.png'),
        title1: 'IPL',
        title2: '2024',
        title3: '',
    },
    {
        img: require('../../media/ethrium.png'),
        title1: `Ethereum`,
        title2: '$5438',
        title3: '+0.23',
    },
    {
        img: require('../../media/cricket.png'),
        title1: `Men's world cup`,
        title2: 'Cricket',
        title3: '',
    },
    {
        img: require('../../media/football.png'),
        title1: 'Champion league',
        title2: 'Football',
        title3: '',
    },
    ]

    const images = [
        { id: '1', img: require('../../media/background2.png') },
        { id: '2', img: require('../../media/background3.png') },
        { id: '3', img: require('../../media/background4.png') },
    ]


    const MatchPredictionCard = () => {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeading}>
                    <View style={{ width: '80%', gap: 5 }}>
                        <Text style={styles.question}>Kolkata to win the match vs Mumbai?</Text>
                        <Text style={styles.stats}>H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0</Text>
                    </View>
                    <Image source={require('../../media/ipllogo.png')} style={styles.logo} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { setClickedValue('Yes'), setShowModal(true) }}
                        style={[styles.buttonWrapper, styles.yesButtonWrapper]}>
                        <View style={[styles.button, styles.yesButton]}>
                            <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setClickedValue('No'), setShowModal(true) }}
                        style={[styles.buttonWrapper, styles.noButtonWrapper]}>
                        <View style={[styles.button, styles.noButton]}>
                            <Text style={styles.buttonText}>No ₹ 4.7</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <YesNoModal visible={showModal} setModalVisible={setShowModal} clickrdValue={clickrdValue} />
            </View>
        );
    };

    const HeadingCard = ({ image, title1, title2, title3 }) => {
        return (
            <View style={styles.HeadingCardContainer}>
                <View style={{ padding: 5 }}>
                    <Text style={styles.title1}>{title1}</Text>
                    <View style={styles.title2}>
                        <Text style={{ color: 'grey' }}>{title2}</Text>
                        <Text style={{ color: 'green' }}>{title3}</Text>
                    </View>
                </View>
                <Image source={image} style={[{ width: 50, height: 50, borderWidth: 0 }]} />
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.innerContainer}>
                    <CustomDropdown />
                    <View>
                        <View style={styles.switchContainer}>
                            <CustomSwitch />
                            <Text style={styles.liveText}>Live</Text>
                            <Image source={require('../../media/notification.png')} style={{ width: 50, height: 50, }} />
                        </View>
                    </View>

                </View>
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        {
                            data.map((item, index) => (
                                <HeadingCard key={index} image={item.img} title1={item.title1} title2={item.title2} title3={item.title3} />
                            ))
                        }
                    </View>
                </ScrollView>

                <View style={styles.container}>
                    <View style={styles.story}>
                        <FlatList
                            data={images}
                            keyExtractor={(item) => item.id}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Image source={item.img} style={{ width: width, height: 120 }} />
                            )}
                        />
                    </View>
                    <MatchPredictionCard />
                    <MatchPredictionCard />
                    <MatchPredictionCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    story: {
        marginVertical: 20,
    },

    liveText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    switchContainer: { flexDirection: 'row', alignItems: 'center', gap: 15 },
    text: {
        color: '#fff',
    },
    card: {
        backgroundColor: '#1c1c1c',
        padding: 16,
        borderRadius: 8,
        marginBottom: 15
    },
    innerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 },
    title1: { color: '#fff', margin: 5, fontWeight: '700' },
    title2: { flexDirection: 'row', alignItems: 'center', padding: 5, gap: 10 },
    cardHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, gap: 20 },
    HeadingCardContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1C1C1E', borderRadius: 8, padding: 2 },
    question: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 8,
    },
    stats: {
        color: '#fff',
        fontSize: 12,
        // textAlign: 'center',
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonWrapper: {
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    yesButtonWrapper: {
        backgroundColor: '#2a6ff7',
    },
    noButtonWrapper: {
        backgroundColor: '#49b957',
    },
    button: {
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    yesButton: {
        backgroundColor: '#1036A6',
    },
    noButton: {
        backgroundColor: '#2ecc72',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 60,
        height: 60,
    },
});