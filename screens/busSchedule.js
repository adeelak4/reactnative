import { StyleSheet, Text, View, FlatList, Props,Image } from 'react-native'
import React, { Component } from 'react'
import Ionicon from '@expo/vector-icons/Feather';
import busData from '../src/api/busData';

const busSchedule = ({ navigation, route }) => {

  // const names = [
  //   {
  //     index: "1",
  //     name: "KARACHI UNIVERSITY",

  //   },
  //   {
  //     index: "2",
  //     name: "MOSAMIAT"
  //   },
  //   {
  //     index: "3",
  //     name: "SAFORA GOTH"
  //   },
  //   {
  //     index: "4",
  //     name: "MALIR CANT"
  //   },
  //   {
  //     index: "5",
  //     name: "MALIR HALT"
  //   },
  //   {
  //     index: "6",
  //     name: "KALA BOARD"
  //   },
  //   {
  //     index: "7",
  //     name: "MALIR 15"
  //   },
  //   {
  //     index: "8",
  //     name: "KAIDABAD"
  //   },
  //   {
  //     index: "9",
  //     name: "MANZIL PUMP"
  //   },
  //   {
  //     index: "10",
  //     name: "FAST UNIVERSITY"
  //   },
  //   {
  //     index: "11",
  //     name: "RAZAQABAD"
  //   },
  //   {
  //     index: "12",
  //     name: "PORT QASIM"
  //   },
  //   {
  //     index: "13",
  //     name: "STEEL TOWN"
  //   },
  //   {
  //     index: "14",
  //     name: "GULSHAN HADEED"
  //   },


  // ]

  // const selectedData = ({ item })=>{

  // return(<View>
  //   <Text>{item.name}</Text>
  // </View>

  // );

  // };
  const id = route.params.busId;
  console.log(id);

  const selectedBus = busData.find((element) => {
    return id === element.id;

  });


  return (
    <View>
      <Image
        source={require('../assets/bus.png')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={70}
        
        
      /> 
      <Text style={styles.Centertitle}>
        ROUTE OF YOUR
      </Text>

      <View style={styles.texthead}>

        <Text style={styles.textheadList}> {selectedBus.name} </Text>
      </View>

      <FlatList scrollEnabled={true} style={styles.flat}
        keyExtractor={(key) => {
          return key.index;
        }}
        data={selectedBus.station}
        renderItem={({ item }) => {
          return <View>
            <Text style={styles.CenterBar}>
              <Ionicon
                name="circle"
                color="#009387"
                size={10}
              />
              <Ionicon
                name="circle"
                color="#009387"
                size={10}
              />
              <Ionicon
                name="circle"
                color="#009387"
                size={10}

              />
            </Text>
            <View style={styles.textBox}>
              <Ionicon
                name="map-pin"
                color="#009387"
                size={20}
              />
              <Text style={styles.textList}>  {item}</Text>

             
            </View>
          </View>

        }}
      />
      {/* <FlatList 
  keyExtractor={(key) => {
    return key.id;
  }}
 data={busData}
 renderItem={selectedData}
/> */}

      {/* <FlatList
      keyExtractor={(key) => {
        return key.index;
      }}
      data={names}
      renderItem={({ item }) => {
        return <View>
          <Text style={styles.CenterBar}>
            | |
          </Text>
          <View style={styles.textBox}>
            <Ionicon
            name="map-pin"
            color="#009387"
            size={20}
          />
          <Text style={styles.textList}>  {item.name}</Text>
        </View>
        </View>

      }}
    /> */}
     <View style={styles.footerImage}>
                    <Image

                        source={require('../assets/footerImages.png')}
                        style={styles.footerImg}
                        resizeMode="stretch"

                    />
                </View>
    </View>





  )
}

export default busSchedule

const styles = StyleSheet.create({
  textBox: {
    paddingLeft: 20,
    margin: "3%",
    borderLeftWidth: 2,
    borderLeftColor: '#08d4c4',
    borderRightWidth: 2,
    borderRightColor: '#08d4c4',
    borderRadius: 20,
    height: 50,
    backgroundColor: "#fff",
    
    alignItems: "center",
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    zIndex: 999,
    elevation: 7,

  },
  flat:{
margin:10,
height:400,

  },
  textList: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom:5,
  },
  footerImage: {

    justifyContent: 'flex-end',
    alignItems: 'center',

},
footerImg: {
    width: 240,
    height: 190,
},
  CenterBar: {
    fontSize: 4,
    textAlign: "center",
  },
  Centertitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  textheadList: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }

})