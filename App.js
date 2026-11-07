import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Question from './components/Question';

export default function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const checkAnswers = () => {
    let score = 0;
    if (answer1 === 'Porsche 911') score++;
    if (answer2 === 'Toyota 2000GT') score++;
    if (answer3 === 'Volkswagen Beetle') score++;

    const total = 3;
    let message;
    if (score === total) {
      message = 'Perfect score! You really know your cars!';
    } else if (score >= 2) {
      message = 'Well done! Almost there.';
    } else if (score === 1) {
      message = 'Not bad, but you can do better next time.';
    } else {
      message = 'Better luck next time! Keep practising.';
    }

    Alert.alert(`You scored ${score}/${total}`, message);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="car-side" size={28} color="#1565C0" />
        <Text style={styles.title}>Car Quiz</Text>
      </View>
      <Question
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/2020-porsche-911-carrera-s-402-1578950942.jpg?crop=0.655xw:0.983xh;0.0737xw,0&resize=1200:*"
        options={['Porsche Cayman', 'Porsche 911', 'Audi R8', 'Nissan GT-R']}
        selectedValue={answer1}
        onChange={setAnswer1}
      />
      <Question
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGzDGdmKV3URhwfLGZ1Sb0e_9tg9JqJ3BUdH5Z758KA&s=10"
        options={['Nissan Fairlady Z', 'Mazda Cosmo', 'Toyota 2000GT', 'Jaguar E-Type']}
        selectedValue={answer2}
        onChange={setAnswer2}
      />
      <Question
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAEyR2778h0fJMmdoZQPXiinMkjIsTOVabAU7iXv5lw&s"
        options={['Fiat 500', 'Mini Cooper', 'Citroën 2CV', 'Volkswagen Beetle']}
        selectedValue={answer3}
        onChange={setAnswer3}
      />

      <View style={styles.button}>
        <Button title="Submit Answers" onPress={checkAnswers} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  button: {
    marginVertical: 20,
  },
  headerText: {
    color: '#757575',
    fontSize: 14,
    textAlign: 'center',
  },
});