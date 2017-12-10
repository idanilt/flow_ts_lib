// @flow

import {greeting} from 'typescript-application/dist/demo';

describe('Typescript suite', () =>{
  it('Greeting should Hello World', ()=>{
    expect(greeting).toBe("Hello World");
  });
});

