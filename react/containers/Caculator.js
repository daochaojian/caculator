import React from 'react';
import { Navigator, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles/caculator';

class Caculator extends React.PureComponent {
  static propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator).isRequired,
  }
  constructor() {
    super();
    this.state = {
      preNumber: '',
      nextNumber: '',
      result: '',
      operator: undefined,
    };
  }
  componentWillMount() {
  }
  caculate = () => {
    const operator = this.state.operator;
    const preNumber = this.state.preNumber;
    const nextNumber = this.state.nextNumber;
    console.log(operator);
    if (operator !== undefined && preNumber !== '' && nextNumber !== '') {
      switch (operator) {
        case '+':
          this.setState({ result: parseFloat(preNumber, 10) + parseFloat(nextNumber, 10) });
          break;
        case '-':
          this.setState({ result: parseFloat(preNumber, 10) - parseFloat(nextNumber, 10) });
          break;
        case '×':
          this.setState({ result: parseFloat(preNumber, 10) * parseFloat(nextNumber, 10) });
          break;
        case '÷':
          this.setState({ result: parseFloat(preNumber, 10) / parseFloat(nextNumber, 10) });
          break;
        default:
      }
    }
  };
  handleOperator = (operator) => {
    this.setState({ operator });
    // if (operator !== undefined && this.state.preNumber !== '' && this.state.nextNumber !== '') {
    //   this.caculate();
    // }
  };
  input = (number) => {
    let preNumber = this.state.preNumber;
    let nextNumber = this.state.nextNumber;
    if (this.state.operator !== undefined && this.state.preNumber !== '') {
      // 是否输入
      this.setState({ nextNumber: nextNumber += number.toString() });
    } else {
      this.setState({ preNumber: preNumber += number.toString() });
    }
  };
  render() {
    const height = Dimensions.get('window').height / 10;
    const preNumber = this.state.preNumber ? `${this.state.preNumber}` : null;
    const nextNumber = this.state.nextNumber ? `${this.state.nextNumber}` : null;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{preNumber}
          </Text>
          <Text style={styles.screenText}>{this.state.operator ? this.state.operator : null}
          </Text>
          <Text style={styles.screenText}>{nextNumber}
          </Text>
          <Text style={styles.screenText}>{this.state.result
            ? this.state.result : null}
          </Text>
        </View>
        <View style={styles.keyBord}>
          <View style={[styles.row, { height }]}>
            <TouchableOpacity style={[styles.cell, { height }]}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, { height }]}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.handleOperator('+')}
            >
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.handleOperator('-')}
            >
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { height }]}>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(1)}
            >
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(2)}
            >
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(3)}
            >
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.handleOperator('×')}
            >
              <Text style={styles.text}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { height }]}>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(4)}
            >
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(5)}
            >
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(6)}
            >
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.handleOperator('÷')}
            >
              <Text style={styles.text}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { height }]}>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(7)}
            >
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(8)}
            >
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(9)}
            >
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
            >
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { height }]}>
            <TouchableOpacity style={[styles.cell, { height }]}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input(0)}
            >
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={() => this.input('.')}
            >
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cell, { height }]}
              onPress={this.caculate}
            >
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Caculator;
