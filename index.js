//1. Get an array of first names of everyone.
function getFirstNames(members) {
  const firstNames = members.map((member) => member.name.split(" ")[0]);
  console.log(firstNames);
}

//2.  Convert everyone’s last names to UPPERCASE in the given array of objects.
function updateLastNamesToUpperCase(members) {
  const updatedMembers = members.map((member) => {
    const nameParts = member.name.split(" ");
    if (nameParts.length > 1) {
      const lastName = nameParts.pop().toUpperCase();
      return { ...member, name: [...nameParts, lastName].join(" ") };
    }
    return member;
  });
  console.log(updatedMembers);
}

// 3. Get entries where age is between 41–60.

function ageBetween41And60(members) {
  const ageBetween41And60 = members.filter(
    (member) => member.age >= 41 && member.age <= 60
  );
  console.log(ageBetween41And60);
}
// 4 Get the average age.

function getAverageAge(members) {
  const ages = members.filter((m) => m.age !== undefined).map((m) => m.age);
  const averageAge = (
    ages.reduce((sum, age) => sum + age, 0) / ages.length
  ).toFixed(2);
  console.log(parseFloat(averageAge));
}

// 5. Get the person with the maximum age.
function getPersonWithMaxAge(members) {
  const personWithMaxAge = members.reduce((max, member) =>
    (member.age || 0) > (max.age || 0) ? member : max
  );

  console.log(personWithMaxAge);
}

// 6. Divide persons into three groups:
// {
//   'young': [],   // less than 35 yrs
//   'old': [],     // 35 yrs and above
//   'noage': []    // age not available
// }

function divideIntoGroups(members) {
  const groups = { young: [], old: [], noage: [] };
  members.forEach((member) => {
    if (member.age === undefined) {
      groups.noage.push(member);
    } else if (member.age < 35) {
      groups.young.push(member);
    } else {
      groups.old.push(member);
    }
  });
  console.log(groups);
}

//7. Add a new member to the same members array instance at index 2.
function addNewMemberAtIndex(members, index) {
  const newMember = { name: "New Member", age: 30 };
  members.splice(index, 0, newMember);
  console.log(members);
}

// 8. Extract the first and second elements using destructuring.
function extractFirstAndSecond(members) {
  const [first, second] = members;
  console.log(first, second);
}
// 9.Create a new array instance by adding a new member at index 0, keeping existing members afterwards.
function addNewMemberAtStart(members) {
  const newMember = { name: "New Member", age: 30 };
  const newMembersArray = [newMember, ...members];
  console.log(newMembersArray);
}

// 10. Extract properties of an object using destructuring.
function nameAndAge(member) {
  const { name, age } = member;
  console.log(name, age);
}

//11 Rename an extracted property of an object while destructuring.
function renameWhileDestructuring(member) {
  const { name: fullName, age: years } = member;
  console.log(fullName, years);
}

// 12. Destructure any property of an object and use the spread operator to get the remaining properties.

function getRemainingProperties(member) {
  const { name, ...rest } = member;
  console.log(name, rest);
}
//13. Create a new object by copying using the spread operator, and override one of the properties in the same step.
function copyAndOverride(member) {
  const newMember = { ...member, age: 99 };
  console.log(newMember);
}

//14. Use the reduce function on both an array and an object.
function reduceExample(members) {
  const totalAge = members.reduce((sum, member) => sum + (member.age || 0), 0);
  console.log(totalAge);

  const obj = { a: 1, b: 2, c: 3 };
  const sumValues = Object.values(obj).reduce((sum, value) => sum + value, 0);
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
