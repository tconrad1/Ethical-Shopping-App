import { useState } from 'react';
import * as React from 'react-native'

import {Text, View, TouchableOpacity, TextInput} from 'react-native'
import {textS} from './Styles.js'

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
//2D array used to display text
const companyArray = [['nestle', 'evil'], ['other', 'ok']];

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Ethical: undefined;
  Unethical: undefined;
};
type EthicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Unethical'>;

type EthicalScreenRouteProp = RouteProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenRouteProp = RouteProp<RootStackParamList, 'Unethical'>;

/* This is the actual stuff that is appearing on the screen lol*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Ethical"
          component={EthicalScreen}
          options={{title: 'Ethical'}}
        />
        <Stack.Screen name="Unethical" component={UnethicalScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

/* This is what will be on the Unethical Information Screen */
function UnethicalScreen({ navigation }: { navigation: UnethicalScreenNavigationProp }) {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#FAF5F3'}}>
      <SearchEntryText/>
      <CompanyNameText/>
      
      
      <Text> {'\n'}{'\n'}{'\n'} </Text>
      <Text>
        <Text style={textS.label}>Sadly, </Text>
        <Text style={textS.tempText}>[company name]</Text>
        <Text style={textS.label}> has a record of child labor! </Text>
      </Text>
 
      <Text style={textS.smallText}>Try looking for an alternative from another brand. </Text>
      <Text> {'\n'}{'\n'} </Text>

      <TouchableOpacity
        style={textS.buttonStyle}
        onPress={() =>
          navigation.navigate('Ethical')
        }
      >
        <Text style={textS.buttonText}>go to Ethical Info</Text>
      </TouchableOpacity>

      <View>
        <MainInput />
      </View>

    </View>
  );

};

/* This is what will be on the Ethical Information Screen */
function EthicalScreen({ navigation }: { navigation: EthicalScreenNavigationProp }) {
  return (
    <View style={{alignItems: 'center', backgroundColor: '#FAF5F3'}}>
      <SearchEntryText/>
      <CompanyNameText/>
      
      <Text> {'\n'} </Text>
      <Text>
        <Text style={textS.tempText}>[company name]</Text>
        <Text style={textS.label}> has no record of child labor! </Text>
      </Text>
      
      <Text style={textS.smallText}> Happy Ethical Shopping! </Text>
      <Text> :) </Text>
      <Text> {'\n'}</Text>

      <TouchableOpacity
        style={textS.buttonStyle}
        onPress={() =>
          navigation.navigate('Unethical')
        }
      >
        <Text style={textS.buttonText}>go to Unethical Info</Text>

      </TouchableOpacity>
    </View>
  );
};

/* Search Entry Text so we can use it in multiple places */
export const SearchEntryText = () => {
  return (
      <View>
          <Text>
              <Text style={textS.label}>Search Entry:      </Text>
              <Text style={textS.tempText}>[text from search bar here]</Text>
          </Text>
      </View>
  );
};

/* Company Name Text so we can use it in multiple places */
export const CompanyNameText = () => {
  return (
      <View>
          <Text>
              <Text style={textS.label}>Company Name: </Text>
              <Text style={textS.tempText}>[text from database here] </Text>
          </Text>

      </View>
  );
}

/* TOMS CODE FOR SEARCH BAR LOL */
function equalish(input: string,  against: string){
  if(against.length > 3 && input.indexOf(against) != -1){
    return true;
  }
  return false;
}
// input and functionality for search bar 
export function MainInput() {
  const [company, setCompany] = useState('');
  let out = '';

  let i = 0;
  while (i < companyArray.length) {
    if ((companyArray[i][0] === company) || equalish(companyArray[i][0],company)){
      out = companyArray[i][0] + ' ' + companyArray[i][1];
      break;
    }
    i += 1;
  }

  return (
    <View>
      <Text style={textS.smallText}>Company/Product:</Text>
      <TextInput
        style={{backgroundColor: 'green'}}
        value={company}
        onChangeText={(text) => setCompany(text)}
      />
      {out !== '' && (
        <Text style={textS.smallText}>
          Ethical Concerns: {out}
        </Text>
      )}
    </View>
  );
}

