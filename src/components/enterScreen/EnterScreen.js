import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const EnterScreen = () => {
  const started = () => {
    console.log('get started');
  };
  return (
    <ScrollView style={styles.container}>
      <Text>lgfsdg</Text>
      {/*<View style={styles.backgroundWrapper}>*/}
      {/*  <Image*/}
      {/*    style={styles.startBackground}*/}
      {/*    source={require('../../assets/enterScreenBackground.png')}*/}
      {/*  />*/}
      {/*</View>*/}
      {/*<View style={styles.buttonWrapper}>*/}
      {/*  <TouchableOpacity style={styles.button} onPress={started}>*/}
      {/*    <Text style={styles.buttonText}>Get Started</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </ScrollView>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // backgroundWrapper: {
  //   top: -height * 0.65,
  //   left: -width * 0.26,
  // },
  // startBackground: {
  //   backgroundColor: 'gold',
  //
  //   width: width * 1.5,
  //   resizeMode: 'contain',
  // },
  // button: {},
  // buttonWrapper: {},
});

export default EnterScreen;
