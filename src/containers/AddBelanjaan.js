import React, { Component } from "react";
import {
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';


// IMPORT ACTIONS
import { addBelanjaan } from '../actions';


class AddBelanjaan extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    // METHOD TO DISPATCH ACTIONS
    addBelanjaan = (text) => {
        this.props.dispatch(addBelanjaan(text));
        this.setState({ text: '' });
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TextInput placeholder="Tambah belanjaan disini"
                    value={this.state.text}
                    style={{ flex: 1, borderColor: "black", borderWidth: 1, backgroundColor: "#deeeee", padding: 5 }}
                    onChangeText={(text) => this.setState({ text })}
                />

                <TouchableOpacity onPress={() => this.addBelanjaan(this.state.text)}
                    style={{ marginLeft: 5 }}>
                    <Icon name="add-box" size={35} color="black" />
                </TouchableOpacity>
            </View>

        );
    }
}
export default connect()(AddBelanjaan);