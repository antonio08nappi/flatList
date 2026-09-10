import {View, StyleSheet, FlatList, Image} from 'react-native';
import { Link } from 'expo-router';

export default function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Link href={`Componentes/filme/${item.id}`}>
          <Image
          source={{uri:item.imagem}}
          style={[styles.filme]}
          ></Image>
          </Link>
          
        )}
      > </FlatList>
      
    </View>
  )
}
const styles = StyleSheet.create({
       categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:150,
        height:230,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8,
        backgroundColor: 'gray',
       },
       filmeTitulo:{
        color:'white',
        fontSize:10
       }
});