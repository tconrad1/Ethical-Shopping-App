//SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  const navigation = useNavigation();

  const handleSearch = (searchEntry) => {
    navigation.navigate('SearchResults', { searchEntry });
  };

  return (
    <View style={styles.assembler}>
      <View style={styles.SearchBar}>
        <TextInput
          style={styles.Input}
          placeholder="Search cons"
          onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  assembler: {
    flexDirection: 'row',
  },
  SearchBar: {
    backgroundColor: '#FFF',
    width: 372,
    height: 45,
    borderWidth: 1,
    borderColor: '#FFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  Input: {
    marginLeft: 25,
  },
});
