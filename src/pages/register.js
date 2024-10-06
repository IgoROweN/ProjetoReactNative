import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');
    const [curses, setCourses] = useState('');

    const navigation = useNavigation()

    const handleRegister = () => {
        console.log('Dados do usuário:', { name, email, password, telephone, cpf, curses });
        Alert.alert('Usuário cadastrado com sucesso!');
        navigation.navigate('login')
        setName('');
        setEmail('');
        setPassword('');
        setTelephone('');
        setCpf('');
        setCourses('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#c9c9c9"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#c9c9c9"
                keyboardType="email-address"
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
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                placeholderTextColor="#c9c9c9"
                keyboardType="phone-pad"
                value={telephone}
                onChangeText={setTelephone}
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#c9c9c9"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput
                style={styles.input}
                placeholder="Cursos"
                placeholderTextColor="#c9c9c9"
                value={curses}
                onChangeText={setCourses}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Register;
