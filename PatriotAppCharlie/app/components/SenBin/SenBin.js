
import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, TouchableHighlight, TextInput, View } from 'react-native'

import styles from './styles'

const SenBin  = ({ onPress, senatorName, vote }) => (
    <View style={styles.container}>
        <Text style={styles.buttonText}>{senatorName}</Text>
        <Text style={styles.buttonText}>{vote}</Text>
    </View>
)

export default SenBin