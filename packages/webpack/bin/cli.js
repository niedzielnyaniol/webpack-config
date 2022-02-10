#!/usr/bin/env node

const [,, ...args] = process.argv;
const script = args[0];

// eslint-disable-next-line import/no-dynamic-require
const run = require(`../scripts/${script}`);

run();
