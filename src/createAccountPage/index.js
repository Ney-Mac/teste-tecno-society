import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput, Pressable, TouchableOpacity, Keyboard} from 'react-native';
import styles from './style';
import usersDatas from '../databaseSimulator/index';

const CreateAccountPage = ({navigation}) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const [nameErrorMessage, setNameErrorMessage] = useState(null);
    const [emailErrorMessage, setEmailErrorMessage] = useState(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState(null);

    const [response, setResponse] = useState(null);

    function verifPassword(){
        if(confirmPassword !== password){
            setConfirmPasswordErrorMessage('Senha não compatível');
            return false;
        }
        setConfirmPasswordErrorMessage(null);
        return true;
    }

    function verifDatas(){
        let canRegist = true;

        if(name === null){
            setNameErrorMessage('Campo obrigatório*');
            canRegist = false;
        }else setNameErrorMessage(null);

        if(email === null){
            setEmailErrorMessage('Campo obrigatório*');
            canRegist = false;
        }else setEmailErrorMessage(null);

        if(password === null){
            setPasswordErrorMessage('Campo obrigatório*');
            canRegist = false;
        }else setPasswordErrorMessage(null);

        if(confirmPassword === null){
            setConfirmPasswordErrorMessage('Campo obrigatório*');
            canRegist = false;
        }else canRegist = verifPassword();

        return canRegist;
    }

    function saveUser(){
        if(verifDatas()){
            const userDatas = {
                nome: name?.toLowerCase(),
                email: email?.toLowerCase(),
                senha: password
            };
    
            let res = usersDatas.saveUserDatas(userDatas);

            if(res === true){
                setResponse(null);
                navigation.navigate('MainPage');
            }else{
                setResponse('Este usuário já existe!');
            }
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.boxLogin}>
            
            <Text style={styles.textTitle}>Tecno Society</Text>
            
            <ScrollView showsVerticalScrollIndicator={false} style={styles.boxMain}>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Nome de usuário:</Text>
                    <TextInput style={styles.input} onChangeText={setName} placeholder="Nome de usuário" ></TextInput>
                    {nameErrorMessage? <Text style={styles.textError} >{nameErrorMessage}</Text> : <View/> }
                </View>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Email:</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} placeholder="Ex: emailexemplo@gmail.com" ></TextInput>
                    {emailErrorMessage? <Text style={styles.textError} >{emailErrorMessage}</Text> : <View/> }
                </View>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Senha:</Text>
                    <TextInput style={styles.input}  onChangeText={setPassword} placeholder="Password" secureTextEntry={true} ></TextInput>
                    {passwordErrorMessage? <Text style={styles.textError} >{passwordErrorMessage}</Text> : <View/> }
                </View>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Confirmar Senha:</Text>
                    <TextInput style={styles.input}
                               onChangeText={setConfirmPassword} 
                               placeholder="Confirm Password" 
                               secureTextEntry={true} >
                    </TextInput>
                    {confirmPasswordErrorMessage? <Text style={styles.textError} >{confirmPasswordErrorMessage}</Text> : <View/> }
                </View>

                {response? <View>
                    <Text style={styles.response}>{response}</Text>
                </View> : <View/>}

                <View style={styles.boxTouchableButton}>
                   
                    <TouchableOpacity style={styles.boxButton}  onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.button}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxButton} onPress={() => saveUser()}>
                        <Text style={styles.button}>Confirmar</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </Pressable>
    );

}

export default CreateAccountPage;