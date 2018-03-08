import { cons } from 'hexlet-pairs';
import * as core from '../index';

const gameData = {
  introQuestion: () => console.log('Answer "yes" if number even otherwise answer "no".'),

  getRoundQuestion: () => {
    const question = core.getRandomInt(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    const pair = cons(question, answer);
    return pair;
  },
};

export default () => {
  core.gameLauncher(gameData);
};
