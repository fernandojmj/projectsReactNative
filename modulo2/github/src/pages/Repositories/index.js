import React, {Component} from 'react';

import {View} from 'react-native';
import api from '../../services/api';
import AsyncStorange from '@react-native-community/async-storage';
import moment from 'moment';

import {
  Header,
  Container,
  Avatar,
  Name,
  Data,
  Repos,
  Repositorio,
  Linha,
  Button,
} from './styles';

// import { Container } from './styles';

export default class Repositories extends Component {
  static navigationOptions = ({navigation}) => ({
    user: navigation.getParam('username'),
    userGit: navigation.getParam('userGit'),
  });

  state = {
    repositorios: [],
    userGit: '',
  };

  voltar = async () => {
    console.log('Voltando');
    await AsyncStorange.removeItem('@Githuber:username');
    const {navigation} = this.props;
    navigation.navigate('Welcome');
  };

  async componentDidMount() {
    const userLoggend = await AsyncStorange.getItem('@Githuber:username');
    console.log('buscando respositorios');
    const {navigation} = this.props;
    const response = await api.get(`users/${userLoggend}/repos`);
    console.log(navigation.getParam('userGit'));
    if (navigation.getParam('userGit') === undefined) {
      const response2 = await api.get(`/users/${userLoggend}`);
      console.log('buscando dados usuario');
      this.setState({
        userGit: response2.data,
      });
    } else {
      this.setState({
        userGit: navigation.getParam('userGit'),
      });
    }
    this.setState({
      repositorios: response.data,
    });

    // console.log(this.state.repositorios);
    // console.log('--------------------------------');
    // console.log(this.state.userGit);
  }

  render() {
    const {repositorios} = this.state;
    const {userGit} = this.state;

    const create_at = moment(userGit.created_at).format('DD-MM-YYYY hh:mm:ss');
    const updated_at = moment(userGit.updated_at).format('DD-MM-YYYY hh:mm:ss');
    return (
      <Container>
        <Header>
          <Avatar source={{uri: userGit.avatar_url}}></Avatar>
          <Name>{userGit.login}</Name>
          <Data>Criado: {create_at}</Data>
          <Data>Atualizado: {updated_at}</Data>
        </Header>
        <Repos
          data={repositorios}
          keyExtractor={repo => String(repo.id)}
          renderItem={({item}) => (
            <Linha>
              <Repositorio>{item.name}</Repositorio>
            </Linha>
          )}
        />
        <Linha>
          <Button onPress={this.voltar} title="Voltar" />
        </Linha>
      </Container>
    );
  }
}
