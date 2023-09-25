//Import
import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';


//En demo af hvordan siden kan se ud, men hvor værdierne ikke er dynamiske endnu
export default function View2()  {

  return (
    <View>
      
        <Text style={styles.text}>
              Name: Name of artist
            </Text>
            <Text style={styles.text}>
              Price range: 100-500 kr
            </Text>
            <Text style={styles.text}>
              Typical size: 30x30 - 70x70 cm2
            </Text>
            <Text style={styles.text}>
              Category: Paintings
            </Text>
            
            <Text style={styles.text}>
              Places to buy: art.com, modernpaintings.com, picturesAndFrames.com
            </Text>
            <Text style={styles.text}>
              Category: Paintings
            </Text>
            <Text style={styles.text}>
              Work for sale at the moment: 
            </Text>
            <View style={styles.images}>
              <Image
                source={require('./assets/1.jpg')}
                style={styles.userImage}
              />
              <Image
              source={require('./assets/2.jpg')}
              style={styles.userImage}
              />
              
            </View>
            <Button style={styles.button} title="Buy" onPress={() => alert("This could also have worked")}/>
      
    </View>
  );
}

//Styling af siden
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    paddingTop: 4,
    textAlign: "center",
    marginBottom: 15,
  },
  scrollView: {
    height: 350,
    width: "60%",
  },
  userContainer: {
    paddingTop: 10,
  },
  text: {
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 5,
    paddingTop: 10,
  },
  userImage: {
    width: 360,
    height: 200,
    borderRadius: 10,
    marginRight: 15,
  },
  images: {
    flexDirection: 'row',
    paddingBottom: 50,
  },
  button: {
    width: 40,
    color: 'red',
  },
  errorMsg: {
    marginTop: 10,
    color: 'red',
  },
});

