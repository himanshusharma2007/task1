

````md
# JavaScript & TypeScript Practice Tasks

This repository contains 14 practice tasks implemented in different ways (plain JavaScript, Lodash, and TypeScript).  
Each task demonstrates core programming concepts like array operations, object manipulation, destructuring, grouping, and reducing.

---


## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- (Optional) TypeScript compiler if working with `.ts` files:

  ```bash
  npm install -g typescript

---

## How to Run

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies (if `package.json` is present):

   ```bash
   npm install
   ```

3. Run a specific task by passing its number:

   ```bash
   node index.js <task-number>
   ```

   Example:

   ```bash
   node index.js 3
   ```

   → Runs the task that filters members between ages 41–60.

4. If using TypeScript (branch: native-ts), first compile:

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
13. Copy + override object with spread
14. Reduce on array and object
