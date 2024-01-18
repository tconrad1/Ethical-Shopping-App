import { useState } from 'react';
import * as React from 'react-native';

import {Text, View, TouchableOpacity, TextInput} from 'react-native';

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SearchScreen } from './search_components/search-results/SearchScreen.js';
import UnethicalScreen from './search_components/search-results/UnethicalScreen';
import EthicalScreen from './search_components/search-results/EthicalScreen';
import ErrorScreen from './search_components/search-results/ErrorScreen';
import SearchEntryText from './search_components/search-results/SearchEntryText';
import CompanyNameText from './search_components/search-results/CompanyNameText';
import equalish from './search_components/TomSearchBar';
import MainInput from './search_components/MainInput';

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


