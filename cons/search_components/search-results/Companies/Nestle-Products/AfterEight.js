// AfterEight.js
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { Styles } from '../../Styles';

const AfterEight = ({ navigation }) => {
    const handleProductPress = () => {
      navigation.navigate('NestleInfoScreen', { product: 'AfterEight' });
    };

  return (
    <TouchableOpacity onPress={handleProductPress}>
      <View style={Styles.productAssembler}>
        <View style={Styles.productContainer}>
          <Image
            style={Styles.productImage}
            source={require('./Product-Images/aftereight.jpg')}
          />
          <View style={Styles.productTextContainer}>
            <Text style={Styles.productTextHeaders}>
                Company:
            </Text>
            <Text style={Styles.productTextText}>
                Nestle
            </Text>
            <Text style={Styles.productTextHeaders}>
                Rating:
            </Text>
            <Text style={Styles.productUnethical}>
                Unethical
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

export default AfterEight;
