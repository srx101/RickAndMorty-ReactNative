import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation,color }) => {
    if(!results.length){
        return null;
    }
    
    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item})=> {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('Results', {id: item.id, location:item.location.url, episode:item.episode})}>
                    <ResultsDetail result={item} color={color}/>
                </TouchableOpacity>
                );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:20,
        marginBottom:5
    },
    container:{
        marginBottom:15
    }
});

export default withNavigation(ResultsList);