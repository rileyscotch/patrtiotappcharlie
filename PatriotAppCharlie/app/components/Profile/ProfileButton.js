import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, TouchableHighlight, TextInput, View } from 'react-native'

import styles from './styles'

const ProfileButton = ({ onPress, buttonText }) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
    </View>
)

export default ProfileButton