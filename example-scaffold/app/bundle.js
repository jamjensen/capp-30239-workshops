!function i(u,f,d){function c(t,e){if(!f[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=f[t]={exports:{}};u[t][0].call(r.exports,function(e){var n=u[t][1][e];return c(n||e)},r,r.exports,i,u,f,d)}return f[t].exports}for(var a="function"==typeof require&&require,e=0;e<d.length;e++)c(d[e]);return c}({1:[function(e,t,n){!function(e,n){void 0!==t?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this.domready=n()}(0,function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return i||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),i=1;e=n.shift();)e()}),function(e){i?setTimeout(e,0):n.push(e)}})},{}],2:[function(e,n,t){"use strict";e("domready")(function(){fetch("./data/example.json").then(function(e){return e.json()}).then(function(e){return n=e,console.log(n),void console.log("Hi!");var n})})},{domready:1}]},{},[2]);