import React from 'react';
import { View, Text } from 'react-native'
import { BoxShadow } from '../BoxShadow/BoxShadow'
import CardHeader  from './CardHeader'
import { CardStyle } from '../../styles/Style'

export default function Card({leftHeader, title, subtitle, rightHeader}) {
    return <BoxShadow>
        <View style={CardStyle.card}>
            <CardHeader left={leftHeader} title={title} subtitle={subtitle} right={rightHeader}/>
        </View>
    </BoxShadow>
}