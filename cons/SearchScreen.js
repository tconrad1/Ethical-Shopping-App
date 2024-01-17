import React from 'react';
import { View,SafeAreaView, ScrollView } from 'react-native';
import SearchBar from './search_components/SearchBar';
import News from './search_components/News';
import { Styles } from './Styles';


export function SearchScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.searchBackground}>
          <View style={Styles.searchTopBar}>
            <SearchBar />
          </View>
            <News />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

