import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import {Chip} from 'react-native-paper'

// Composant retournant la vue de la page de recherche

class TagItDetails extends React.Component {

  render() {
    const item = this.props.item

    return (
      <Chip style={styles.chip}>
      {item}
      </Chip>
    )
  }
}

const styles = StyleSheet.create({
  chip: {
    marginLeft : 5,
    marginRight:5,
    height : 30
  }
})

export default TagItDetails
