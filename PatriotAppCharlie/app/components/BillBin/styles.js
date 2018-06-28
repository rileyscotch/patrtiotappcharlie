import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4; 

export default EStyleSheet.create({
    container: {
        flex: -1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primaryBlue',
        width: '100%',
        height: '50%',
        borderRadius: BORDER_RADIUS,
    },
    // buttonContainer: {

    // },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        color: '$navyBlue'

    },
    border: {

    },
})