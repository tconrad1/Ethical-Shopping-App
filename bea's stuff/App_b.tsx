//App_b.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from './z.cons/SearchBar';
import News from './z.cons/News';


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.background}>
            <View style={styles.topBar}>
              <SearchBar />
            </View>
              <News />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F8F0EC',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#2963AE',
    width: 450,
    height: 87,
  },
});
