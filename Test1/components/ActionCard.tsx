import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWeb(webLink: string) {
        Linking.openURL(webLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card ,styles.elivatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in samsung ecosystem?
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/16796363/pexels-photo-16796363/free-photo-of-pic-du-midi-de-bigorre-in-pyrenees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        style={styles.cardImg}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi 
                illum necessitatibus tempora totam libero assumenda omnis delectus 
                reprehenderit cupiditate.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => {openWeb('https://www.wikipedia.org')}}
            >
                <Text>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elivatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40 ,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600'
    },
    cardImg: {
        height: 180
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})