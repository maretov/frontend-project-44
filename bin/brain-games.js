#!/usr/bin/env node
import { getUserName, sayWelcome, sayHello } from '../src/cli.js';

sayWelcome();
const userName = getUserName();
sayHello(userName);
