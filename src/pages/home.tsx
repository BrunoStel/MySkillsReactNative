import React, {useState, useEffect} from 'react';
import {
View, 
Text, 
StyleSheet,
SafeAreaView, 
TextInput, 
Platform,
FlatList,
StatusBar
} from 'react-native';

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface ISkillData{
    id: string;
    name: string
}


export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<ISkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill(){
        const data ={
            id: String(new Date().getTime()),
            name: newSkill
        }
        
        setMySkills(oldState => [...oldState, data]) //O oldState é o estado anterior de mySkills, ou seja,
        //Tudo que estava armazenado no mySkills
    }

    function handleRemoveSkill (id: string){
        setMySkills(oldstate => oldstate.filter(
            skill=> skill.id !== id  
        ))
    }

    //Recebe dois parâmetros, uma função e um array com as dependências(Dizendo que o useEffect será executado,
    //toda vez que houver alteração no estado dessas dependências. Ele seré executado, alem das dependências,
    //na montagem do app, ou seja, ao inicializar o app)
    useEffect(()=>{
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGretting("Good morning")
        }else if ( currentHour>=12 && currentHour < 18){
            setGretting("Good afternoon")
        }else{
            setGretting("Good evening")
        }

    }, [mySkills])

  return (
    <>
      <SafeAreaView style={styles.container}
      //SafeAreaView faz adptações pra alguns modelos de celular, principalmente iphones
      >

        <Text style={styles.title}>Welcome</Text>

        <Text  style={[styles.title, {fontSize:12}]}>
            {gretting}
        </Text>

        <TextInput
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill} //Ele passa como argumento de setNewSkill o proprio evento
            //Mesma coisa de fazer: onChangeText={event => setNewSkill(event)}
        />

        <Button //Component criado, veja a importação!
            onPress={handleAddNewSkill}
            activeOpacity={.3}
            title="Add"
        />

        <Text     style={[styles.title, {marginVertical:30}]}>
            My Skills
        </Text>


        
        <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}//Responsavel por fazer a criação de uma key para cada renderização realizada
            renderItem={({item}) => (
                <SkillCard 
                    skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)}
                /> //Component criado, veja a importação!
                //o skill é um atributo que criamos para o componente SkillCard, que vai repassar como valor o item
                //Esse renderItem percorre o dado que foi passado no atributo data, funcionando como um map por exemplo
            )}
        />
           

      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:"#121015",
        paddingHorizontal:20,
        paddingVertical:70
    },
    title:{
        color:"#fff",
        fontSize:24,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:'#1f1e25',
        color:"#FFF",
        fontSize:18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop:20,
        borderRadius:7
    }
})