import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const companyArray = [['nestle', 'evil'], ['other', 'ok']];

export function MainInput() {
  const [company, setCompany] = useState('');
  let out = '';

  let i = 0;
  while (i < companyArray.length) {
    if (companyArray[i][0] === company) {
      out = company + ' ' + companyArray[i][1];
    }
    i += 1;
  }

  return (
    <View>
      <Text>Company/Product:</Text>
      <TextInput
        value={company}
        onChangeText={(text) => setCompany(text)}
      />
      {out !== '' && (
        <Text>
          Ethical Concerns: {out}
        </Text>
      )}
    </View>
  );
}

function App() {
  return (
    <View>
      <MainInput />
    </View>
  );
}

export default App;
