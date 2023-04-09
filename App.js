import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Output = styled.View`
  background: #333;
  width: 100%;
  align-items: center;
`

const OutputValue = styled.Text`
  font-weight: 500;
  font-size: 32px;
  color: #fff;
  padding: 5px 0;
`

const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 40px;
  background-color: #333;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  font-size: 24px;
  color: #fff;
`

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [operand, setOperand] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)

  function handleNumberInput(number) {
    if (displayValue === '0') {
      setDisplayValue(number.toString())
    } else {
      setDisplayValue(displayValue + number.toString())
    }
  }

  function handleOperatorInput(operator) {
    const inputValue = parseFloat(displayValue)
    if (previousValue === null) {
      setPreviousValue(inputValue)
      setDisplayValue('0')
    } else {
      switch (operand) {
        case '+':
          setPreviousValue(previousValue + inputValue)
          break
        case '-':
          setPreviousValue(previousValue - inputValue)
          break
        case '*':
          setPreviousValue(previousValue * inputValue)
          break
        case '/':
          setPreviousValue(previousValue / inputValue)
          break
        default:
          break
      }
      setDisplayValue(previousValue.toString())
    }
    setOperand(operator)
  }

  function handleEqualsInput() {
    const inputValue = parseFloat(displayValue)
    switch (operand) {
      case '+':
        setDisplayValue((previousValue + inputValue).toString())
        break
      case '-':
        setDisplayValue((previousValue - inputValue).toString())
        break
      case '*':
        setDisplayValue((previousValue * inputValue).toString())
        break
      case '/':
        setDisplayValue((previousValue / inputValue).toString())
        break
      default:
        break
    }
    setPreviousValue(null)
    setOperand(null)
  }

  function handleClearInput() {
    setDisplayValue('0')
    setPreviousValue(null)
    setOperand(null)
  }

  return (
    <Container>
      <Output>
        <OutputValue>{displayValue}</OutputValue>
      </Output>
      <ButtonContainer>
        <Button onPress={() => handleNumberInput(1)}>
          <ButtonText>1</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(2)}>
          <ButtonText>2</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(3)}>
          <ButtonText>3</ButtonText>
        </Button>
        <Button onPress={() => handleOperatorInput('+')}>
          <ButtonText>+</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(4)}>
          <ButtonText>4</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(5)}>
          <ButtonText>5</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(6)}>
          <ButtonText>6</ButtonText>
        </Button>
        <Button onPress={() => handleOperatorInput('-')}>
          <ButtonText>-</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(7)}>
          <ButtonText>7</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(8)}>
          <ButtonText>8</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(9)}>
          <ButtonText>9</ButtonText>
        </Button>
        <Button onPress={() => handleOperatorInput('*')}>
          <ButtonText>*</ButtonText>
        </Button>
        <Button onPress={() => handleNumberInput(0)}>
          <ButtonText>0</ButtonText>
        </Button>
        <Button onPress={handleClearInput}>
          <ButtonText>Clear</ButtonText>
        </Button>
        <Button onPress={handleEqualsInput}>
          <ButtonText>=</ButtonText>
        </Button>
        <Button onPress={() => handleOperatorInput('/')}>
          <ButtonText>/</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}
