import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    //Create a function that will count the 
  //word in a string without using any built in functions

  function countword(word){

    let parted= [""];
    let count = 0;
    for(let i = 0 ;i < word.length;i++){
      if(word[i]=== ' '){
        count ++;
        parted.push("")
      }
      else{
        parted[parted.length -1 ] = parted[parted.length - 1] + word[i];
      }
    }
    return count;
  }



  // console.log("Word  Count => " + countword("replace any words here \n") )


  return (
    <View style={styles.container}>
       <Text>The quick brown fox jumps over the lazy dogs</Text>
      <Text>Word Count: { countword('The quick brown fox jumps over the lazy dogs')}</Text>
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
