#! /usr/bin/env node

var shell = require("shelljs");
shell.exec("docker compose -f docker-compose.yml --env-file=.env up -d");