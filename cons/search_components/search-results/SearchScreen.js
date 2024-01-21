//SearchScreen.js
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchBar from '../BeasSearchBar.js';
import SearchResultsScreen from './SearchResultsScreen.js';

import NestleInfoScreen from './Companies/Nestle-Products/NestleInfoScreen.js';
import TraderJoesInfoScreen from './Companies/TraderJoes/TraderJoesInfoScreen.js';

import News from '../News.js';
import { Styles } from './Styles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" options={{headerShown:false}} >
          {() => (
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView>
                <View style={Styles.searchBackground}>
                  <View style={Styles.searchTopBar}>
                    <View style={Styles.searchOtherBar}>
                      <SearchBar />
                    </View>
                  </View>
                  <News />
                </View>
              </ScrollView>
            </SafeAreaView>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="SearchResultsScreen" 
          component={SearchResultsScreen}
          options={({navigation}) => ({navigation}, {headerShown:false})
          }
        />
        <Stack.Screen name="NestleInfoScreen" component={NestleInfoScreen} />
        <Stack.Screen name="TraderJoesInfoScreen" component={TraderJoesInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
