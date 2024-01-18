import { useState } from 'react';
import * as React from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Styles } from '../../Styles.js';

type RootStackParamList = {
    Ethical: undefined;
    Unethical: undefined;
    Error: undefined;
  };

type ErrorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Error'>;

export default function ErrorScreen ({ navigation }: { navigation: ErrorScreenNavigationProp }) {
    return (
      <View style={Styles.flexContainer}>
        
        <Text style={Styles.errorText} >
          {'\n'}ERROR: YOUR SEARCH INQUIRY WAS NOT FOUND IN OUR DATABASE{'\n'}
        </Text>
        <Text style={Styles.label}>
          {'\n'}Please try another inquiry :)
        </Text>
  
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() =>
            navigation.navigate('Ethical')
          }
        >
          <Text style={Styles.buttonText}>go to Ethical Info</Text>
        </TouchableOpacity>
        
      </View>
    );
  }