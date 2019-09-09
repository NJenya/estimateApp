import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import logo from '../../assets/Estimate_My_App.png';

let SignIn = props => {
  const {updateEmailText, updatePasswordText} = props;
  const setEmail = email => updateEmailText(email);
  const setPassword = password => updatePasswordText(password);
  const signIn = () => {
    console.log('sign in');
  };
  const {email, password} = props;
  return (
    <ScrollView>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/Estimate_My_App.png')}
        />
      </View>
      <View style={styles.signInWrapper}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  logoWrapper: {
    alignSelf: 'center',
    height: height * 0.38,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.65,
    resizeMode: 'contain',
  },
  signInWrapper: {
    alignSelf: 'center',
    height: height * 0.45,
    width: width * 0.65,
  },
  text: {
    marginTop: 30,
    color: '#7d7d7d',
  },
  input: {
    borderBottomColor: '#c6c6c6',
    borderBottomWidth: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.4,
    height: height * 0.08,
    borderRadius: 37,
    borderColor: '#f3d56e',
    borderWidth: 1,
    marginBottom: 50,
  },
  buttonText: {},
});

export default SignIn;
