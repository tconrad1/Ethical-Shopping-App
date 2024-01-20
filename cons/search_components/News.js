//News.js
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Linking } from 'react-native';

export default function News() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View >
                    <Text style = {styles.Title}>
                        Relevant News
                    </Text>
                    <View style = {styles.Separator1}/>
                    <Image
                        style = {styles.NewsImage}
                        source = {{uri: 'https://i.guim.co.uk/img/media/9d7b695157ead670f884659eedd4af6c0155c6cd/0_0_3500_2100/master/3500.jpg?width=700&dpr=1&s=none' }} />
                    <Text
                        style = {[styles.NewsText, styles.hyperlinkStyle]}
                        onPress = {() => {
                            Linking.openURL('https://www.theguardian.com/global-development/2021/feb/12/mars-nestle-and-hershey-to-face-landmark-child-slavery-lawsuit-in-us');
                        }}>
                        The Guardian: "Mars, Nestlé and Hershey to face child slavery lawsuit in US"
                    </Text>
                    <View style = {styles.Separator2}/>
                    <Image
                        style = {styles.NewsImage}
                        source = {{uri: 'https://i.guim.co.uk/img/media/10d9c4abef7382d8e01c8deff43b507da78c438d/0_233_3500_2100/master/3500.jpg?width=620&dpr=1&s=none'}} />
                    <Text
                        style = {[styles.NewsText, styles.hyperlinkStyle]}
                        onPress = {() => {
                            Linking.openURL('https://www.theguardian.com/global-development/2021/feb/12/mars-nestle-and-hershey-to-face-landmark-child-slavery-lawsuit-in-us');
                        }}>
                        Police checks during an operation to rescue children from child traffickers in Aboisso, Ivory Coast.
                    </Text>
                    <View style = {styles.Separator2}/>
                    <Image
                        style = {styles.NewsImage}
                        source = {{uri: 'https://i.guim.co.uk/img/media/67e014d72c51e1a25e7ee1586ed03c58842c6923/0_0_4371_2895/master/4371.jpg?width=620&dpr=1&s=none'}} />
                    <Text
                        style = {[styles.NewsText, styles.hyperlinkStyle]}
                        onPress = {() => {
                            Linking.openURL('https://cocobod.gh/pages/cocoa');
                        }}>
                        A sign warns against child labour in cocoa production in Ghana
                    </Text>
                    <View style = {styles.Separator2}/>
                </View>
            </ScrollView>
        </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    Separator1: {
        height: 0.75,
        width: 372,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 21,
        backgroundColor: '#636363'
    },
    Separator2: {
        height: 0.75,
        width: 372,
        marginLeft: 20,
        marginTop: 21,
        marginBottom: 21,
        backgroundColor: '#9F9F9F'
    },
    Title: {
        color: '#636363',
        fontStyle: 'italic',
        fontSize: 35,
        marginLeft: 20,
        marginTop: 21
    },
    NewsImage: {
        width: 361,
        height: 250,
        marginLeft: 25.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    NewsText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#3B3B3B',
        marginLeft: 25.5,
        marginRight: 25.5,
        textAlign: 'justify'
    }
})