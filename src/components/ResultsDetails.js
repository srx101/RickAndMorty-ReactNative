import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ResultsDetail = ({ result,color }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: result.image }}
                style={styles.imgStyle}
            />
            <View style={styles.row}>
                <Text style={{marginTop:1}}>Name: {result.name}</Text>
                <Icon
                    name='pokeball'
                    type='material-community'
                    color={color}
                    iconStyle={{marginRight:3}}
                />
            </View>
            <Text>{result.species} - {result.gender}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imgStyle: {
        width: 250,
        height: 220,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 20
    },
    container: {
        marginLeft: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});

export default ResultsDetail;