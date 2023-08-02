import { StyleSheet, View, StatusBar } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form/';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar 
      backgroundColor='#e0e5e5'
      barStyle="dark-content"
      />
        <Title/>
        <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   //que quer usar 100% da tela
    backgroundColor: '#e0e5e5',
    paddingTop:50,
  },
});
