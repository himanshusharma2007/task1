// index.js
const _ = require("lodash");

// 1. Get an array of first names of everyone.
function getFirstNames(members) {
  const firstNames = _.map(members, (m) => _.first(m.name.split(" ")));
  console.log(firstNames);
}

// 2. Convert everyone’s last names to UPPERCASE in the given array of objects.
function updateLastNamesToUpperCase(members) {
    const updated = _.map(members, (m) => {
        const parts = _.words(m.name); // safer split
        if (parts.length > 1) {
          const last = _.toUpper(_.last(parts));
          return { ...m, name: [..._.initial(parts), last].join(" ") };
        }
        return m;
      });
      
  console.log(updated);
}


// 3. Get entries where age is between 41–60.
function ageBetween41And60(members) {
  const result = _.filter(members, (m) => m.age >= 41 && m.age <= 60);
  console.log(result);
}

// 4. Get the average age.
function getAverageAge(members) {
  const ages = _.map(_.filter(members, "age"), "age");
  const avg = _.mean(ages);
  console.log(Number(avg.toFixed(2)));
}

// 5. Get the person with the maximum age.
function getPersonWithMaxAge(members) {
  const max = _.maxBy(members, "age");
  console.log(max);
}

// 6. Divide persons into three groups.
function divideIntoGroups(members) {
    const groups = _.groupBy(members, (m) => {
      if (!m.age) return "noage";
      if (m.age < 35) return "young";
      return "old";
    });
  
    console.log(groups);
  }
  

// 7. Add a new member to the same members array instance at index 2.
function addNewMemberAtIndex(members, index) {
  const newMember = { name: "New Member", age: 30 };
  _.splice(members, index, 0, newMember);
  console.log(members);
}

// 8. Extract the first and second elements using destructuring.
function extractFirstAndSecond(members) {
  const [first, second] = members;
  console.log(first, second);
}

// 9. Create a new array instance by adding a new member at index 0.
function addNewMemberAtStart(members) {
  const newMember = { name: "New Member", age: 30 };
  const newArr = _.concat([newMember], members);
  console.log(newArr);
}

// 10. Extract properties of an object using destructuring.
function nameAndAge(member) {
  const { name, age } = member;
  console.log(name, age);
}

// 11. Rename an extracted property of an object while destructuring.
function renameWhileDestructuring(member) {
  const { name: fullName, age: years } = member;
  console.log(fullName, years);
}

// 12. Destructure any property and use spread for rest.
function getRemainingProperties(member) {
  const { name, ...rest } = member;
  console.log(name, rest);
}

// 13. Create a new object by copying + overriding with spread.
function copyAndOverride(member) {
  const newMember = { ...member, age: 99 };
  console.log(newMember);
}

// 14. Use reduce on array and object.
function reduceExample(members) {
  const totalAge = _.reduce(members, (sum, m) => sum + (m.age || 0), 0);
  console.log(totalAge);

  const obj = { a: 1, b: 2, c: 3 };
  const sumValues = _.reduce(obj, (sum, val) => sum + val, 0);
  console.log(sumValues);
}

function main() {
  const members = [
    { name: "Rakesh Gupta", age: 20 },
    { name: "Yash Jangid", age: 40 },
    { name: "Firoz Khan", age: 41 },
    { name: "Amrit Srivastava", age: 17 },
    { name: "Chandraprakash Sharma" },
    { name: "Swpril Ahuja", age: 45 },
    { name: "Yogesh Khatri", age: 51 },
  ];

  const executeTask = parseInt(process.argv[2] || "1");
  switch (executeTask) {
    case 1:
      getFirstNames(members);
      break;
    case 2:
      updateLastNamesToUpperCase(members);
      break;
    case 3:
      ageBetween41And60(members);
      break;
    case 4:
      getAverageAge(members);
      break;
    case 5:
      getPersonWithMaxAge(members);
      break;
    case 6:
      divideIntoGroups(members);
      break;
    case 7:
      addNewMemberAtIndex(members, 2);
      break;
    case 8:
      extractFirstAndSecond(members);
      break;
    case 9:
      addNewMemberAtStart(members);
      break;
    case 10:
      nameAndAge(members[0]);
      break;
    case 11:
      renameWhileDestructuring(members[0]);
      break;
    case 12:
      getRemainingProperties(members[0]);
      break;
    case 13:
      copyAndOverride(members[0]);
      break;
    case 14:
      reduceExample(members);
      break;
    default:
      console.log("Invalid task number");
  }
}

main();
