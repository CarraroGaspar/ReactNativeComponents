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
        display: "flex"
    },
    boxShadowContent: { backgroundColor:"white", borderRadius:6, padding:20 }
});

export { Styles };