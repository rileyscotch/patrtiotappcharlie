
import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, TouchableHighlight, TextInput, View } from 'react-native'

import styles from './styles'

const SenBin  = ({ onPress, senatorName, vote }) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{senatorName}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.buttonText}>{vote}</Text>
    </TouchableHighlight>
    </View>
)

export default SenBin