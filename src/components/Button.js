
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({Icon='',title}) {
  return (
    <TouchableOpacity>
          <View style={styles.Button}>
          {Icon && <Icon/>}
              <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        shadowColor: '#0000004D',
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems:'center',
    },
    title: {
        marginLeft: 10,
        fontWeight:'bold'
    }
    
})