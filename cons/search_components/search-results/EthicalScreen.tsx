/* This is what will be on the Ethical Information Screen */

import { useState } from 'react';
import * as React from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Styles } from '../../Styles.js';
import SearchEntryText from './SearchEntryText';
import CompanyNameText from './CompanyNameText';

type RootStackParamList = {
    Ethical: undefined;
    Unethical: undefined;
    Error: undefined;
  };
  
type EthicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ethical'>;

export default function EthicalScreen({ navigation }: { navigation: EthicalScreenNavigationProp }) {
    return (
      <View style={Styles.flexContainer}>
        <SearchEntryText/>
        <CompanyNameText/>
        
        <Text> {'\n'} </Text>
        <Text>
          <Text style={Styles.tempText}>[company name]</Text>
          <Text style={Styles.label}> has no record of child labor! </Text>
        </Text>
        
        <Text style={Styles.smallText}> Happy Ethical Shopping! </Text>
        <Text> :) </Text>
        <Text> {'\n'}</Text>
  
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() =>
            navigation.navigate('Unethical')
          }
        >
          <Text style={Styles.buttonText}>go to Unethical Info</Text>
  
        </TouchableOpacity>
      </View>
  
    );
  };