import React from 'react'
import { View, StyleSheet } from 'react-native'

//Ver tema de performance porque tiene el map en la funcion lo que proboca que cada vez que se renderice se vuelva a ejecutar
export default function Grid({cells, style, size = 1, direction = "row"}) {
    return <View style={StyleSheet.compose({
            flexDirection: direction,
            flex: size
        }, 
        style)}>
        { cells }
    </View>
}