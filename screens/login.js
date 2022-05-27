import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  TextInput

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';



const login = ({ navigation }) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}  >
        <Image

          source={require('../assets/bus.png')}
          style={styles.logo}
          resizeMode="stretch"

        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>
          Sign In!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
         <Text style={styles.text_footer}>Email </Text>
        <View style={styles.action}>

          <AntDesign
            name="user"
            color="#009387"
            size={20}
          />
          <TextInput
            placeholder="your email"
            style={styles.textInput}
            autoCapitalize="none"

          />
          <Ionicons name="checkmark-circle-outline"
            color="#009387"
            size={20} />


        </View>


        <Text style={styles.text_footer}>Password</Text> 
        <View style={styles.action}>

          <AntDesign
            name="lock"
            color="#009387"
            size={20}
          />
          <TextInput
            placeholder="your password"
            style={styles.textInput}
            autoCapitalize="none"
            
            secureTextEntry={data.secureTextEntry ? true : false}

          />

          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?

              <Ionicons name="eye-off-outline"
                color="#009387"
                size={20} />
              :

              <Ionicons name="eye-outline"
                color="#009387"
                size={20} />
            }
          </TouchableOpacity>








        </View>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Sign In </Text>
              <Ionicons name="arrow-forward"
                color="#fff"
                size={20} />
            </LinearGradient>
          </TouchableOpacity>

        </View>

        <View style={styles.footerImage}>
<Image

source={require('../assets/footerImages.png')}
style={styles.footerImg}
resizeMode="stretch"

/>
</View>
      </View>



    </View>
  )
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',

  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footerImage: {
    
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  text_footer: {
    marginTop: 10,
    color: '#05375a',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: "RobotoCondensed_400Regular",

  },
  logo: {
    width: 150,
    height: 100,
  },
  footerImg: {
    width: 250,
    height: 200,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5,
    paddingBottom:20,
  },

  textSign: {
    color: 'white',
    fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },


});


export default login