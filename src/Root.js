import React from 'react';
import {View, Text} from 'react-native';
import SignInContainer from './components/auth/SignInContainer';
import EnterScreen from './components/enterScreen/EnterScreen';

const Root = () => {
  return (
    <View>
      <SignInContainer />
      {/*<EnterScreen />*/}
    </View>
  );
};

export default Root;
