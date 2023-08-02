import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList, } from "react-native"
import ResultImc from "./Resultimc/";
import styles from "./style";


export default function Form(){

const [height, setHeight]= useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc]= useState("preencha o peso e altura");
const [imc, setImc]= useState(null);
const [textButton, setTextButton]= useState("Calcular");
const [errorMessage, setErrorMessage]= useState(null);
const [imcList, setImcList] = useState([])

function imcCalculator(){
    let heigthFormat = height.replace(",",".")
    let totalImc =(weight/(heigthFormat * heigthFormat)).toFixed(2) //para que o resultado fique só em duas casas decimais
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }])
    setImc(totalImc)
}

function getImcCategory(imcValue) {
  if (imcValue < 18.5) return "Abaixo do peso";
  if (imcValue >= 18.5 && imcValue < 25) return "Peso normal";
  if (imcValue >= 25 && imcValue < 30) return "Sobrepeso";
  if (imcValue >= 30 && imcValue < 35) return "Obesidade grau 1";
  if (imcValue >= 35 && imcValue < 40) return "Obesidade grau 2";
  return "Obesidade grau 3";
}

function verificationImc(){
  if(imc == null){
    Vibration.vibrate();
    setErrorMessage("campo obrigatório*")
  }
}

function validationImc(){
  console.log(imcList)
    if(weight != null && height !=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }
    else{
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura")
    } 
  
}


    return(
        <View style={styles.formContext}>
          {imc == null ? 
           <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="EX. 1.75"
            keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="EX. 75.365"
            keyboardType="numeric"
            />
            <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() =>{
                validationImc()
            }}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>  
            </TouchableOpacity> 
        </Pressable>
        : 
        <View style={styles.exhibitionResultImc}>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
            <Text style={styles.result}>{getImcCategory(parseFloat(imc))}</Text>
            <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={() =>{
                validationImc()
            }}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>  
            </TouchableOpacity> 
        </View>
        }                                                            
        <FlatList 
        showsVerticalScrollIndicator={false}
        style={styles.listImcs} 
        data={[...imcList].reverse()}      //sempre começa pelo ultimo calculado
        renderItem={({item}) =>{         //o que renderiza para cada item do array
          return(
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado Imc = </Text>
              {item.imc}
            </Text> 
          )
          }}
        keyExtractor={(item)=>{
          return item.id.toString();
        }}
        />
      </View>
    );
}