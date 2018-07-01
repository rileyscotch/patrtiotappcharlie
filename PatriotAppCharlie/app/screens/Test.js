import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo'
import { ProfileButton } from '../components/Profile'
import { BillInfo } from '../components/BillInfo'
import { StatePicker } from '../components/StatePicker'
import SenatorInfo from '../components/SenatorInfo/SenatorInfo';
import ViewVote from '../components/SenatorInfo/ViewVote'

class Test extends Component {
    state = { userState: 'AK' }
    updateUserState = (chosenState) => {
      this.setState({ userState: chosenState })
       
      
 }    
 render() {
        // console.log(this.state.userState)
        return(
    <Container>
            <BillInfo />
            <SenatorInfo currentState={this.state.userState} />
            <StatePicker currentState={this.state.userState} updateUserState={this.updateUserState} />
    </Container>
        )
    }
}

export default Test