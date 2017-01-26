'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

const angular = require('angular');
const uiRouter = require('angular-ui-router');

const routesApp = angular.module('routesApp', [uiRouter]);
