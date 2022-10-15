import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Tasklist({data}){
    return(
        <Animatable.View 
        style={styles.container}
        animation='bounceIn'
        useNativeDriver
        duration={1000}
        
        >
            <TouchableOpacity>
                <Ionicons name='md-checkmark-circle' size={30} color='#121212'/>
            </TouchableOpacity>
            <Text style={styles.task}>
                { data.key}
                 {' '}- 
                { ' ' + data.task}
            </Text>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        margin:8,
        flexDirection:'row',
        backgroundColor:'#FFF',
        borderRadius:5,
        padding:7,
        elevation:1.5,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,
        }
    },
    task:{
        fontSize:20,
        color:'#121212',
        paddingLeft:10,
        paddingRight:20,
    }
});