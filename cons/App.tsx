import { useState } from 'react';
import * as React from 'react-native';

import {Text, View, TouchableOpacity} from 'react-native';

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {Styles} from './Styles.js';
import SearchScreen  from './search_components/search-results/SearchScreen.js';
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
  Start: undefined;
  MainScreen: undefined;
  Search: undefined;
};

type EthicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Unethical'>;
type ErrorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Error'>;
type StartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Start'>;
type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainScreen'>;
type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

type MainScreenRouteProp = RouteProp<RootStackParamList,'MainScreen'>;
type EthicalScreenRouteProp = RouteProp<RootStackParamList, 'Ethical'>;
type UnethicalScreenRouteProp = RouteProp<RootStackParamList, 'Unethical'>;
type ErrorScreenRouteProp = RouteProp<RootStackParamList, 'Error'>;

/* This is the actual stuff that is appearing on the screen lol*/
export default function App(this: any) {
  /* we can use ternary operator to switch screens depending on values 
      so basically what it has now except instead of string literals as parameters 
      the params will be the search entry and the thing from the array */

      /*I was confused about why we were always showing search so I added buttons for moving around instead, if you have a different plan
      thats all cool too*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Start" component={StartScreen} options={{headerShown:false}} />
        <Stack.Screen name = "MainScreen" component = {MainScreen} options={{title: "Search A Brand Name"}}/>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Ethical" component={EthicalScreen} />

        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="Unethical" component={UnethicalScreen}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function StartScreen({navigation}: {navigation :StartScreenNavigationProp}){
  return (
    <View style = {Styles.startContainer}>
       
      <View style={Styles.titleBox}>
        <Text style={Styles.textAlign}>
          <Text style ={Styles.appTitle} >Cons</Text>
          <Text style={Styles.label}> {' '} for Consumption {'\n'}</Text>
        </Text>
      </View>
        
      <WelcomeText/>
      <Text style= {Styles.label} >
        

        {'\n'}
        {'\n'}
        {'\n'}
        <Text> Your App for Ethical Consumption</Text>
      </Text>

      
      
      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={() =>
          navigation.navigate('Search')
        }
      >
        <Text style={Styles.buttonText}>Product Info</Text>
      </TouchableOpacity>
    </View>
  );
};

function MainScreen({ navigation }: { navigation: MainScreenNavigationProp }) {
  return (
    <View style={Styles.flexContainer}>
    
      
      
      <Text> {'\n'}{'\n'}{'\n'} </Text>
     
 
     
      <Text> {'\n'}{'\n'} </Text>

      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={() =>
          navigation.navigate("Search")
        }
      >
        <Text style={Styles.buttonText}>Recent News</Text>
      </TouchableOpacity>

      <View>
        <MainInput />
      </View>

    </View>
  );

};

export const WelcomeText = () => {
  return (
    <View>
      <Text style={Styles.smallText}> An App by group 2 </Text>
    </View>
  )};



