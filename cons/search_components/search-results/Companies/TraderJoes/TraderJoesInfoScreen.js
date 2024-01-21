//TraderJoesInfoScreen.js
import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../Styles';
import AltGeneric from './Alternatives/AltGeneric';

const TraderJoesInfoScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style = {Styles.infoScreenBG}>
      <View style = {Styles.infoContainer}>
        <View style = {Styles.infoTopBar}>
          <Text style = {Styles.infoBrand}>
            Trader Joe's
          </Text>
          <Text style = {Styles.infoQuestionable}>
            Questionable
          </Text>
        </View>
          <Text style = {Styles.infoText}>
          There have not been legal cases of child labor in Trader Joe's chocolates but the company has very little transparency of labor practices within their cocoa supply chain. This company is a better choice than others, but not quite the best—seek better alternatives if you can.
          {"\n"}{"\n"}
          </Text>
          <Text style = {Styles.productDecision}>
            It is advised to keep this company out of your basket!
          </Text>
          {product === 'HoldTheCone' && <AltGeneric />}
      </View>
    </View>
  );
};

export default TraderJoesInfoScreen;