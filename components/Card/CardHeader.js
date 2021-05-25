import React from 'react';
import { View } from 'react-native'
import { Styles } from '../../styles/Style'

export default function CardHeader({left, title, subtitle, right}) {
    let mid;
    if (typeof subtitle !== 'undefined') {
        mid = <View style={Styles.cardHeaderMid}>
            {/* Title */}
            <View style={Styles.cardHeaderMidTitle}>
                { title }
            </View>
            {/* Subtitle */}
            <View style={Styles.cardHeaderMidSubtitle}>
                { subtitle }            
            </View>
        </View>
    } else {
        mid = <View style={Styles.cardHeaderMidTitle}>
            { title }
        </View>
    }

    return <View style={Styles.cardHeader}>
        {/* Left */}
        <View style={Styles.cardHeaderLeft}>
            <View style={{alignSelf:'center'}}>{ left }</View>
        </View>
        {/* Mid */}
        { mid }
        {/* Right */}
        <View style={Styles.cardHeaderRight}>
            <View style={{alignSelf:'center'}}>{ right }</View>
        </View>
    </View>;
}