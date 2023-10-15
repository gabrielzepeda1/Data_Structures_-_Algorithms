
// Node A: Node B 
// Node B: Node A, Node C 
// Node C: Node B

var undirectedG = { 
    NodeA: ['NodeB'],
    NodeB: ['NodeA', 'NodeC'],
    NodeC: ['NodeB'],
}

var undirectedGArr = { 
    'Node A':[1], //Node A
    'Node B':[0, 2], // Node B
    'NodeC':[1] // Node C
}