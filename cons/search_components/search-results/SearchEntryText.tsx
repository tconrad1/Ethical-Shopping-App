/* Search Entry Text so we can use it in multiple places */

import { useState } from 'react';
import * as React from 'react-native';
import { Text, View } from 'react-native';

import { Styles } from '../../Styles.js';


export default function SearchEntryText() {
    return (
        <View>
            <Text>
                <Text style={Styles.label}>Search Entry:      </Text>
                <Text style={Styles.tempText}>[text from search bar here]</Text>
            </Text>
        </View>
    );
  };