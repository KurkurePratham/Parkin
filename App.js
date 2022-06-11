import React, {useState} from 'react';
import { render } from 'react-dom';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image, Button } from 'react-native';
import ImagePicker from "react-native-image-picker";

export default function App() {

  state = {
    photo : null,

  };
  
  const [name,setName] = useState("")
  const [placeholder,setplaceholder] = useState("")

  const handleAddTask = () => {
    setName(placeholder)
    setTask(null);
    
  }

  const setTask = (str) => {
    setplaceholder(str)
  }

  const handleChoosephoto = () => {
    const options = { noData: true};
    ImagePicker.launchImageLibrary(options, response => {
     console.log("response" , response);
      if (response.uri) {
        this.setstate({photo : response});
      }
     })
  }

   return (
     <ScrollView style={styles.container}>
       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
       <View
         contentContainerStyle={{
           flexGrow: 1
         } }
         keyboardShouldPersistTaps='handled'
       >

       {/* Today's Tasks */}
       <View style={styles.tasksWrapper}>
         <Text style={styles.sectionTitle}>Parkin'</Text>
       </View>  
       </View>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
       <View 
        style={styles.writeTaskWrapper}
       >
         <TextInput style={styles.input} placeholder={'Name'} value={name} onChangeText={name => setTask(name)}/>
        
         </View>
       <TouchableOpacity onPress={() => handleAddTask()}>
         <View style={styles.addWrapper}>
           <Text style={styles.addText}>Submit</Text>
         </View>
       </TouchableOpacity>

       <View style={styles.addPhoto}>
         <Button  title = "choose Photo" onPress={this.handleChoosephoto}/>
       </View>
      
       
         <Text style={styles.output1}>{name}</Text>
       
      
     </ScrollView>
   );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  writeTaskWrapper: {
    marginTop : 50,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-around',
    
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 350,
    fontSize: 17,
  },
  addWrapper: {
    marginTop: 60,
    marginBottom: 30,
    marginLeft: 250,
    width: 120,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A00000',
    borderWidth: 5,
  },

  addPhoto: {
    alignItems : 'center',
    justifyContent : 'center',
  },

  addText: {
    fontSize: 17,
    
  },

  output1 : {fontSize: 20,
  },
});