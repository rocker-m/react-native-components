import React,  {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, 
  TextInput, StatusBar, Button, Alert,ImageBackground, Image } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const App = () => {

 const [name, setName] = useState("melih");
const[text,setText] =useState("write somethingsds");
  return (
    <View style={styles.container}>      
        <Text>My name is...</Text>
        <Text>{name}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button title="Press me" onPress={() => {
Alert.alert('Simple Button pressed'); setName("eren");
        } }/>
      </View>
  );
};

const styles ={
  container: {
    flex:1,
    backgroundColor:'#ff2',
    alignItems:'center',
    justifyContent:'center'
  }
}
export default App;

