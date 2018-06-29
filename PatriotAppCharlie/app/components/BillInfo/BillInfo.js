import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'


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
        billId: vote.bill.number,
        billDescription: vote.description,
        voteResult: vote.result,
        summary: voteSummary(vote)
    }
    console.log('Log 0', objectVote.summary.CO)
    console.log('Log 1', objectVote)
    return objectVote
}

function voteSummary({
    positions
}) {
    return positions.reduce((summary, senator) => {
        if (!summary[senator.state]) {
            summary[senator.state] = {}
        }
        summary[senator.state][senator.name] = senator.vote_position
        return (summary)
    }, {})
}

class BillInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { summary: {} }
        }
    }
    componentDidMount() {
        console.log('I WORK BITCHES')
        // this.props.setSenators()
        fetch(getUrl, options)
            .then(response => response.json())
            .then(data => {
                console.log(data.results.votes[0].vote_uri)
                let freshUrl = data.results.votes[0].vote_uri
                return fetch(freshUrl, options)
                    .then(response => response.json())
                    .then(data => this.setState({data: billSummary(data)})
                    )
            })
            .catch(function (error) {
                console.log('ERROR BRAH ' + error)
                throw error
            })
    }
    // setSenators = () => {this.props.setSenators()}
    
    render() {
        return ( 
            <View style={styles.containerBill}>
            <Text style={styles.nameText}>{this.state.data.billId}</Text> 
            <Text style={styles.summaryText}>{this.state.data.billDescription}</Text>
            <Text style={styles.resultText}>{this.state.data.voteResult}</Text>
            </View>
        )
    }
}

export default BillInfo