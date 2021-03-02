import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import {Chip} from 'react-native-paper'
import Search from './Search';

// Composant retournant la vue de la page de recherche

class TagItem extends React.Component {


  constructor(props){
    super(props)
    this.selected = false
    this.tagPressed = this.props.tagPressed
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
    {/*
    if(this.tagPressed != undefined){
      console.log("yessss")
    }
    */}
    return (
      <Chip style={styles.chip}
            onPress={() => this._pressed({item})}
            selected = {this.selected}
            mode = {'flat'}
      >
      {item}
      </Chip>
    )
  }
}

const styles = StyleSheet.create({
  chip: {
    marginLeft : 5,
    marginRight:5,
    paddingLeft : 10,
    paddingRight : 10,
    height : 35,
    alignItems:'center',
  }
})

export default TagItem
