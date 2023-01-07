import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, Pressable} from 'react-native';
import styles from './style';
import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apikey=c80584f8&';

//{data && Object.keys(data).forEach(item => <Text style={styles.textPage}> {item} : {data[item]} </Text> )}

const MainPage = () =>{
    const [title, setTitle] = useState(null);
    const [data, setData] = useState(null);

    const [ver, setVer] = useState(null);

    const pesquisar = () =>{
        if(title !== null && title !== ''){
            const url = baseUrl + 't=' + (title).replace(' ', '+');

            axios.get(url).then(res => {
                setData([res.data]);
            }).catch( err => setData(err))
        }
    }

    return(
        <Pressable style={styles.boxContent} onPress={Keyboard.dismiss}>
            <View style={styles.containerTopText}>
                <Text style={styles.topText}>Pesquisar dados de filmes</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textTitle}>Titulo: </Text>
                <TextInput style={styles.input} onChangeText={setTitle} value={title} placeholder="Digite o titulo do filme"></TextInput>
            </View>

            <TouchableOpacity onPress={() => pesquisar()} style={styles.buttonContainer}>
                <Text style={styles.button}>Pesquisar</Text>
            </TouchableOpacity>

            {data !== null && <FlatList
                style={styles.containerLis}
                data={data}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.itemText}>Titulo:  
                                <Text style={styles.iText}>{item.Title}</Text>
                            </Text>

                            <Text style={styles.itemText}>Ano: 
                                <Text style={styles.iText}>{item.Year}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>Gênero: 
                                <Text style={styles.iText}>{item.Genre}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>Duração: 
                                <Text style={styles.iText}>{item.Runtime}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>Escritor: 
                                <Text style={styles.iText}>{item.Writer}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>Lingua: 
                                <Text style={styles.iText}>{item.Language}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>Atores: 
                                <Text style={styles.iText}>{item.Actors}</Text>
                            </Text>
                            
                            <Text style={styles.itemText}>País: 
                                <Text style={styles.iText}>{item.Country}</Text>
                            </Text>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.imdbID }
            />}
            

        </Pressable>
    );
}

export default MainPage;