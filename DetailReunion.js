import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AddReunion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const suj = this.props.route.params.sujet
    const lieu = this.props.route.params.lieu
    const datime = this.props.route.params.datetime
    const parts = this.props.route.params.participants
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>{lieu}</Text>
        <Text style={styles.secondaryText}>{suj}</Text>
        <Text style={styles.secondaryText}>{datime}</Text>
        <Text style={styles.secondaryText}>{parts}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 15,
    color: 'black',
    marginBottom: 1,
  },

});
