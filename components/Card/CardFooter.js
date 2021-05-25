import { View } from 'react-native';
import React from 'react';
import {Styles} from '../../styles/Style';

export default function CardFooter({left, middle, right}) 
{
    return <View style={Styles.cardFooter}>
        <View style={Styles.cardFooterSideComp}>
            <View style={{alignSelf:'center'}}>{ left }</View>
            </View>
        <View style={Styles.cardFooterComp}>
            <View style={{alignSelf:'center'}}>{ middle }</View>
        </View>
        <View style={Styles.cardFooterSideComp}>
            <View style={{alignSelf:'center'}}>{ right }</View>
        </View>
    </View>
}