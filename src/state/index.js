import { combineReducers } from 'redux';
import app from './app';
import todos from './todos';
import todoslog from './log';

export default combineReducers({ app, todos, todoslog });
