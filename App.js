import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    )
  }
}

const TabNavigater = createBottomTabNavigator({
  WriteStory: {screen:WriteStoryScreen},
  ReadStory: {screen:ReadStoryScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'WriteStory'){
        return(
          <Image source={require('./assets/write.png')} style={{width:40,height:40}}/>  
        )
      }else if(routeName === 'ReadStory'){
          return(
            <Image source={require('./assets/read.png')} style={{width:40,height:40}}/>  
          )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigater);