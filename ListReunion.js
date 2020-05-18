import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions, FlatList
} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import ReunionRow from './ReunionRow';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Ajouter",
    icon: require("./assets/add_white.png"),
    name: "bt_add",
    position: 1
  }
];

export default class ListReunion extends React.Component {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      reunions: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch("http://demo5866734.mockable.io/reunions")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('We are here');
        this.setState({
          reunions: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  detail = (reunion) => {
    this.props.navigation.navigate('Detail', { reunion: reunion })
  }

  detail = (sujet, lieu, datetime, participants) => {
    this.props.navigation.navigate('Detail', { sujet: sujet, lieu: lieu, datetime: datetime, participants: participants })
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.reunions}
          renderItem={
            ({ item }) => <ReunionRow
              sujet={item.sujet}
              image_url={item.image_url}
              lieu={item.lieu}
              datetime={item.datetime}
              participants={item.participants}
              detail={this.detail}
              navigation={this.navigation}
            />
          }
        >
        </FlatList>
        <FloatingAction
          actions={actions}
          onPressItem={sujet => {
            if (sujet === 'bt_add') {
              this.navigation.navigate('Add');
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },

  list: {

  }
});