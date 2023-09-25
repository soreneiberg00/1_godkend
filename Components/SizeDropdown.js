import React, { useState } from 'react';
import { View, Picker } from 'react-native';

import { Size } from '../const';

const SizeDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(Size[0]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {Size.map((Size, index) => (
          <Picker.Item label={Size} value={Size} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default SizeDropdown;
