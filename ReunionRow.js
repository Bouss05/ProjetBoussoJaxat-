
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

export default class ReunionRow extends React.Component {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  onItemClick = () => {
    console.log('onItemClick');
    this.navigation.navigate('Detail', {
      image_url: this.props.image_url,
      sujet: this.props.sujet,
      lieu: this.props.lieu,
      datetime: this.props.datetime,
      participants: this.props.participants
    })
  }

  render() {
    const details = this.props.detail
    const suj = this.props.sujet
    const lieu = this.props.lieu
    const datime = this.props.datetime
    const parts = this.props.participants
    return (
      <TouchableOpacity onPress={() => details(suj, lieu, datime, parts)}>
        <View style={styles.row}>
          <Image style={styles.picture} source={{ uri: this.props.image_url }} />
          <View style={{ width: 250 }} >
            <Text style={styles.primaryText}>
              {this.props.lieu}
            </Text>
            <Text style={styles.secondaryText}>
              {this.props.sujet} - {this.props.datetime}
            </Text>

            <Text style={styles.secondaryText}>
              {this.props.participants}
            </Text>
          </View>
          <View style={styles.icon}>
            <Icon
              name='delete'
              type='material'
              color='#FF80AB' />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 1,
  },
  icon: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});