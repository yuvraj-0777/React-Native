import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElivatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elivated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>Tap</Text>
        </View>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>me</Text>
        </View>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>to</Text>
        </View>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>Scroll</Text>
        </View>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>more...</Text>
        </View>
        <View style= {[styles.card, styles.cardElivated]}>
            <Text>🙃</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        padding: 10
    },
    card: {
        borderRadius: 4,
        margin: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    cardElivated: {
        backgroundColor: '#CAD5FF',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 4
    }
})