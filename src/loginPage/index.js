import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import styles from './style';
import usersDatas from '../databaseSimulator/index';

export default function LoginPage({navigation}) {

    const [userNameOrEmail, setUserNameOrEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    const [userNameOrEmailErrorMessage, setUserNameOrEmailErrorMessage] = useState(null);
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState(null);

    function verifInputDatas(){
        let isAllOk = true;

        if(userNameOrEmail === null){
            isAllOk = false;
            setUserNameOrEmailErrorMessage('Preencha o campo usuario*');
        }else setUserNameOrEmailErrorMessage(null);

        if(userPassword === null){
            isAllOk = false;
            setUserPasswordErrorMessage('Preencha o campo senha*');
        }else setUserPasswordErrorMessage(null);

        return isAllOk;
    }

    function verifUser(){
        if(verifInputDatas()){
            const user = {
                nome: (userNameOrEmail)?.toLowerCase(),
                email: (userNameOrEmail)?.toLowerCase(),
                senha: userPassword
            };
    
            let res = usersDatas.verifUser(user);

            if(res.user === false){
                setUserNameOrEmailErrorMessage('Usuario nao existe');
            }else{
                setUserNameOrEmailErrorMessage(null);

                if(res.senha === false){
                    setUserPasswordErrorMessage('Senha incorreta');
                    return;
                }else{
                    setUserPasswordErrorMessage(null);

                    navigation.navigate('MainPage');
                }
            }

            
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.boxLogin}>

            <Text style={styles.textTitle}>Tecno Society</Text>
            
            <View style={styles.boxMain}>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Usuário:</Text>
                    <TextInput onChangeText={setUserNameOrEmail} value={userNameOrEmail} style={styles.input} placeholder="Nome ou email de usuário" ></TextInput>
                    {userNameOrEmailErrorMessage? <Text style={styles.textError} >{userNameOrEmailErrorMessage}</Text> : <View/> }
                </View>

                <View style={styles.boxUserData}>
                    <Text style={styles.textLabel} >Senha:</Text>
                    <TextInput onChangeText={setUserPassword} value={userPassword} style={styles.input} placeholder="Password" secureTextEntry={true} ></TextInput>
                    {userPasswordErrorMessage? <Text style={styles.textError} >{userPasswordErrorMessage}</Text> : <View/> }
                </View>
                
                <View style={styles.boxTouchableButton}>
                    
                    <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.button}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxButton} onPress={() => verifUser()}>
                        <Text style={styles.button}>Entrar</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </Pressable>
    );

};