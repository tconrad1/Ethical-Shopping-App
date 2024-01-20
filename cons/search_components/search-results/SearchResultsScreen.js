//SearchResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Drumstick from './Companies/Nestle-Products/Drumstick';
import KitKat from './Companies/Nestle-Products/KitKat'
import Aero from './Companies/Nestle-Products/Aero'
import AfterEight from './Companies/Nestle-Products/AfterEight';
import Butterfinger from './Companies/Nestle-Products/Butterfinger';
import Goobers from './Companies/Nestle-Products/Goobers';
import OhHenry from './Companies/Nestle-Products/OhHenry';
import Rolo from './Companies/Nestle-Products/Rolo';
import { Styles } from './Styles';
import equalish from '../TomSearchBar';
import SearchBar from '../BeasSearchBar';

const productArray = [
{name: 'Aero', brand: 'nestle', category: 'candy', component: Aero},
{name: 'After Eight', brand: 'nestle', category: 'candy', component: AfterEight},
{name: 'Butterfinger', brand: 'nestle', category: 'candy', component: Butterfinger},
{name: 'Drumstick', brand: 'nestle', category: 'ice cream', component: Drumstick},
{name: 'Goobers', brand: 'nestle', category: 'candy', component: Goobers},
{name: 'KitKat', brand: 'nestle', category: 'candy', component: KitKat},
{name: 'OhHenry', brand: 'nestle', category: 'candy', component: OhHenry},
{name: 'Rolo', brand: 'nestle', category: 'candy', component: Rolo},
]

// ['After Eight','nestle','After Eight.js'], 
// ['Butterfinger','nestle','Butterfinger.js'],
// ['Cailler','nestle','Cailler.js'],
// ['CoffeeCrisp','nestle','CoffeeCrisp.js'],
// ['Crunch','nestle','Crunch.js'],
// ['Toll House','nestle','Toll-House.js'],
// ['Orion','nestle','Orion.js'],
// ['Smarties','nestle','Smarties.js'],
// ['Turtles','nestle','Turtles.js'],
// ['Oh Henry!','nestle','Oh-Henry.js'],
// ['Goobers','nestle','Goobers.js'],
// ['Rolo','nestle','Rolo.js']



const SearchResultsScreen = (props) => {
  const { route, navigation } = props;
  const { searchEntry } = route.params;

  if (!searchEntry) {
    return (
        <View style = {Styles.searchResultsScreen}>
          <SearchBar />
          <Text style={Styles.searchResultsText}>Error: No search entry provided</Text>
        </View>
    );
  }

  const searchResults = getSearchResults(searchEntry);

  return (
    <SafeAreaView style={Styles.searchResultsScreen}>
    <ScrollView>
      <View >
        <SearchBar />
        <Text style={Styles.searchResultsText}>Results for: {searchEntry}</Text>
        {searchResults.map((ResultComponent, index) => (
          <ResultComponent key={index} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const getSearchResults = (searchEntry) => {
  if (!searchEntry) {
    return [];
  }

  if (searchEntry.toLowerCase() === 'nestle') {
    return productArray.map((product) => product.component);
  }

  if (searchEntry.toLowerCase() === 'candy') {
    const candyProducts = productArray.filter((product) => product.category === 'candy').map((product) => product.component);
    return candyProducts;
  }

  if (searchEntry.toLowerCase() === 'ice cream') {
    const iceCreamProducts = productArray.filter((product) => product.category === 'ice cream').map((product) => product.component);
    return iceCreamProducts;
  }

 let i = 0;
    while (i < productArray.length) {
      if ((productArray[i].name.toLowerCase() === searchEntry.toLowerCase() || equalish(productArray[i].name,searchEntry))){
        return [productArray[i].component];
        break;
      }
      i += 1;
    }

  return [];
};

export default SearchResultsScreen;
