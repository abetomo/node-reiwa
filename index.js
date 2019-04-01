'use strict';

module.exports.reiwa = function (date) {
  if (date == null) return null
  return (date.getFullYear() - 2018)
}
