//AltAero.js
import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../Styles';

const AltAero = ({ navigation }) => {

  return (
    <View style = {Styles.altContainer}>
      <Text style = {Styles.altHeader}>
        Nestle's Aero
        {"\n"}Alternatives:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 3, backgroundColor: '#F8F0EC'}} />
      </View>
      <Text style = {Styles.altText}>
        -Tony's Chocolonely Chocolate Bar
        {"\n"}-Your Store's Brand
      </Text>
    </View>
  );
};

export default AltAero;