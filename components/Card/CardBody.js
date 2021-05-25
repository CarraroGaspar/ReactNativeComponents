import { View, Text } from "react-native"
import React from 'react'
import { CardStyle } from '../../styles/Style'

export default function CardBody({top, bottom}){
return(<View style={CardStyle.cardBody}>
        <View style={CardStyle.cardBodyComponent}>
            <View style={{alignSelf:'center'}}>{ top }</View>
        </View>
        <View style={CardStyle.cardBodyComponent}>
            <View style={{alignSelf:'center'}}>{ bottom }</View>
        </View>
    </View>
)
}