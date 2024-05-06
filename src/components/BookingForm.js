import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    RadioGroup,
    VStack,
    Radio,
    Select,
    NumberInputField,
    NumberInput,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    Button,
  } from '@chakra-ui/react'

const BookingForm = () => {
  return (
    <FormControl>
        <FormLabel>Date</FormLabel>
            <Input type='Date'/>
        <FormLabel as={'legend'}>Time</FormLabel>
            <Select placeholder='Choose Time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            </Select>

        <FormLabel>Number of guests</FormLabel>
            <NumberInput  min="1" max="10">
                <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
            </NumberInput>

            <FormControl>
        <FormLabel>Occasion</FormLabel>
            <Select placeholder='Select Occasion'>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
        </FormControl>
        <Button type='submit'>Make Your reservation</Button>
    </FormControl>
  )
}

export default BookingForm