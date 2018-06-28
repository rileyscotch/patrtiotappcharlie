import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4; 

export default EStyleSheet.create({
    containerBill: {
        flex: 0,
        // alignSelf: 'flex-end',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        width: '100%',
        height: '50%',
        borderRadius: BORDER_RADIUS,
    },
    // buttonContainer: {

    // },
    nameText: {
        fontWeight: '600',
        fontSize: 20,
        color: '$navyBlue'

    },
    resultText: {
        fontWeight: '600',
        fontSize:12,
        color: '$navyBlue',

    },
    summaryText: {
        fontWeight: '600',
        fontSize:12,
        color: '$navyBlue',
        padding: 10,

    },
})