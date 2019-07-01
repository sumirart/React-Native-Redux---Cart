import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

// IMPORT OUR CONTAINERS
import AddBelanjaan from './containers/AddBelanjaan';
import VisibleBelanjaan from './containers/VisibleBelanjaan';


class DaftarBelanjaan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddBelanjaan />
                <View>
                    <VisibleBelanjaan />
                </View>
            </View>
        );
    }
}
export default DaftarBelanjaan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    }
});