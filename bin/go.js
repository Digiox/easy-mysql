#! /usr/bin/env node

var shell = require("shelljs");
shell.exec("docker compose --env-file=.env up -d");