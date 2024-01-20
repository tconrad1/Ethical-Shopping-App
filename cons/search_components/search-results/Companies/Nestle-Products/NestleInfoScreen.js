//NestleInfoScreen.js
import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../Styles';
import AltDrumstick from './Alternatives/AltDrumstick';
import AltKitKat from './Alternatives/AltKitKat';
import AltAero from './Alternatives/AltAero';
import AltAfterEight from './Alternatives/AltAfterEight';
import AltButterfinger from './Alternatives/AltButterfinger';
import AltGoobers from './Alternatives/AltGoobers';
import AltOhHenry from './Alternatives/AltOhHenry';
import AltRolo from './Alternatives/AltRolo';

const NestleInfoScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style = {Styles.infoScreenBG}>
      <View style = {Styles.infoContainer}>
        <View style = {Styles.infoTopBar}>
          <Text style = {Styles.infoBrand}>
            Nestle
          </Text>
          <Text style = {Styles.infoUnethical}>
            Unethical
          </Text>
        </View>
          <Text style = {Styles.infoText}>
          In 2021, Nestlé was sued by eight former child slaves for “aiding and abetting the illegal enslavement of thousands of children on cocoa farms in their supply chains.” Nestle’s unethical practices include child labor, unethical promotion, manipulating uneducated mothers, pollution, price fixing, and mislabeling. 
          </Text>
          <Text style = {Styles.productDecision}>
            It is advised to keep this company out of your basket!
          </Text>
          {product === 'Drumstick' && <AltDrumstick />}
          {product === 'KitKat' && <AltKitKat />}
          {product === 'Aero' && <AltAero />}
          {product === 'AfterEight' && <AltAfterEight />}
          {product === 'Butterfinger' && <AltButterfinger />}
          {product === 'Goobers' && <AltGoobers />}
          {product === 'OhHenry' && <AltOhHenry />}
          {product === 'Rolo' && <AltRolo />}
      </View>
    </View>
  );
};

export default NestleInfoScreen;