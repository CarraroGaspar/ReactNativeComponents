const BoxShadowStyles = {
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
};

const CardStyle = {
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
}

const Styles = {
    fonts: {
        font0: {
            fontSize: 18,
            fontWeight: "800",
        },
        font1: {
            fontSize: 16,
            fontWeight: "600",
        },
        font2: {
            fontSize: 14
        },
        font3: {
            fontSize: 12
        },
        font4: {
            fontSize: 10
        }
    },    
    colours: {
        black: "#313131",
        white: "white",
        lightGray: "#9A9A9A"
    },    
    spaces: {
        padding0: 18,
        padding1: 14,
        padding2: 10,
        padding3: 6,
        padding4: 2,
        marginX: 10
    }
}

export { BoxShadowStyles, CardStyle, Styles };