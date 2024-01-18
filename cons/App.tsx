import { useState } from 'react';
import * as React from 'react-native';

import {Text, View, TouchableOpacity, TextInput} from 'react-native';

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {Styles} from './Styles.js';
import {SearchScreen} from './SearchScreen.js';

// /* NAMED CONSTANTS FOR COMPANIES */ map experiment in progress :D
// var NESTLE  = 1;
// var OTHER = 2;

// const companyMap = new Map();

// // nestle will be key 1 and other will be key 2
// companyMap.set('chocolate', NESTLE);
// companyMap.set('other', OTHER);


//2D array used to display text
const companyArray = [['nestle', 'evil'], ['other', 'ok']];


const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Ethical: undefined;
  Unethical: undefined;
  Error: undefined;
};

type EthicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Unethical'>;
type ErrorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Error'>;

type EthicalScreenRouteProp = RouteProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenRouteProp = RouteProp<RootStackParamList, 'Unethical'>;
type ErrorScreenRouteProp = RouteProp<RootStackParamList, 'Error'>;

/* This is the actual stuff that is appearing on the screen lol*/
export default function App(this: any) {
  /* we can use ternary operator to switch screens depending on values 
      so basically what it has now except instead of string literals as parameters 
      the params will be the search entry and the thing from the array */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { equalish("or", "other") ?  
          <Stack.Screen name="Search" component={SearchScreen} /> : 
          <Stack.Screen name="Ethical" component={EthicalScreen}/>}

        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="Unethical" component={UnethicalScreen}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* This is what will be on the Unethical Information Screen */
function UnethicalScreen({ navigation }: { navigation: UnethicalScreenNavigationProp }) {
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

/* This is what will be on the Ethical Information Screen */
function EthicalScreen({ navigation }: { navigation: EthicalScreenNavigationProp }) {
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

function ErrorScreen ({ navigation }: { navigation: ErrorScreenNavigationProp }) {
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

/* Search Entry Text so we can use it in multiple places */
export const SearchEntryText = () => {
  return (
      <View>
          <Text>
              <Text style={Styles.label}>Search Entry:      </Text>
              <Text style={Styles.tempText}>[text from search bar here]</Text>
          </Text>
      </View>
  );
};

/* Company Name Text so we can use it in multiple places */
export const CompanyNameText = () => {
  return (
      <View>
          <Text>
              <Text style={Styles.label}>Company Name: </Text>
              <Text style={Styles.tempText}>[text from database here] </Text>
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
      <Text style={Styles.smallText}>Company/Product:</Text>
      <TextInput
        style={{backgroundColor: 'green'}}
        value={company}
        onChangeText={(text) => setCompany(text)}
      />
      {out !== '' && (
        <Text style={Styles.smallText}>
          Ethical Concerns: {out}
        </Text>
      )}
    </View>
  );
}

