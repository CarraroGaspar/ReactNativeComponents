import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 0,
        margin: 20,
        borderRadius: 4,
        display: "flex",
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
    },
    boxShadowContent: { backgroundColor:"white", borderRadius:6, padding:20 }
});

export { Styles };