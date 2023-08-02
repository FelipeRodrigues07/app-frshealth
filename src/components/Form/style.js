import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
 formContext: {
    flex:1,
    backgroundColor:"#ffffff",
    marginTop:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    alignItems:"center",
    paddingTop: 20, //era 30
 },
 form:{
    width:"100%",
 },
 formLabel:{
   color:"#000000",
   fontSize:18,
   paddingLeft:20,
},
 input:{
   width: "90%",
   borderRadius:50,
   backgroundColor:"#f6f6f6",
   height:40,
   margin:12, 
   paddingLeft:10,
 },
 ButtonCalculator:{
   borderRadius: 50,
   alignItems:"center",
   justifyContent:"center",
   width:"90%",
   backgroundColor:"#FF0043",
   paddingTop:14,
   paddingBottom:14,
   marginLeft:12,
   margin: 30,
 },
 textButtonCalculator:{
   fontSize: 20,
   color:"#ffffff"
 },
 errorMessage:{
  fontSize: 12,
  color: "red",
  fontWeight: "bold",
  paddingLeft:20,
 },
 exhibitionResultImc:{
  width:"100%",
  height:"55%" //tava 50
 },
 listImcs:{
  marginTop:20,
 },
 resultImcItem:{
  fontSize:26,
  color: "gray",
  height: 50,
  width: "100%",
  paddingRight:20,
 },
 textResultItemList:{
  fontSize:16,
  color: "gray",
 },
 result:{
  fontSize: 24,
  color: "#FF0043",
  textAlign: "center",
  marginVertical: 10,
 
 }
});

export default styles
