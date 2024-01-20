//AltRolo.js
import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../Styles';

const AltRolo = ({ navigation }) => {

  return (
    <View style = {Styles.altContainer}>
      <Text style = {Styles.altHeader}>
        Nestle's Rolo
        {"\n"}Alternatives:
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 3, backgroundColor: '#F8F0EC'}} />
      </View>
      <Text style = {Styles.altText}>
        -See's Milk Chocolate Caramel
        {"\n"}-Your Store's Brand
      </Text>
    </View>
  );
};

export default AltRolo;