//SearchResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const productArray = [
{name: 'Drumstick', brand: 'nestle', component: Drumstick},
{name: 'KitKat', brand: 'nestle', component: KitKat},
{name: 'Aero', brand: 'nestle', component: Aero},
{name: 'After Eight', brand: 'nestle', component: AfterEight},
{name: 'Butterfinger', brand: 'nestle', component: Butterfinger},
{name: 'Goobers', brand: 'nestle', component: Goobers},
{name: 'OhHenry', brand: 'nestle', component: OhHenry},
{name: 'Rolo', brand: 'nestle', component: Rolo},
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
        <Text>Error: No search entry provided</Text>
      </View>
    );
  }

  const searchResults = getSearchResults(searchEntry);

  return (
    <View style = {Styles.searchResultsScreen}>
      <Text style = {Styles.searchResultsText}>Results for: {searchEntry}</Text>
        {searchResults.map((ResultComponent,index) => (<ResultComponent key = {index} navigation={navigation}/>)
        )}
    </View>
  );
};

const getSearchResults = (searchEntry) => {
  if (!searchEntry) {
    return [];
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
