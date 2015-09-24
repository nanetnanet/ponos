'use strict';

var bunyan = require('bunyan');
/**
 * Bunyan logger for ponos.
 * @author Bryan Kendall
 * @module ponos:logger
 */
module.exports = bunyan.createLogger({
  name: 'ponos',
  streams: getStreams()
});

// Expose get streams for unit testing
module.exports.getStreams = getStreams;

/**
 * Streams for ponos's bunyan logger.
 * @return {array} An array of streams for the bunyan logger
 */
function getStreams () {
  var streams = [{
    level: process.env.LOG_LEVEL_STDOUT,
    stream: process.stdout
  }];

  return streams;
}