import React, {useEffect, useState, useMemo} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

//Hooks are write inside the main function

const App = () => {
  console.log('gsfdg');
  //useState
  const [count, setCount] = useState(0); //  initial satate is 0

  const [number, setNumber] = useState(0);

  // const [object, setObject] = useState({}); // initial state is empty object
  // const [state, setState] = useState({data: null, loading: true});
  const [fullname, setFullname] = useState({firtName: '', lastName: ''}); // initial state first name and last name epmty string

  //useEffect

  useEffect(() => {
    console.log('Initial Render'); // this useEffect  Run on Every rende
  }, []);

  useEffect(() => {
    console.log('count');
  }, [count]); // Runs on the first render and  count change

  useEffect(() => {
    console.log('Full name');
  }, [fullname.firtName]); // Runs on the first render and  input text to first name textbox

  // useMemo

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);

  // function slowFunction(num) {
  //   console.log('calling Double function');
  //   for (let i = 0; i <= 10000000000; i++) {}
  //   return num * 2;
  // }
  // const useFetch = url => {
  // const [state, setState] = useState({data: null, loading: true});

  //   useEffect(() => {
  //     setState(state => ({data: state.data, loading: true}));
  //     fetch(url)
  //       .then(x => x.text())
  //       .then(y => {
  //         setState({data: y, loading: false});
  //       });
  //   }, [url]);
  //   return state;
  // };

  // const {data, loading} = useFetch(`http://numbersapi.com/trivia`);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const onChangeText = () => {
    setFullname({firtName: 'Gajitha', lastName: 'kavinda'});
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>React Hooks</Text>
      <View style={styles.button}>
        <Button title="Increment" onPress={increment} />
      </View>
      <View tyle={styles.button}>
        <Button title="Decrement" onPress={decrement} />
      </View>
      <Text style={styles.text}>Conut:{count}</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          fullname={fullname.firtName}
          placeholder="First name"
        />
        <TextInput
          style={styles.input}
          fullname={fullname.lastName}
          placeholder="Lasst name"
        />
      </View>
      {/* <View tyle={styles.button}>
        <Button title="Get Data" onPress={useFetch} />
      </View>
      <Text>{state.data}</Text> */}
      {/* <TextInput
        onChangeText={slowFunction}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 20,
  },
  button: {
    flex: 0.1,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
