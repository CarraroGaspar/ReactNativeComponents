import { View, Text } from "react-native"
import React from 'react'
import { Styles } from '../../styles/Style'

export default function CardBody({top, bottom}){
return(<View style={Styles.cardBody}>
        <View style={Styles.cardBodyComponent}>
            <View style={{alignSelf:'center'}}>{ top }</View>
        </View>
        <View style={Styles.cardBodyComponent}>
            <View style={{alignSelf:'center'}}>{ bottom }</View>
        </View>
    </View>
)
}