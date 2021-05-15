import { View, Text } from "react-native"
import React from 'react'
import { CardStyle } from '../../styles/CardStyle'

export default function CardBody({top, bottom}){
return(<View style={CardStyle.cardBody}>
        <View style={CardStyle.cardBodyComponent}>{top}</View>
        <View style={CardStyle.cardBodyComponent}>{bottom}</View>
    </View>
)
}