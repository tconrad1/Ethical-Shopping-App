//SearchResultsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { searchEntry } = route.params;

  if (!searchEntry) {
    return (
      <View>
        <Text>Error: No search entry provided</Text>
      </View>
    );
  }

  const searchResults = getSearchResults(searchEntry);

  return (
    <View>
      <Text>Results for: {searchEntry}</Text>
      {searchResults.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  );
};

const getSearchResults = (searchEntry) => {
  if (!searchEntry) {
    return [];
  }

  if (searchEntry.toLowerCase() === 'nestle') {
    return [
      'Result 1',
      'Result 2',
      'Result 3',
    ];
  }

  return [];
};

export default SearchResultsScreen;
