import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4; 

export default EStyleSheet.create({
    containerBill: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        width: '100%',
        height: '65%',
        
    },
    nameText: {
        fontWeight: '600',
        fontSize: 60,
        color: '$red'
    },
    resultText: {
        fontWeight: '600',
        fontSize:18,
        color: '$navyBlue',
    },
    summaryText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize:20,
        color: '$navyBlue',
        padding: 10,

    },
})