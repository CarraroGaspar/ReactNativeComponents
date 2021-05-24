import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { BoxShadow } from './components/BoxShadow/BoxShadow'
import CardHeader from './components/Card/CardHeader';
import Card from './components/Card/Card'
import { Icon } from 'react-native-elements'

export default function App() {
  return (
    <View style={{display:"flex", justifyContent: "center", flexDirection: "column", flex: 1}}>
      <Card 
        leftHeader={<TouchableOpacity><Image
          style={{
            width: 50,
            height: 50
          }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        /></TouchableOpacity>} 
        title={<Text style={{fontWeight: "bold", fontSize: 16}}>React Native</Text>} 
        subtitle={<Text style={{fontSize: 12, color: "#AEAEAE"}}>Prueba</Text>} 
        rightHeader={<TouchableOpacity style={{width: 50, height: 50, backgroundColor: "#EAEAEA", padding: 3, borderRadius: 6, justifyContent: "center", alignItems: "center"}}><Text>OK</Text></TouchableOpacity>}
        topBody={<Text style={{fontWeight: "bold", fontSize: 16, alignSelf:"center"}}>Top Body</Text>}
        bottomBody={<Text style={{fontWeight: "bold", fontSize: 16, alignSelf:"center"}}> botton Body</Text>}
        leftFooter={<TouchableOpacity style={{width: 50, height: 50, backgroundColor: "#EAEAEA", padding: 3, borderRadius: 6, justifyContent: "center", alignItems: "center"}}><Text>OK</Text></TouchableOpacity>}
        middleFooter={<TouchableOpacity style={{width: 50, height: 50, backgroundColor: "#EAEAEA", padding: 3, borderRadius: 6, justifyContent: "center", alignItems: "center"}}><Text>OK</Text></TouchableOpacity>}
        rightFooter={<Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
