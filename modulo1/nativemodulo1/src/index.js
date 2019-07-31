/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import Todo from './components/Todo';
import './../DevToolsConfig'

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'fazer café' }, { id: 1, text: 'Tomar agua' }],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'NOVO TODO!!' }],
    });
  };

  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          {this.state.todos.map(todo => (
            <View key={todo.id} style={styles.box}>
              <Todo onPress={this.addTodo} key={todo.id} titulo={todo.text} />


            </View>
          ))}
          <View>
            <Button
              style={styles.btn}
              title="adicionar"
              onPress={this.addTodo}
            />
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#333",
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // justifyContent: "center",
    alignContent: 'center',
  },

  box: {
    // flex: 3,
    backgroundColor: '#FFE4C4',
    width: 350,
    height: 20,
    margin: 2,
    color: '#555',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: '#00008B',
    borderRadius: 45,
    borderWidth: 2,
  },

  btn: {
    // marginTop:100,
    width: 350,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    color: '#7FFF00',
  },
});
