import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, StyleSheet, Button, Alert } from 'react-native';

//import {URL} from './const';
import {URL} from './const';


//Funktion der henter data fra ./const hvor den indhenter et navn hver gang siden indlæses
//Resten af siden er ikke dynamisk endnu, men indeholder de knapper der skal bruges til at like/dislike og gå til næste kunstner

export default function View1() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState("2");

  useEffect(() => {
    loadUsers();
  }, [amount]);

  const loadUsers = async () => {
    try {
      const response = await fetch(URL + 1);
      const json = await response.json();
      setUsers(json.results);
    } catch (error) {
      setMsg(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kunstner</Text>

      <ScrollView style={styles.scrollView}>
        {users.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.userName}>
              Name: {user.name.first} {user.name.last}
            </Text>
            <Image
              source={require('./assets/pictureframes-lowres-7689.jpg')}
              style={styles.userImage}
            />
            
            <Button style={styles.button} title="Go To Details" onPress={() => alert("This could have worked")} />

            <Button style={styles.like} color={'green'} title="Like" onPress={() => alert("This could also have worked")}/>
            <Button style={styles.like} color={'red'} title="Dislike" onPress={() => alert("This could also have worked")}/>
          
            
          </View>
          
        ))}
      </ScrollView>

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
  userName: {
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 480,
    height: 300,
    borderRadius: 25,
  },
  errorMsg: {
    marginTop: 10,
    color: 'red',
  },
  button: {
    paddingTop: 200,
    width: 480,
    color: 'red',
  },
  like: {
    paddingTop: 200,
    flexDirection: 'row',
  },
});

