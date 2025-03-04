import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Login() {
    const [email, setEmail] = useState()
      const [pw, setPw] = useState()
  
  
  
      return(
          <SafeAreaView>
  
              <TextInput value={email} onChangeText={setEmail} label={'Email'} left={<TextInput.Icon icon={'email'}/>}/>
              <TextInput value={pw} onChangeText={setPw} label={'Password'} left={<TextInput.Icon icon={'lock'}/>}/>
  
              <Button mode="contained">
                  Login
              </Button>
  
  
  
          </SafeAreaView>
      )
  }