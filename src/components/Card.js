import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({data})=> {
  return (
    <View style={{...styles.card, backgroundColor:data.color}}>
      <View style={{justifyContent:'space-between'}}>
        <Text style={styles.header}>{data.title}</Text>
        <View style={styles.valueContainer}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>{data.value} </Text>
        <Text>{ data.unit}</Text>
        </View>
      </View>
      <View>
        <data.icon />
      </View>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#0000004D',
    shadowOffset: {
        width: 0,
        height:5
    },
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius:3.10
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems:'baseline'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    
  }
})