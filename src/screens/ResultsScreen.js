import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import RickAndMorty from '../api/RickAndMorty';
import Details from '../components/Details';


const ResultsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [locations, setLocations] = useState(null);
    const [episodes, setEpisodes] = useState(null);

    const id = navigation.getParam('id');
    const locationUrl = navigation.getParam('location');
    let episodeUrl = navigation.getParam('episode');
    const url = episodeUrl[0];

    const getResult = async (id) => {
        try {
            const response = await RickAndMorty.get(`/character/${id}`);
            setResult(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getLocation = async (location) => {
        try {
            const response = await RickAndMorty.get(`${location}`);
            setLocations(response.data);
            //console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getEpisode = async (episode) => {
        try {
            const response = await RickAndMorty.get(`${episode}`);
            setEpisodes(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getResult(id);
        getLocation(locationUrl);
        getEpisode(url);
    }, []);

    if (!result) {
        return null;
    }
    if (!locations) {
        return null;
    }
    if (!episodes) {
        return null;
    }


    // console.log(result.hours.open)
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image }} />
            <View style={styles.container2}>
                <Text style={styles.txtStyle}>{result.name}</Text>
            </View>
            <Details texto={result.status} iName="heart" iType="feather" />
            <Details texto="Last known location" iName="location" iType="entypo" />
            <Text style={styles.txt}>{locations.name}</Text>
            <Text style={styles.txt}>Type: {locations.type}</Text>
            <Text style={styles.txt}>Dimension: {locations.dimension}</Text>
            <Details texto="First seen in" iName="eye" iType="entypo" />
            <Text style={styles.txt}>{episodes.name}</Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        height: 300,
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderRadius: 200
    },
    txtStyle: {
        margin: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    txt: {
        fontSize: 18,
        margin: 4,
        marginLeft: 20,
        fontStyle:'italic'
    },
    iconStyle: {
        fontSize: 25,
        margin: 10
    },
    container2: {
        alignItems: 'center'
    },
    element: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ResultsScreen;