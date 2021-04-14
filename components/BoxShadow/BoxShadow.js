import React from 'react';
import { View } from 'react-native'
import { Styles } from '../../styles/Style'

function BoxShadow({children}) {
    return <View style={Styles.boxShadow}>
        <View style={Styles.boxShadowContent}>
            {children}
        </View>
    </View>;
}

export { BoxShadow }