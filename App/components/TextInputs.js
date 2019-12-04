import React,  {useState} from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';

const TextInputs = () => {

 const [name, setName] = useState("melih");
const[age,setAge] =useState(24);
  return (
    <View style={styles.container}>      
        <Text>Enter name </Text>
        <TextInput 
        multiline
        style={styles.textInput} 
        placeholder="Type your name" 
        onChangeText={(text) => setName(text)} 
        />
        
        <Text>Enter age </Text>
        <TextInput
        keyboardType="numeric"  
        style={styles.textInput} 
        placeholder="Type your age" 
        onChangeText={(age) => setAge(age)} 
        />
<Text>{name} is {age} years old.</Text>

      </View>
  );
};

const styles ={
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  textInput:{
      borderWidth:1,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:200
  }
}
export default TextInputs;

