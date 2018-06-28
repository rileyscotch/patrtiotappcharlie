import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo'
import { BillBin } from '../components/BillBin'
import { SenBin } from '../components/SenBin'
import { BillInfo } from '../components/BillInfo';

class Profile extends Component {

    render() {
        return(
    <Container>
        <SenBin senatorName={'Senator 1'} vote={'Yes'} />
        <SenBin senatorName={'Senator 2'} vote={'No'}/>
        <BillBin billText={'Bill Summary'} billResult={'Failed'} />
        <BillInfo />   
    </Container>
        )
    }
}

export default Profile