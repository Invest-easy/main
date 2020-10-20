import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import {Chip} from 'react-native-paper'
import Search from './Search';

// Composant retournant la vue de la page de recherche

class TagItem extends React.Component {


  constructor(props){
    super(props)
    this.selected = false
  }

  _pressed(item){
    console.log(item.item)
    if(!this.selected){
      this.props.addTagFct(item.item)
    } else {
      this.props.removeTagFct(item.item)
    }
    this.selected = !this.selected
  }

  render() {
    const item = this.props.item

    return (
      <Chip style={styles.chip}
            onPress={() => this._pressed({item})}
            selected = {this.selected}
      >
      {item}
      </Chip>
    )
  }
}

const styles = StyleSheet.create({
  chip: {
    marginLeft : 5,
    marginRight:5
  }
})

export default TagItem
