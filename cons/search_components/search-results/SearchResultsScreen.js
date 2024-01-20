//SearchResultsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

import Drumstick from './Companies/Nestle-Products/Drumstick';
import { Styles } from './Styles';

const SearchResultsScreen = (props) => {
  const { route, navigation } = props;
  const { searchEntry } = route.params;

  if (!searchEntry) {
    return (
      <View style = {Styles.searchResultsScreen}>
        <Text>Error: No search entry provided</Text>
      </View>
    );
  }

  const searchResults = getSearchResults(searchEntry);

  return (
    <View style = {Styles.searchResultsScreen}>
      <Text>Results for: {searchEntry}</Text>
      {searchResults.map((ResultComponent, index) => (
        <ResultComponent key={index} navigation={navigation} />
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
      Drumstick
    ];
  }

  return [];
};

export default SearchResultsScreen;
