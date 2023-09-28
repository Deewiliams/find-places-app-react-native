import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceItemDetail = ({place}) => {
  return (
    <View>
      <Text>{place?.name}</Text>
    </View>
  )
}

export default PlaceItemDetail

const styles = StyleSheet.create({})