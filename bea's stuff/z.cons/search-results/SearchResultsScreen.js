//SearchResultsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { searchEntry } = route.params;

  return (
    <View>
      <Text>Search Results for: {searchEntry}</Text>
      <Text>Results</Text>
    </View>
  );
};

export default SearchResultsScreen;