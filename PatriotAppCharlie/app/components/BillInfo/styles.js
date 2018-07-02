import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    containerBill: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$snowWhite',
        width: '90%',
        height: '65%',
        borderRadius: 5,
        
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