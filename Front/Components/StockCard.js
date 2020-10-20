import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator } from 'react-native'
import LineChartLight from './LineChartLight'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


class StockCard extends React.Component {

  render() {

    return (
        <Card style={styles.main_container}>
          <Card.Cover source = {{uri: 'https://picsum.photos/700' }} />
          <Card.Title
            title="Card Title"

            subtitle="Card Subtitle"

          />
        </Card>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop :5,
    marginBottom: 5,
    height : 150,
    width : 250
  },
})

export default StockCard
