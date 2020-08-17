import React from 'react';
import {view, TextInput, StyleSheet, View} from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Buscar..."
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:10,
        flexDirection: 'row'
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    }, 
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:10
    }
});

export default SearchBar;