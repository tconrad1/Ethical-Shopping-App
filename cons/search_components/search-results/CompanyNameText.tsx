/* Company Name Text so we can use it in multiple places */

import * as React from 'react-native';
import { Text, View } from 'react-native';

import { Styles } from '../../Styles.js';

export default function CompanyNameText () {
    return (
        <View>
            <Text>
                <Text style={Styles.label}>Company Name: </Text>
                <Text style={Styles.tempText}>[text from database here] </Text>
            </Text>
  
        </View>
    );
  }