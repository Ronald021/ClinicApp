import React, { Component } from 'react';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
        backgroundColor: '#387594'
    },
    textStyle:{
        fontSize:25,
        textAlign:'center',
        paddingTop:0,
        color:"white"
    },
    textStyle1:{
        fontSize:15,
        textAlign:'left',
        paddingTop:0,
        margin: 1
    },
    container: {
        borderRadius: 15,
        backgroundColor: "#E1EFFA"
    },
    loader: {
        color:"white",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#387594"
    },
    list: {
        paddingVertical: 4,
        margin: 7,
        borderRadius: 15,
        backgroundColor: "#EDEEEE",
        fontcolor: 'white'
    }
};
export default styles;