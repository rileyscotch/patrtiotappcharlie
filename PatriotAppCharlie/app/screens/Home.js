import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo'
import { ProfileButton } from '../components/Profile'

class Home extends Component {
    // handlePressProfile = () => {
    //     console.log("Log In Loser We're Going Voting")
    // }
    render() {
        return(
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <ProfileButton buttonText={'Sign Up'} onPress={this.handlePressProfile} />
        <ProfileButton buttonText={'Log In'} onPress={this.handlePressProfile} />

    </Container>
        )
    }
}

export default Home