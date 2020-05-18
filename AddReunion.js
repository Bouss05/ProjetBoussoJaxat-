import React, { Component, useState } from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  Dimensions, TouchableOpacity
} from 'react-native';
//import  DateTimePickerModal from "react-native-modal-datetime-picker" ;
import DatePicker from 'react-native-datepicker';
import ReactChipsInput from 'react-native-chips';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AddReunion extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: '10-05-2020' }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder='Lieu de la réunion'
          style={styles.simpleInput}
        />

        <TextInput
          placeholder='Sujet de la réunion'
          value={this.sujet}
          style={styles.simpleInput}
        />

        <DatePicker
          style={{ width: width - 40, marginTop: 30, height: 40, paddingHorizontal: 10, borderColor: '#FF80AB' }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="2010-01-01"
          maxDate="2099-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              right: 20,
              top: 4,
              marginLeft: 0
            },

          }}
          onDateChange={(date) => { this.setState({ date: date }) }}
        />

        <ReactChipsInput label="Ajouter un participant" initialChips={["yacinepa14@gmail.com", "diarra.diakhate@esmt.sn"]}
          onChangeChips={(chips) => console.log(chips)}
          alertRequired={true} chipStyle={{ borderColor: 'black', backgroundColor: 'white', textAlign: "right" }}
          inputStyle={{ fontSize: 10 }} />

        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40,
    borderColor: '#FF80AB',
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100,
    borderColor: '#FF80AB',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#330066',
    borderRadius: 30,
    width: 250,
    height: 50,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: 'white'
  },
  buttonText: {
    color: 'white'
  }
});
