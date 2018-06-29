import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo'
import { ProfileButton } from '../components/Profile'
import { BillInfo } from '../components/BillInfo'
import { StatePicker } from '../components/StatePicker'
import { SenBin } from '../components/SenBin';
import SenatorInfo from '../components/SenatorInfo/SenatorInfo';

class Test extends Component {

    render() {
        return(
    <Container>
            <SenatorInfo />
    </Container>
        )
    }
}

export default Test