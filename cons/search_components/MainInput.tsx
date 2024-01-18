// input and functionality for search bar 

import { useState } from 'react';
import * as React from 'react-native';
import { Text, View, TextInput } from 'react-native';

import { Styles } from '../Styles.js';
import equalish from './TomSearchBar';

const companyArray = [['nestle', 'evil'], ['other', 'ok']];

export default function MainInput() {
    const [company, setCompany] = useState('');
    let out = '';
  
    let i = 0;
    while (i < companyArray.length) {
      if ((companyArray[i][0] === company) || equalish(companyArray[i][0],company)){
        out = companyArray[i][0] + ' ' + companyArray[i][1];
        break;
      }
      i += 1;
    }
  
    return (
      <View>
        <Text style={Styles.smallText}>Company/Product:</Text>
        <TextInput
          style={{backgroundColor: 'green'}}
          value={company}
          onChangeText={(text) => setCompany(text)}
        />
        {out !== '' && (
          <Text style={Styles.smallText}>
            Ethical Concerns: {out}
          </Text>
        )}
      </View>
    );
  }