import * as React from 'react';
import api from './api';

export type Props = {};
export type State = {
  message: string,
};

export default class Message extends React.Component<Props, State> {
  state = {
    message: '',
  };

  async componentDidMount() {
    const response = await api.message();

    this.setState({
      message: response.message,
    });
  }

  render() {
    const { message } = this.state;

    return (
      <span>{message}</span>
    );
  }
}
