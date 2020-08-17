import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const DetailsScreen = ()=>{
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMsg] = useResults();



    const filterResultsByStatus = (Status) => {
        //price === '$'|| '$$' || '$$$'
        return results.filter(result => {
            return result.status === Status;
        });
    };

    return (
        <View style={styles.color}>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
        />
        {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
        {/* <Text style={styles.title}>Encontramos {results.length} resultados!</Text> */}
        <ScrollView>
        <ResultsList
            title="Vivos"
            results={filterResultsByStatus('Alive')}
            color="#06d6a0"
        />  
        <ResultsList
            title="Muertos"
            results={filterResultsByStatus('Dead')}
            color="#ef476f"
        />
        <ResultsList
            title="Desconocido"
            results={filterResultsByStatus('unknown')}
            color="#118ab2"
        />
        </ScrollView>
        
    </View>    );
};

const styles = StyleSheet.create({
    color: {
        flex: 1,
        backgroundColor: 'white'
    },
    title:{
        marginLeft:20
    }
});

export default DetailsScreen;