import * as chalk from "chalk";

export type MessageType = 'success' | 'info' | 'warning' | 'error';

export interface Options {
  message: string;
  messageType?: MessageType;
  label?: string;
}

const defaultOptions: Options = {
  message: 'Oops, forgot the message',
  messageType: 'error'
};

type OutputFunc = (message: string) => void;

export function alertMessage(options: Options, output: OutputFunc = console.log): void {
  const { message, messageType, label } = { ...defaultOptions, ...options };
  const colour = {
    success: chalk.green,
    info: chalk.blue,
    warning: chalk.yellow,
    error: chalk.red
  }[messageType];
  output(`${colour.inverse(` ${label || messageType.toUpperCase()} `)} ${message}`);
}
