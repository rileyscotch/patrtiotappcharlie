import React from 'react'
import { View, Text } from 'react-native'

const ViewVote = ({ senators, votes }) => {
    console.log('Log Z', senators, votes)
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

export default ViewVote