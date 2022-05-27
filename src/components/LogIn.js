import { StyleSheet, Text, View, TextInput, Image ,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import Checkbox from 'expo-checkbox'


const Login = ({Navigation}) => {
  const [agree, setAgree] = useState(false);



  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/ku-logo.png')} style={styles.logo} />
      <View style= {styles.wellcomeNote}>
<Text style= {styles.wellcomeNote}>KUPOINT Navigation Service</Text>
</View>
      <Text style={styles.mainHeader}>Login</Text>
      <Text style={styles.mainDescrption}>

        Welcome to our brand new application hope you enjoy alot
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Username:</Text>
        <TextInput style={styles.inputstyle} autoCapitalize="none" autoCorrect={false} />
    
        <Text style={styles.labels}> Password:</Text>
        <TextInput style={styles.inputstyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />


      </View>
      <View style={styles.wrapper} >
      <Checkbox
      value={agree} 
      onValueChange={()=>setAgree(!agree)} 
      color={agree ? "green" : undefined}
      />
      <Text style={styles.wrapperText}>
        {"  "}I have read and agreed with Term and Condition
      </Text>

      </View>
      
     

      <TouchableOpacity style={[styles.buttonStyle,{backgroundColor : agree ? "green" : "grey" }]} disabled={!agree}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity> 
  
     
      
    </View>
  )
}



const styles = StyleSheet.create({
  logo: {
    padding:10,
    height: 120,
    width: 350,
    alignItems:'center',

  },
  wellcomeNote:{
alignItems:'center',
paddingHorizontal: 20,
paddingTop: 30,
  },
  mainContainer: {
    height: "100%",
   
    paddingTop: 30,
    marginLeft:20,
    backgroundColor: "#fff",

  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "RobotoCondensed_400Regular",

  },

  inputstyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginRight:20,
    borderRadius: 1,
    fontSize: 20,
    fontFamily: "RobotoCondensed_400Regular",

  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "RobotoCondensed_400Regular",

  },
  discription: {
    fontSize: 20,
    color: "#7d7d7d",
    marginBottom: 20,
    lineHeight: 25,
    fontFamily: "RobotoCondensed_400Regular",

  },
  wrapper: {
    flexDirection:'row',
    paddingTop:30,
    paddingBottom: 15,   
  }, 
  btnText:{
    color:"white",
    fontSize: 20,
    fontFamily: "RobotoCondensed_400Regular",
    alignItems:'center',
  },
  buttonStyle: {
    backgroundColor:'green',
    width:160,
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:90,
    marginVertical:15,
   
    borderRadius:10,
    lineHeight:50,
    
  },


})

export default Login