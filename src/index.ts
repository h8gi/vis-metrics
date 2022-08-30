import { DataInterfaceEdges, DataInterfaceNodes } from 'vis-network';

export const centrality = (nodes: DataInterfaceNodes, edges: DataInterfaceEdges) => {
  edges.forEach((edge, id) => {
    console.log(edge, id)
  })

  nodes.forEach((node, id) => {
    console.log(node, id)
  })

  return 1;
}

export const density = (nodes: DataInterfaceNodes, edges: DataInterfaceEdges) => {
  return edges.length / (nodes.length * (nodes.length - 1))
}

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
