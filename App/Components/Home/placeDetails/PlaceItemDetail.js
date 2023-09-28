import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../../Shared/Colors';

const PlaceItemDetail = ({place}) => {
  return (
    <View>
      <Text>{place?.name}</Text> 
      <View style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginTop: 5,
        flexDirection: "row"
      }}>
      <AntDesign name="star" size={20} color={Colors.YELLOW} />
      <Text>{place?.rating}</Text>
      </View>
    </View>
  )
}

export default PlaceItemDetail

const styles = StyleSheet.create({})