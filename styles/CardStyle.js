import { YellowBox } from 'react-native';
import { StyleSheet } from 'react-native'
import { Styles } from './Style'

const CardStyle = StyleSheet.create({
    card: {
        padding: 5,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column"
    },
    cardHeader: {
        display: 'flex',
        flexDirection: "row",
        flex: 1,
        flexBasis: 60
    },
    cardHeaderLeft: {
        flex: 1,
        justifyContent:"center",
        paddingLeft: 4,
        flexBasis : 1
    },
    cardHeaderMid: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column'
    },
    cardHeaderMidTitle: {
        flex: 1,
        paddingHorizontal: 3
    },
    cardHeaderMidSubtitle: {
        flex: 1,
        paddingHorizontal: 3
    },
    cardHeaderRight: {
        flex: 1,
        justifyContent:"center",
        paddingRight: 4
    },
    cardBody: {
        display: 'flex',
        flexDirection: "column",
        justifyContent:"center", 
        flexWrap: 'wrap'
    },
    cardBodyComponent:{
        flex: 1,
        padding:5
    },
    cardFooter: {
        display: 'flex',
        flexDirection: "row",
        justifyContent:"space-between",
        flex: 1,
        flexBasis: 60
    },
    cardFooterComp: {
        flex: 3,
        justifyContent: "center"
    },
    cardFooterSideComp: {
        flex: 1,
        justifyContent: "center"
    }
})

export { CardStyle };