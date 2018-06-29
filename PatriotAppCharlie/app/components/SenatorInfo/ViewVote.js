import React from 'react'
import { View, Text } from 'react-native'

const ViewVotes = ({ senators, votes }) => {
    return(
        <View>
            { senators.map(senator => { 
                return(
                    <Text>{ senator } { votes[senator] }</Text>
                )
             }) }
        </View>
    )
}

export default ViewVotes