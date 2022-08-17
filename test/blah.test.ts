import { sum, centrality } from '../src';
import { DataSet } from 'vis-data';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('centrality', () => {
  const nodes = new DataSet([{id: 1}, {id: 2}, {id: 3}])
  const edges = new DataSet([{id: 1, from: 1, to: 2}, {id: 2, from: 2, to: 3}])

  it('works', () => {
    expect(centrality(nodes, edges)).toEqual(1);
  })
})
