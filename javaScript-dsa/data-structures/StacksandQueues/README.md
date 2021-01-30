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
- `npm test stack.test.js`  
- `npm test queue.test.js`  


---

### Tests

## Stacks
```
Advanced-Javascript[StacksandQueue]$ npm test stack.test.js

> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "stack.test.js"

 PASS  data-structure/StacksandQueues.js/stack.test.js
  ensuring Stack Implementation
    ✓ can push to stack (2ms)
    ✓ can push multiple to stack
    ✓ can pop from stack
    ✓ can empty stack (1ms)
    ✓ can peek
    ✓ can create stack

--------------------|----------|----------|----------|----------|-------------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------|----------|----------|----------|----------|-------------------|
All files           |    94.44 |       60 |      100 |    94.44 |                   |
 StacksandQueues.js |    93.33 |       75 |      100 |    93.33 |                   |
  stack.js          |    93.33 |       75 |      100 |    93.33 |                28 |
 linked-list        |      100 |        0 |      100 |      100 |                   |
  node.js           |      100 |        0 |      100 |      100 |                 4 |
--------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.809s, estimated 1s
Ran all test suites matching /stack.test.js/i.
```
## Queue
```
Advanced-Javascript[StacksandQueue ?]$ npm test queue.test.js

> 3-code-challenges@1.0.0 test /home/bryant/codefellows/401/data-structures-and-algorithms/Advanced-Javascript
> jest --coverage --verbose "queue.test.js"

 PASS  data-structure/StacksandQueues.js/queue.test.js
  testing Queue implementation
    ✓ can create empty queue (2ms)
    ✓ can enqueue (1ms)
    ✓ can enqueue multiple times
    ✓ can dequeue from queue (1ms)
    ✓ can peek from queue
    ✓ can empty queue

--------------------|----------|----------|----------|----------|-------------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------|----------|----------|----------|----------|-------------------|
All files           |    95.24 |    71.43 |      100 |    95.24 |                   |
 StacksandQueues.js |    94.44 |    83.33 |      100 |    94.44 |                   |
  queue.js          |    94.44 |    83.33 |      100 |    94.44 |                26 |
 linked-list        |      100 |        0 |      100 |      100 |                   |
  node.js           |      100 |        0 |      100 |      100 |                 4 |
--------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.791s, estimated 1s
Ran all test suites matching /queue.test.js/i.
```
---

---
### Big O


| Time | Space |
| :----------- | :----------- |
| O(n) | O(n) |

---

### Change Log
1.4: *Ques tests created and passing* - 24 Oct 2020   
1.3: *Stacks tests created and passing* - 24 Oct 2020   
1.2: *Stacks and Ques methods created* - 24 Oct 2020   
1.1: *Node, Stacks and Ques classes created* - 24 Oct 2020    

---