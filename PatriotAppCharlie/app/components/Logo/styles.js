import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native'

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        width: imageWidth,
        height: imageWidth,
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        marginTop: 10,
        color: '$navyBlue'
    }

})