import { FormControl } from '@mui/material';
import React from 'react';
import { Component, ReactNode } from 'react';
import Input from './inputs';
import NextButton from './next';
import Selector from './selects';

class Control extends Component {
  public static Input = Input;
  public static Select = Selector;
  public static NextButton = NextButton;

  render(): ReactNode {
    return <FormControl variant="standard">{this.props.children}</FormControl>;
  }
}

export default Control;
