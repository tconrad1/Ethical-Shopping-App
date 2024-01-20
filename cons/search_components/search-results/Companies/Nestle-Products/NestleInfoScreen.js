//NestleInfoScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const NestleInfoScreen = ({ route }) => {
  const { searchEntry } = route.params;

  return (
    <View>
      <Text>Information about: {searchEntry}</Text>
      {/* Add more information or components as needed */}
    </View>
  );
};

export default NestleInfoScreen;