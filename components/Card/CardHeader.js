import React from 'react';
import { View } from 'react-native'
import { CardStyle } from '../../styles/CardStyle'

export default function CardHeader({left, title, subtitle, right}) {
    let mid;
    if (typeof subtitle !== 'undefined') {
        mid = <View style={CardStyle.cardHeaderMid}>
            {/* Title */}
            <View style={CardStyle.cardHeaderMidTitle}>
                { title }
            </View>
            {/* Subtitle */}
            <View style={CardStyle.cardHeaderMidSubtitle}>
                { subtitle }            
            </View>
        </View>
    } else {
        mid = <View style={CardStyle.cardHeaderMidTitle}>
            { title }
        </View>
    }

    return <View style={CardStyle.cardHeader}>
        {/* Left */}
        <View style={CardStyle.cardHeaderLeft}>
            <View style={{alignSelf:'center'}}>{ left }</View>
        </View>
        {/* Mid */}
        { mid }
        {/* Right */}
        <View style={CardStyle.cardHeaderRight}>
            <View style={{alignSelf:'center'}}>{ right }</View>
        </View>
    </View>;
}