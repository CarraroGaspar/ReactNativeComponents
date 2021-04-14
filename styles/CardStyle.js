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
        paddingLeft: 4
    },
    cardHeaderMid: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column'
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
        flexBasis: "auto",
        alignSelf: "center",
        textAlign: "right",
        justifyContent: "flex-end",
        paddingRight: 4
    }
})

export { CardStyle };