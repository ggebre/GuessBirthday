import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView , FlatList} from 'react-native';
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
const sets =[set1, set2, set3, set4, set5]
const widthProportion = '25%'
export default function App() {
  const [chosenSet, changeSet] = useState(0)
  const [birthdate, setBirthdate] = useState(0)
  const handlePress = (title) => {
    let setsLength = sets.length 

    if(title){
      setBirthdate(birthdate + 2**chosenSet)
    }
    changeSet(chosenSet + 1)
    if(chosenSet === setsLength) {
      changeSet(0)
      setBirthdate(0)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      { chosenSet < 5 
            ?
        <View>
          <View style={styles.wrapper}>
      
      { 
        sets[chosenSet].match(/\d+/g).map(day => <Text key={day} style={styles.dates}>{day}</Text>)
      }
          </View>

          
          <Text style={{fontSize: 18, textAlign: 'center', marginBottom: 15}}>Is your birth day found in this set of numbers?</Text>
          

          <View style={styles.wrapper}> 
            <Button title={"Yes"} onPress={() => handlePress(1)} />
            <Button title={"No"} onPress={() => handlePress(0)} />
          </View>
        </View>
            :
        <View>
          <Text style={{fontSize: 40}}>{birthdate}</Text>
          <Button title={"Replay"} onPress={() => handlePress(0)}/>
        </View>
      
      }
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center'
  },
  dates: {
    width: widthProportion,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20
  }
});






