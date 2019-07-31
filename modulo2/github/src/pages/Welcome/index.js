import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import api from '../../services/api';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUsename = async (username) => {
    const user = await api.get(`/users/${username}`);
    console.log(user);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });
    try {
      console.log(username);
      await this.checkUsename(username);
      await this.saveUser(username);
      navigation.navigate('Repositories');
    } catch (error) {
      this.setState({ loading: false, error: true });
      console.log(error);
      console.log('Usuario não existe');
    }
  };

  render() {
    const { username, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.text}>Digite seu usuario do GitHUB</Text>

        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Usuario"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>

          {error && <Text style={styles.error}>Usuario não existe</Text>}
        </View>
      </View>
    );
  }
}
