import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.seperator}>
    </View>
  )
}

const styles = StyleSheet.create({
    seperator: {
        height: 0.8,
        color: '#CAD5E2'
    }
})

export default Separator