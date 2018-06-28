import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo'
import { ProfileButton } from '../components/Profile'
import { BillInfo } from '../components/BillInfo'

class Test extends Component {

    render() {
        return(
    <Container>
            <BillInfo />

    </Container>
        )
    }
}

export default Test