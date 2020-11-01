import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
class ApiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            axiosData: null
        };
    }

    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.get("http://52.186.140.66:8080/ClinicaWeb-1.0-SNAPSHOT/crudmedicine")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    }
    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.9)",
            }}
            />
        );
    }
    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.textStyle1}>     {data.item.idMedicine}</Text>
                <Text style={styles.textStyle1}>    Name: {data.item.name}</Text>
                <Text style={styles.textStyle1}>    Lab: {data.item.lab}</Text>
                <Text style={styles.textStyle1}>    Administration: {data.item.adminway}</Text>
                <Text style={styles.textStyle1}>    Description: {data.item.description}</Text>
                <Text style={styles.textStyle1}>    Empiration Date: {data.item.expirationdate}</Text>
                <Text style={styles.textStyle1}>    Lote:{data.item.lots}</Text>

                </TouchableOpacity>
        )

    }


    render() {
        const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListSeparator={this.FlatListSeparator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ApiContainer;