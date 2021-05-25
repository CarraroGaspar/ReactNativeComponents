import { View } from 'react-native';
import React from 'react';
import {CardStyle} from '../../styles/Style';

export default function CardFooter({left, middle, right}) 
{
    return <View style={CardStyle.cardFooter}>
        <View style={CardStyle.cardFooterSideComp}>
            <View style={{alignSelf:'center'}}>{ left }</View>
            </View>
        <View style={CardStyle.cardFooterComp}>
            <View style={{alignSelf:'center'}}>{ middle }</View>
        </View>
        <View style={CardStyle.cardFooterSideComp}>
            <View style={{alignSelf:'center'}}>{ right }</View>
        </View>
    </View>
}