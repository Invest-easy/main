import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

class ModalBuy extends Component {

  constructor(props){
    super(props)
    this.isModalVisible = this.props.isModalVisible
  }


  render() {
    return (
        <Modal isVisible={this.isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
    );
  }
}

export default ModalBuy
