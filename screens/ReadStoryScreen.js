import React from 'react';
import { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import db from "../config.js";

export default class ReadStory extends Component{
	constructor(){
		super();
		this.state={
			storyName: '',
		}
	}

	retriveStories=async()=>{
		const allStories = await db.collection("Stroies").get();
		allStories.docs.map(doc => {
      		var list = doc.data();
    });
    return dataSource;
	}

	searchFilterFunction=async()=>{
		const allStories = await db.collection("Stroies").where("Story", "==", this.state.storyName).limit(1).get();
		allStories.docs.map(doc => {
      var dataSource = doc.data();
      if (dataSource.Story === this.state.storyName) {
        <Text>{storyName}</Text>
      } else {
        alert("The book wasn't issued by this student!");
        this.setState({
          storyName: ''
        });
      }
    });
    return dataSource;
	}

	render(){

		if(this.state.storyName === ""){
			this.retriveStories();
		}else{
			return(
				<Searchbar
          placeholder="Search"
          onChangeText={this.searchFilterFunction}
          value={searchQuery}
        />

        <SafeAreaView style={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={dataSource}
          />
        </SafeAreaView>
		)
		}
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline"
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10
  },
  inputView: {
    flexDirection: "row",
    margin: 20
  },
  inputBox: {
    width: 400,
    textAlign:"center",
    height: 40,
    borderWidth: 4,
    borderRightWidth: 4,
    fontSize: 20,
    marginLeft:450
  },
  scanButton: {
    backgroundColor: "#66BB6A",
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
  submitButton: {
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50
  },
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  transactionAlert: {
    margin: 10,
    color: "red"
  }
});