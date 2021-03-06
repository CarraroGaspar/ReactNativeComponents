import React from 'react';
import { View, Text } from 'react-native'
import { BoxShadow } from '../BoxShadow/BoxShadow'
import CardHeader  from './CardHeader'
//import CardBody  from './CardBody'
import CardFooter  from './CardFooter'
import { Styles } from '../../styles/Style'
import CardBody from './CardBody';

export default function Card({leftHeader, title, subtitle, rightHeader, topBody, bottomBody, leftFooter, middleFooter, rightFooter }) {
    return <BoxShadow>
        <View style={Styles.card}>
            <CardHeader left={leftHeader} title={title} subtitle={subtitle} right={rightHeader}/>
            <CardBody top={topBody} bottom={bottomBody}></CardBody>
            <CardFooter left={leftFooter} middle={middleFooter} right={rightFooter}></CardFooter>
        </View>
    </BoxShadow>
}