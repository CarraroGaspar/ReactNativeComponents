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
        alignSelf: "center",
        paddingLeft: 4,
        flexBasis : 1,
        backgroundColor: "yellow"
    },
    cardHeaderMid: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "green",
    },
    cardHeaderMidTitle: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 3
    },
    cardHeaderMidSubtitle: {
        flex: 1,
        paddingVertical: 2,
        paddingHorizontal: 3
    },
    cardHeaderRight: {
        flex: 1,
        //flexBasis: "auto",
        //alignSelf: "center",
        textAlign: "right",
        //justifyContent: "flex-end",
        paddingRight: 4
    },
    cardBody: {
        display: 'flex',
        flexDirection: "column",
        justifyContent:"center", 
        padding: 5
    },
    cardBodyComponent:{
        backgroundColor:"pink",
    },
    cardFooter: {
        display: 'flex',
        flexDirection: "row",
        justifyContent:"space-between",
        flex: 1,
        flexBasis: 60
    },
    cardFooterRight: {
        flex: 1,
        backgroundColor:"red",
        //flexBasis: "auto",
        //alignSelf: "center",
        //textAlign: "right",
        justifyContent: "flex-end",
        //paddingRight: 4
    }
})

export { CardStyle };