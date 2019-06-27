import { Game } from './rock-paper-scissor';

test('empty game, no one want to play!', () => {
  const game = new Game('', '');
  expect(() => {
    game.win()
  }).toThrow(new Error('there is no game without a move!'));
});

test('rock beats scissors', () => {
  const game = new Game('rock', 'scissors');
  expect(game.win()).toEqual('rock');
});

test('scissors beats paper', () => {
  const game = new Game('scissors', 'paper');
  expect(game.win()).toEqual('scissors');
});

test('paper beat rock', () => {
  const game = new Game('paper', 'rock');
  expect(game.win()).toEqual('paper');
});

test('rock loose from paper', () => {
  const game = new Game('rock', 'paper');
  expect(game.win()).toEqual('paper');
});

test('scissors loose from rock', () => {
  const game = new Game('scissors', 'rock');
  expect(game.win()).toEqual('rock');
});

test('paper loose from scissors', () => {
  const game = new Game('paper', 'scissors');
  expect(game.win()).toEqual('scissors');
});

test('paper draw with paper', () => {
  const game = new Game('paper', 'paper');
  expect(game.win()).toEqual('draw');
});

test('rock draw with rock', () => {
  const game = new Game('rock', 'rock');
  expect(game.win()).toEqual('draw');
});

test('scissors draw with scissors', () => {
  const game = new Game('scissors', 'scissors');
  expect(game.win()).toEqual('draw');
});

test('invalid moves', () => {
  const game = new Game('pluto', 'pippo');
  expect(() => {
    game.win()
  }).toThrow(new Error('Unknown move!'));
});

test('invalid moves', () => {
  const game = new Game('pluto', 'rock');
  expect(() => {
    game.win()
  }).toThrow(new Error('Unknown move!'));
});

test('invalid moves', () => {
  const game = new Game('paper', 'pippo');
  expect(() => {
    game.win()
  }).toThrow(new Error('Unknown move!'));
});
