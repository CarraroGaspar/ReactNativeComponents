import { View } from 'react-native';
import React from 'react';
import {CardStyle} from '../../styles/CardStyle';

export default function CardFooter({left, middle, right}) 
{
    return <View style={CardStyle.cardFooter}>
        <View style={CardStyle.cardHeaderLeft}>{left}</View>
        <View style={CardStyle.cardHeaderMid}>{middle}</View>
        <View style={CardStyle.cardFooterRight}>{right}</View>
    </View>
}