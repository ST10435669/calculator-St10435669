import { useState } from 'react'; 
import {
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	StyleSheet
} from 'react-native'; 

function App(){
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [ans, setAnswer] = useState('');

  const handleAddTask = () => {
    if (number1 !== '' && number2 !== '') {
      const ans = Number(number1) + Number(number2);
      setAnswer(ans); 
    } else {
      setAnswer('Input both numbers');
    }
  };

  const handleMinusTask = () => {
    if (number1 !== '' && number2 !== '') {
      const ans = Number(number1) - Number(number2);
      setAnswer(ans); 
    } else {
      setAnswer('Input both numbers');
    }
  };

  const handleMultiplicationTask = () => {
    if (number1 !== '' && number2 !== '') {
      const ans = Number(number1) * Number(number2);
      setAnswer(ans); 
    } else {
      setAnswer('Input both numbers');
    }
  };

  const handleDivisionTask = () => {
    if (number2 != 0) {
      const result = Number(number1) / Number(number2);
      setAnswer(result.toString());
    } else {
      setAnswer('Error! Division by zero');
    }
  };

  const handlePowerTask = () => {
    const ans = Number(number1) ** Number(number2);
    setAnswer(ans); 
  };

  const handleSquareRootTask = () => {
    const ans = Math.sqrt(Number(number1));
    setAnswer(ans); 
  };

	return (
		<View style={styles.container}> 
			<Text style={styles.heading}>Calculator App</Text>
			<View style={styles.inputContainer}> 
				<TextInput 
					style={styles.input}
					placeholder="0"
					value={number1}
					onChangeText={(number1) => setNumber1(number1)} />
				</View> 
        	<View style={styles.inputContainer}> 
				<TextInput 
					style={styles.input}
					placeholder="0"
					value={number2}
					onChangeText={(number2) => setNumber2(number2)} />
				</View> 

        <View style={styles.horizontalLayout}>
				<TouchableOpacity 
					style={styles.addButton}
					onPress={handleAddTask}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity> 

        <TouchableOpacity 
					style={styles.addButton}
					onPress={handleMinusTask}>
					<Text style={styles.addButtonText}>-</Text>
				</TouchableOpacity> 

        <TouchableOpacity 
					style={styles.addButton}
					onPress={handleMultiplicationTask}>
					<Text style={styles.addButtonText}>*</Text>
				</TouchableOpacity> 

        <TouchableOpacity 
					style={styles.addButton}
					onPress={handleDivisionTask}>
					<Text style={styles.addButtonText}>/</Text>
				</TouchableOpacity> 

        <TouchableOpacity 
					style={styles.addButton}
					onPress={handlePowerTask}>
					<Text style={styles.addButtonText}> ^ </Text>
				</TouchableOpacity> 

        <TouchableOpacity 
					style={styles.addButton}
					onPress={handleSquareRootTask}>
					<Text style={styles.addButtonText}>√</Text>
				</TouchableOpacity> 
			</View>

			<View style={styles.answerContainer}> 	
					<Text>
						{ans}
					</Text>
			</View>
		</View>	
	);
}

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      padding: 20,    	
   },

   answerContainer: {
      marginTop: 20,
      fontSize: 24,
      height: 30,
   }, 
   answer: {
     marginTop: 20,
     fontSize: 40,
     height: 40,
     textAlign: 'center',
   },
   horizontalLayout: {
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     marginTop: 20,
   },

    heading: {
      fontSize: 24, 
      marginBottom: 10, 
   },
   inputContainer:{
     flexDirection: 'row',
     alignItems: 'center',
     marginTop: 4,
   },
   input: {
      flex: 1, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal: 10, 
   },
   addButton: {
      width: 40, 
      height: 50, 
      backgroundColor: '#4CAF50',
      justifyContent: 'center', 
      alignItems: 'center', 
   },
   addButtonText: {
      fontSize: 24, 
      color: '#fff', 
   },
});

export default App;
