import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElivated]}>
      <Image
       source={{
        uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
       }}
       style={styles.cardImg}
       />
       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Sun set</Text>
        <Text style={styles.cardLabel}>Beautiful</Text>
        <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum quod sit quisquam suscipit neque doloremque totam quos, officia earum deleniti error aliquam maxime corporis a autem accusantium, repellat ipsa!
        </Text>
        <Text style={styles.cardFooter}>Footer</Text>
       </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 20,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElivated: {
        backgroundColor: '#AAAA00',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height:1
        }
    },
    cardImg: {
        height: 180,
        marginBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#123A00',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#123A00',
        fontSize: 15,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6
    },
    cardFooter: {
        color: '#123A00'
    }
})