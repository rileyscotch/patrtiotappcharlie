import React, { Component } from 'react'
import { Text, View } from 'react-native'

const getUrl = 'https://api.propublica.org/congress/v1/senate/votes/recent.json'
// const propublicaK = require(process.env.API_KEY) 
const options = {
    headers: new Headers({
        'X-API-Key': 'AF8fj6nmBqoyVcRzQ8OCDsRL7IMXQyXCoSDbbkF3'
    })
};

function billSummary({ results }) {
    const { vote } = results.votes
    const objectVote = {
        congressId: vote.congress,
        sessionId: vote.session,
        rollCallId: vote.roll_call,
        billId: vote.bill.bill_id,
        billDescription: vote.description,
        voteResult: vote.result,
        summary: voteSummary(vote)
    }
    console.log(objectVote)
    return objectVote
}

function voteSummary({
    positions
}) {
    return positions.reduce((summary, senator) => {
        //if statement to iterate over states meow
        if (!summary[senator.state]) {
            summary[senator.state] = {}
        }
        summary[senator.state][senator.name] = senator.vote_position
        // console.log(JSON.stringify(summary))
        return (summary)
    }, {})
}

class GetInfo extends Component {
    componentDidMount() {
        console.log('I WORK BITCHES')
        fetch(getUrl, options)
            .then(response => response.json())
            .then(data => {
                // console.warn('Data from API', response)
                console.log(data.results.votes[0].vote_uri)
                let freshUrl = data.results.votes[0].vote_uri
                fetch(freshUrl, options)
                    .then(response => response.json())
                    .then(data => billSummary(data)

                    )
                console.log(billSummary)
            })
            .catch(function (error) {
                console.log('ERROR BRAH ' + error)
                throw error
            })
    }
    render() {
        return ( 
            <View>
            <Text> Get That Info! </Text> 
            </View>
        )
    }
}

export default GetInfo