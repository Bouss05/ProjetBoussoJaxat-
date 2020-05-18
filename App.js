import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet
} from 'react-native';
import ListReunion from './ListReunion';
import DetailReunion from './DetailReunion';
import AddReunion from './AddReunion';

const Stack = createStackNavigator();


export default class App extends React.Component {

  
  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="List reunion">
          <Stack.Screen name="List reunion" component={ListReunion} />
          <Stack.Screen name="Detail" component={DetailReunion} />
          <Stack.Screen name="Add" component={AddReunion} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});