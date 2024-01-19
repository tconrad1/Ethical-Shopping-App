//SearchScreen.js
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchBar from '../BeasSearchBar.js';
import SearchResultsScreen from './SearchResultsScreen.js';
import News from '../News.js';
import { Styles } from './Styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen">
          {() => (
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView>
                <View style={Styles.searchBackground}>
                  <View style={Styles.searchTopBar}>
                    <SearchBar />
                  </View>
                  <News />
                </View>
              </ScrollView>
            </SafeAreaView>
          )}
        </Stack.Screen>
        <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
        {/* Add other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
