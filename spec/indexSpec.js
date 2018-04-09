'use strict';

const convert = require('../index.js');

describe('json-to-prolog', () => {
  it('should return an empty string if the object is empty', () => {
    const json = {};
    expect(convert.toProlog(json)).toEqual('');
  });
  it('should convert an object with one predicate', () => {
    const json = {
      parent: [
        { parent: 'mike', child: 'marcia' }
      ]
    };
    const prolog = `% parent(Parent,Child).
parent(mike,marcia).
`;
    expect(convert.toProlog(json)).toEqual(prolog);
  });
  it('should return an empty string if the predicate has no facts', () => {
    const json = {
      parent: []
    };
    expect(convert.toProlog(json)).toEqual('');
  });
  it('should convert strings enclosed in single quotes', () => {
    const json = {
      airport: [
        { code: '\'YYZ\'', city: '\'Toronto\'' },
        { code: '\'SCL\'', city: '\'Santiago\'' }
      ]
    };
    const prolog = `% airport(Code,City).
airport('YYZ','Toronto').
airport('SCL','Santiago').
`;
    expect(convert.toProlog(json)).toEqual(prolog);
  });
  it('should convert a predicate name to camelCase', () => {
    const json = {
      with_underscore: [
        { val: 1 }
      ],
      'with-dash': [
        { val: 2 }
      ]
    };
    const prolog = `% withUnderscore(Val).
withUnderscore(1).
% withDash(Val).
withDash(2).
`;
    expect(convert.toProlog(json)).toEqual(prolog);
  });
  it('should accept decimal numbers', () => {
    const json = {
      weather: [
        { city: '\'Santiago\'', temperature: 23.5 }
      ]
    };
    const prolog = `% weather(City,Temperature).
weather('Santiago',23.5).
`;
    expect(convert.toProlog(json)).toEqual(prolog);
  });
});
