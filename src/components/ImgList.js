import React from 'react';
import {FlatList,Image, StyleSheet} from 'react-native';

const ImgList = ({fotos}) =>{
    if(fotos.length<3){
        return null;
    }
    
    return (
        <FlatList
                    style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={fotos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
                />
    );
};

const styles = StyleSheet.create({
    list: {
        flexGrow: 0
    },
    image: {
        height: 200,
        width: 300,
        margin: 10,
        borderRadius: 4
    }
});

export default ImgList;
