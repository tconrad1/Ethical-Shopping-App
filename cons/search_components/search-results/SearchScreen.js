import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import SearchBar from '../BeasSearchBar.js';
import News from '../News.js';
import { Styles } from './Styles';

export default function SearchScreen() {
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

