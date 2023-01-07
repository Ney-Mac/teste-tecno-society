import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Home({navigation}) {

  return (
    <View style={styles.boxHome}>
          
          <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Tecno Society</Text>
          </View>

          <View style={styles.boxMain}>
            <View style={styles.boxCreateAccount}>
                
                <Text style={styles.text}>Não possiu uma conta?</Text>
                
                <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('CreateAccountPage')}>
                    <Text style={styles.button}>Criar conta</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.boxLogin}>
                
                <Text style={styles.text}>Já possiu uma conta?</Text>
                
                <TouchableOpacity style={styles.boxButton}  onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.button}>Fazer login</Text>
                </TouchableOpacity>
            
            </View>
          </View>

        </View>
  );
}
