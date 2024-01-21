//BeasSearchBar.js
import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  const navigation = useNavigation();
  const [searchEntry, setSearchEntry] = useState('');

  const handleSearch = () => {
    navigation.navigate('SearchResultsScreen',{ searchEntry });
  };

  return (
    <View style = {styles.searchBarContainer}>
    <View style = {styles.assembler}>
      <View style = {styles.SearchBar}>
        <TextInput
          style = {styles.Input}
          placeholder = "Search cons"
          value = {searchEntry}
          onChangeText = {(text) => setSearchEntry(text)}
        />
      </View>
      <TouchableOpacity 
        style = {styles.SearchButton}
        onPress = {handleSearch}
        >
        <Image 
          style = {styles.SearchIcon}
          source = {require('./Images/Search-Icon.png')} />
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#2963AE',
    width: 450,
    height: 87
  },
  assembler: {
    flexDirection: 'row',
    marginTop: 20
  },
  SearchBar: {
    backgroundColor: '#FFF',
    width: 320,
    height: 45,
    borderWidth: 1,
    borderColor: '#FFF',
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    marginLeft: 20,
  },
  Input: {
    marginLeft: 25,
    fontSize: 15
  },
  SearchButton: {
    backgroundColor: '#FFF',
    width: 52,
    height: 45,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
  },
  SearchIcon: {
    marginTop: 7,
    marginLeft: 10
  }
});
