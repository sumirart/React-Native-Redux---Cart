import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
class CetakList extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            radio_props: [
                { label: "Semua", value: 0 },
                { label: "Selesai", value: 1 },
                { label: "Belum", value: 2 },
            ]
        }
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10, marginBottom: 5 }}>Tampilkan: </Text>
                <RadioForm radio_props={this.state.radio_props} initial={0} formHorizontal={true}
                    onPress={(value) => this.setState({ value })} />

                {/* CONDITIONAL RENDERING */}
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10, marginBottom: 5 }}>Daftar Belanja: </Text>
                {
                    this.state.value === 0 ?
                        (
                            <View>
                                {this.props.belanjaan.map(barang =>
                                    <TouchableOpacity key={barang.id} onPress={() => this.props.toggleBelanjaan(barang.id)}>
                                        <Text style={barang.completed ? styles.completed : styles.unCompleted}>- {barang.text}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        ) :
                        this.state.value === 1 ?
                            (
                                <View>
                                    {this.props.belanjaan.map(barang =>
                                        barang.completed ? (
                                            <TouchableOpacity key={barang.id} onPress={() => this.props.toggleBelanjaan(barang.id)}>
                                                <Text style={styles.completed}>- {barang.text}</Text>
                                            </TouchableOpacity>
                                        ) : (
                                                <View key={barang.id}></View>
                                            )
                                    )}
                                </View>
                            ) :
                            (
                                <View>
                                    {this.props.belanjaan.map(barang =>
                                        !barang.completed ? (
                                            <TouchableOpacity key={barang.id} onPress={() => this.props.toggleBelanjaan(barang.id)}>
                                                <Text style={styles.unCompleted}>- {barang.text}</Text>
                                            </TouchableOpacity>
                                        ) : (
                                                <View key={barang.id}></View>
                                            )
                                    )}
                                </View>
                            )
                }
            </View>
        );
    }
}

export default DaftarBelanjaan = ({ belanjaan, toggleBelanjaan }) => (
    <View>
        <CetakList belanjaan={belanjaan} toggleBelanjaan={toggleBelanjaan} />
    </View>
)

const styles = StyleSheet.create({
    completed: {
        fontSize: 18,
        color: "green",
        textDecorationLine: "line-through"
    },
    unCompleted: {
        fontSize: 18,
        color: "red"
    }
})