import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Cell({children, style, size, centerVerticalAndHorizontal}) {
    let cellStyles
    if (centerVerticalAndHorizontal) cellStyles = StyleSheet.compose(style, {textAlign: "center", justifyContent:"center", alignSelf:"center", alignItems:"center"})

    return  <View style={StyleSheet.compose({flex: size}, cellStyles)}>{children}</View>
}