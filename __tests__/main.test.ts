import { alertMessage, Options } from '../src/main';


describe('alertMessage', () => {
  const mockOutput = {
    calls: [],
    log: function (msg: string) {
      mockOutput.calls.push(msg);
    }
  }

  beforeEach(() => {
    mockOutput.calls = [];
  });

  const alertTest = (options: Options, expected: string[]) => {
    alertMessage(options, mockOutput.log);
    const output = mockOutput.calls[0];
    expected.forEach((value) => {
      expect(output).toContain(value);
    });
  };

  it('logs default message', () => {
    alertTest({ message: 'foo bar' }, ['foo bar', 'ERROR']);
  });

  it('logs SUCCESS', () => {
    alertTest({ messageType: 'success', message: 'yes' }, ['yes', 'SUCCESS']);
  });

  it('logs INFO', () => {
    alertTest({ messageType: 'info', message: 'some info' }, ['some info', 'INFO']);
  });

  it('logs WARNING', () => {
    alertTest({ messageType: 'warning', message: 'imwarningya' }, ['imwarningya', 'WARNING']);
  });

  it('logs ERROR', () => {
    alertTest({ messageType: 'error', message: 'ohno' }, ['ohno', 'ERROR']);
  });

  it('logs custom prefix', () => {
    alertTest({ messageType: 'info', message: 'custom info', label: '>>>x' }, ['custom info', '>>>x']);
  });

});
