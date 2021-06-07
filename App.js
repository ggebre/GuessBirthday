import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const set1 = "  1  3  5  7\n" +
"  9 11 13 15\n" +
" 17 19 21 23\n" + 
" 25 27 29 31";
const set2 = "  2  3  6  7\n" +
" 10 11 14 15\n" +
" 18 19 22 23\n" + 
" 26 27 30 31";
const set3 = "  4  5  6  7\n" +
" 12 13 14 15\n" +
" 20 21 22 23\n" + 
" 28 29 30 31";
const set4 = "  8  9 10 11\n" +
" 12 13 14 15\n" +
" 24 25 26 27\n" + 
" 28 29 30 31";
const set5 = " 16 17 18 19\n" +
" 20 21 22 23\n" +
" 24 25 26 27\n" + 
" 28 29 30 31";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{set1}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
