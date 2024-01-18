/* This is what will be on the Unethical Information Screen */

import { useState } from 'react';
import * as React from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Styles } from '../../Styles.js';
import SearchEntryText from './SearchEntryText';
import CompanyNameText from './CompanyNameText';
import MainInput from '../MainInput';

type RootStackParamList = {
    Ethical: undefined;
    Unethical: undefined;
    Error: undefined;
  };

type UnethicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Unethical'>;

export default function UnethicalScreen({ navigation }: { navigation: UnethicalScreenNavigationProp }) {
    return (
      <View style={Styles.flexContainer}>
        <SearchEntryText/>
        <CompanyNameText/>
        
        
        <Text> {'\n'}{'\n'}{'\n'} </Text>
        <Text>
          <Text style={Styles.label}>Sadly, </Text>
          <Text style={Styles.tempText}>[company name]</Text>
          <Text style={Styles.label}> has a record of child labor! </Text>
        </Text>
   
        <Text style={Styles.smallText}>Try looking for an alternative from another brand. </Text>
        <Text> {'\n'}{'\n'} </Text>
  
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() =>
            navigation.navigate('Ethical')
          }
        >
          <Text style={Styles.buttonText}>go to Ethical Info</Text>
        </TouchableOpacity>
  
        <View>
          <MainInput />
        </View>
  
      </View>
    );
  
  };