import React, { useState } from 'react';
import {Text, View, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import Tasklist from './src/components/Tasklist' 
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);
const AnimatedOpn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App(){
  const [task, setTask] = useState([
    { key: 1, task: 'Terminar UX Google'},
    { key: 2, task: 'POO - Faculdade'},
    { key: 3, task: 'Curso React'},
    
  ]);

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgoundColor='#171d31' barStyle='light-content'/>
        <View style={styles.content}>
          <Text style={styles.title}>Notepad</Text>

          
        </View>
        
        <FlatList
          marginHorizontal={10}
          showsHorizontalScrollIndicator={true}
          data={task}
          keyExtractor={ (item)=>String(item.key) }
          renderItem={ ({item}) => <Tasklist data={item}/>}
        />

        <AnimatedBtn 
        style={styles.btn}
        useNativeDriver
        animation='bounceInUp'
        duration={1000}
        >
            <Ionicons name='ios-add' size={35} color='#FFF'/>
        </AnimatedBtn>

        <AnimatedOpn 
        style={styles.opn}
        useNativeDriver
        animation='bounceIn'
        duration={1500}
        >
          <AntDesign name="ellipsis1" size={24} color="black" />
        </AnimatedOpn>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  btn:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:'#0094FF',
    alignItems:'center',
    justifyContent:'center',
    bottom:25,
    right:25,
    borderRadius:30,
    elevation:2,
    zIndex:9,
    shadowColor:"000",
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3,
    }

  },
  container:{
    backgroundColor:'#FFF',
    flex:1,
  },
  content:{
    
  },
  title:{
    marginTop:10,
    textAlign:'center',
    fontSize:23,
    paddingBottom:10,
    color:"#000"
  },
  opn:{
    position:'absolute',
    width:40,
    height:40,
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    top:10,
    right:10,
    borderRadius:30,
    elevation:2,
    zIndex:9,
    shadowColor:"000",
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3,
    },
  }
});