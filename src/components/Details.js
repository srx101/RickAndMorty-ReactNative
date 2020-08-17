import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Details = ({texto,iName,iType}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{texto}</Text>
            <Icon
                    name={iName}
                    type={iType}
                     iconStyle={{marginLeft:10,marginTop:5,color:'#ABABAB'}}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        justifyContent:'flex-start',
    },
    iconStyle:{
        marginRight:10,
        fontSize:22
    },
    textStyle:{
        fontSize:24,
        marginLeft:10,
        fontWeight: 'bold',
        color:'#ABABAB'
    }

});

export default Details;