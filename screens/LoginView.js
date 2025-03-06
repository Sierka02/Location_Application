import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginUser } from "../firebase/FirebaseAuthController";



export default function Login() {
    const [email, setEmail] = useState('')
      const [pw, setPw] = useState('')
  
      async function handleLogin() {
        const result = await loginUser(email, pw)
    }
    
  
      return(
          <SafeAreaView>
  
              <TextInput value={email} onChangeText={setEmail} label={'Email'} left={<TextInput.Icon icon={'email'}/>}/>
              <TextInput value={pw} onChangeText={setPw} label={'Password'} left={<TextInput.Icon icon={'lock'}/>}/>
  
              <Button mode="contained" onPress={handleLogin}>
                  Login
              </Button>


  
  
  
          </SafeAreaView>
      )
  }