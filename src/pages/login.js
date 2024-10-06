import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    const handleLogin = () => {
        if (email === '' && password === '') {
            navigation.navigate('cards')
        } else {
            alert('E-mail ou senha inválidos!')
        }
    }

    const handleRegister = () => {
        navigation.navigate('register')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#c9c9c9"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#c9c9c9"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#8e44ad', marginTop: 10 }]} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e1e1e', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f1c40f',  
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#8e44ad',  
        backgroundColor: '#2c3e50',  
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
        color: '#fff',  
    },
    button: {
        backgroundColor: "#3498db", 
        borderRadius: 5,
        padding: 12,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default Login;
