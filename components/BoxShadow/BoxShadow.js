import React from 'react';
import { View } from 'react-native'
import { BoxShadowStyles } from '../../styles/Style'

function BoxShadow({children}) {
    return <View style={BoxShadowStyles.boxShadow}>
        <View style={BoxShadowStyles.boxShadowContent}>
            {children}
        </View>
    </View>;
}

export { BoxShadow }