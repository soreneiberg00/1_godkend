import React, { useState } from 'react';
import { View, Picker } from 'react-native';

import { PriceRanges } from '../const';

const PriceDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(PriceRanges[0]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {PriceRanges.map((PriceRanges, index) => (
          <Picker.Item label={PriceRanges} value={PriceRanges} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default PriceDropdown;
