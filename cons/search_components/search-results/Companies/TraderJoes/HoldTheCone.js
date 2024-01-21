// HoldTheCone.js
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { Styles } from '../../Styles';

const HoldTheCone = ({ navigation }) => {
    const handleProductPress = () => {
      navigation.navigate('TraderJoesInfoScreen', { product: 'HoldTheCone' });
    };

  return (
    <TouchableOpacity onPress={handleProductPress}>
      <View style={Styles.productAssembler}>
        <View style={Styles.productContainer}>
          <Image
            style={Styles.productImage}
            source={require('./Product-Images/HoldTheCone.png')}
          />
          <View style={Styles.productTextContainer}>
            <Text style={Styles.productTextHeaders}>
                Company:
            </Text>
            <Text style={Styles.productTextText}>
                Trader Joe's
            </Text>
            <Text style={Styles.productTextHeaders}>
                Rating:
            </Text>
            <Text style={Styles.productQuestionable}>
                Questionable
            </Text>
            <Text style={Styles.productTextText}>
              Tap to see more information 
              {"\n"}and alternatives
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HoldTheCone;
