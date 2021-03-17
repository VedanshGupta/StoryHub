import React from 'react';
import { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config';

export default class WriteStory extends Component{
  constructor(){
    super();
    this.state={
      author: '',
      story: '',
      title: '',
    }
  }

  submitStory=async()=>{
      var submitMessage = null;
      db.collection("books").doc(this.state.scannedBookId).get().then((doc)=>{
        db.collection("Stroies").add({
          'Author' : this.state.author,
          'Story' : this.state.story,
          'Title' : this.state.title,
        })
      });
      alert("Story Submitted!!")
    }

	render(){
		return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
  			<View>
  				<Header
  		          backgroundColor={'#9c8210'}
  		          centerComponent={{
  		            text: 'Write Your Story',
  		            style: { color: '#fff', fontSize: 20 },
  		          }}
  		        />

  		        <TextInput 
  	              style={styles.inputBox}
  	              placeholder="Title"
                  value={this.state.title}
                  />
                  <TextInput 
  	              style={styles.inputBox}
  	              placeholder="Author"
                  value={this.state.author}
                  />
                  <TextInput 
  	              style={styles.inputBox}
  	              placeholder="Story"
                  value={this.state.story}
  	              multiline
                  />
                  <TouchableOpacity style={styles.submitButton}>
                  	<Text style={styles.submitButtonText} onPress={this.submitStory}>Submit</Text>
                  </TouchableOpacity>
  			</View>
      </KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
      backgroundColor: 'orange',
      width: 100,
      height: 50
    },
    submitButtonText:{
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      color: 'white'
    },
  });