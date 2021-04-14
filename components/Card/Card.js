import React from 'react';
import { View, Text } from 'react-native'
//import { BoxShadow } from 'react-native-shadow'
import { BoxShadow } from '../BoxShadow/BoxShadow'
import CardHeader  from './CardHeader'
//import CardBody  from './CardBody'
//import CardFooter  from './CardFooter'
import { CardStyle } from '../../styles/CardStyle'

export default function Card({leftHeader, title, subtitle, rightHeader}) {
    return <BoxShadow>
        <View style={CardStyle.card}>
            <CardHeader left={leftHeader} title={title} subtitle={subtitle} right={rightHeader}/>
        </View>
    </BoxShadow>
}