// @ts-nocheck
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumber = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperation = (op) => {
    if (currentNumber === '') return;
    setOperation(op);
    setLastNumber(currentNumber);
    setCurrentNumber('');
  };

  const clear = () => {
    setCurrentNumber('');
    setLastNumber('');
    setOperation('');
  };

  const getResult = () => {
    if (currentNumber === '' || lastNumber === '') return;
    
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(lastNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(lastNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(lastNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(lastNumber) / parseFloat(currentNumber);
        break;
      default:
        return;
    }
    setCurrentNumber(result.toString());
    setLastNumber('');
    setOperation('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.historyText}>
          {lastNumber} {operation}
        </Text>
        <Text style={styles.displayText}>
          {currentNumber || '0'}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => clear()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('*')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperation('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equalButton} onPress={() => getResult()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumber('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View >
        <TouchableOpacity style={{display:'flex',flexDirection:"row",justifyContent:"center",marginBottom:10}} >
          <Text style={{color:"red",fontSize:15,fontWeight:"bold"}}>Calc by Manoj</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
  },
  historyText: {
    fontSize: 20,
    color: '#7c7c7c',
  },
  displayText: {
    fontSize: 40,
    color: '#000',
  },
  buttonsContainer: {
    flex: 0.7,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgb(86 108 88)', 
    width: '23%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  equalButton: {
    backgroundColor: '#4CAF50',
    width: '23%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  signature: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    fontWeight:"bold",
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default App;