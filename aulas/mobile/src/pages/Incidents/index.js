import React from 'react';
import { View } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Incidents(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text styles={styles.headerTextBold}>0 casos</Text>. 
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos e salve o dia!</Text>
        </View>
    );
}