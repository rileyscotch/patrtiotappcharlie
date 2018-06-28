import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Test from './screens/Test';

EStyleSheet.build({
  $primaryBlue: '#a4b6c1',
  $white: '#ebead9',
  $red: '#940f15',
  $medBlue: '#2e598f',
  $navyBlue: '#0c2141',
  $democratBlue: '#44bdf3',
  $republicanRed: '	#d40000',

  outline: 1,

});

export default () => <Profile />;