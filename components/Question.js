import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ imageUrl, options, selectedValue, onChange }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={[styles.questionBar, styles.bordered]}>
        <Text style={styles.questionText}>What car is this?</Text>
      </View>

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
  card: {
    flexDirection: 'column',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    marginBottom: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 220,
    maxHeight: 220,
    resizeMode: 'cover',
  },
  questionBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    paddingVertical: 4,
    backgroundColor: '#4682B4',
  },
  bordered: {
    borderWidth: 2,
    borderColor: '#1F3A5F',
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Question;
