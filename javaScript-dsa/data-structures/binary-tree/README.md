# Daily Code Challenge Stacks and Ques Library

## Perfect Sequence
*Author: Bryant Davis*


---

### Problem Domain

Create a Stack and a Queue DLL.
Create the ability to insert a new node, remove a node and peek the first node.
---

### Inputs and Expected Outputs

| Input | Expected Output |
| :----------- | :----------- |

---

---
### Setup
- `npm init`  
- `npm i -y`  
- `npm test tree.test.js`  


---

### Tests

## Tree
```
> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "tree.test.js"

 PASS  data-structure/tress/tree.test.js
  testing trees
    ✓ PreOrder (2ms)
    ✓ PostOrder (1ms)
    ✓ PostOrder
    ✓ Breadth (1ms)

-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |     72.5 |    60.53 |    64.29 |     72.5 |                   |
 StacksandQueues |    11.11 |        0 |        0 |    11.11 |                   |
  queue.js       |    11.11 |        0 |        0 |    11.11 |... 29,30,34,35,37 |
 linked-list     |    33.33 |        0 |        0 |    33.33 |                   |
  node.js        |    33.33 |        0 |        0 |    33.33 |               5,6 |
 tress           |    93.22 |    74.19 |      100 |    93.22 |                   |
  node.js        |      100 |        0 |      100 |      100 |                 4 |
  trees.js       |    92.73 |    76.67 |      100 |    92.73 |       13,35,56,80 |
-----------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.733s
Ran all test suites matching /tree.test.js/i.
Advanced-Javascript[breadth-first !]$ 
```

---

---
### Big O


| Time | Space |
| :----------- | :----------- |
| O(n) | O(n) |

---

### Change Log
1.3: *Added find Max value method and test* - 4 November 2020
1.2: *Added breadth traversal method and a breadth traversal test* - 4 November 2020
1.1: *Node, Tree classes created. Each method created and tests passing - 2 Nov 2020    

---