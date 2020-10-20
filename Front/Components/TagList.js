import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import {Chip} from 'react-native-paper'
import TagItem from './TagItem'

// Composant pour afficher les listes de tags dans l'onglet recherche

class TagList extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    const tagsSecteur = ["Tech", "Automobile", "Banque", "Luxe", "Energie"]
    const tagsPays = ["France", "Etats-Unis", "Allemagne", "Royaume-Uni", "Belgique"]

    return (

      <View style={styles.main_container}>
        <FlatList
          style = {styles.tags1}
          data={tagsSecteur}
          keyExtractor={(item) => item}
          renderItem={({item}) => <TagItem addTagFct={this.props.addTagFct} removeTagFct={this.props.removeTagFct} item ={item}/>}
          horizontal = {true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style = {styles.tags2}
          data={tagsPays}
          keyExtractor={(item) => item}
          renderItem={({item}) => <TagItem addTagFct={this.props.addTagFct} removeTagFct={this.props.removeTagFct} item ={item}/>}
          horizontal = {true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop :5,
    marginBottom: 10
  },
  tags1:{
    marginTop : 5
  },
  tags2:{
    marginLeft : 25,
    marginTop : 5
  }
})

export default TagList
