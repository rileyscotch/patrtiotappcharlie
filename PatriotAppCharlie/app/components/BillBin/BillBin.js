
import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, TouchableHighlight, TextInput, View } from 'react-native'

import styles from './styles'

const BillBin = ({ onPress, billText, billResult }) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.container} >
            <Text style={styles.buttonText}>{billText}</Text>
        </TouchableHighlight>
    </View>
)

export default BillBin