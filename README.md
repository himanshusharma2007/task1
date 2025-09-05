
# JavaScript & TypeScript Practice Tasks

This repository contains 14 practice tasks implemented in three different ways:  
- native-js → using plain JavaScript functions  
- native-ts → using TypeScript functions  
- lodash-js → using Lodash library functions  

Each branch demonstrates array operations, object manipulation, destructuring, grouping, and reducing.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- (Optional) TypeScript compiler for `.ts` files:

  ```bash
  npm install -g typescript


---

## How to Use This Repo

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Switch to the branch you want to explore:

   ```bash
   git checkout native-js     # Plain JavaScript
   git checkout lodash-js     # Lodash
   git checkout native-ts     # TypeScript
   ```

3. Run a specific task by passing its number:

   ```bash
   node index.js <task-number>
   ```

   Example:

   ```bash
   node index.js 3
   ```

   Runs the task that filters members between ages 41–60.

4. For TypeScript (native-ts branch): first compile, then run

   ```bash
   npx tsc
   node dist/index.js <task-number>
   ```

---

## Tasks Covered

1. Get first names from members list
2. Convert last names to UPPERCASE
3. Filter members with age 41–60
4. Calculate average age
5. Find person with maximum age
6. Divide members into groups (young, old, noage)
7. Add a new member at specific index
8. Extract first and second members
9. Add new member at start
10. Destructure properties of an object
11. Rename properties while destructuring
12. Use rest operator for remaining properties
13. Copy and override object with spread
14. Reduce on array and object

---

## Branching Strategy

* main → Default branch (documentation only)
* native-js → Solutions with plain JavaScript
* lodash-js → Solutions using Lodash
* native-ts → Solutions with TypeScript

