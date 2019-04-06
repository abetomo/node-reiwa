'use strict'

const reiwa = require('./').reiwa
const test = require('tape')

test('reiwa is null', (t) => {
  const tests = [
    '2019-04-01',
    '2019-04-30',
    '2019-03-15',
    '2018-10-21'
  ]
  for (const date of tests) {
    t.equal(reiwa(new Date(date)), null, date)
  }

  t.end()
})

test('reiwa', (t) => {
  const tests = [{
    date: '2019-05-01',
    expected: 1
  }, {
    date: '2019-05-02',
    expected: 1
  }, {
    date: '2020-01-01',
    expected: 2
  }, {
    date: '2022-08-21',
    expected: 4
  }, {
    date: '2030-11-30',
    expected: 12
  }]
  for (const testCase of tests) {
    t.equal(
      reiwa(new Date(testCase.date)),
      testCase.expected,
      JSON.stringify(testCase)
    )
  }

  t.end()
})
