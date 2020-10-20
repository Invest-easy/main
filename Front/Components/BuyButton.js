import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

class BuyButton extends React.Component {

  render(){
    const stock = this.props.stock
    console.log(stock)
    return(
      <FAB
        style={styles.fab}
        label={"Acheter"}
        onPress={() => this.props.navigation.navigate("BuyScreen", {stockToBuy: {stock}})}
      />
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom : 15,
    width : 500,
    height : 50
  },
})

export default BuyButton;
