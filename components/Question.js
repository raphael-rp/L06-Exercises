import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ imageUrl, options, selectedValue, onChange }) => {
  return (
    <View>
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
      />
      <Text style={styles.question}>What car is this?</Text>
      <Picker selectedValue={selectedValue} onValueChange={onChange}>
        <Picker.Item label="Select an item..." value="" />
        {options.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  question: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
    marginLeft: 8,
  },
});

export default Question;