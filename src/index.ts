// Define a Member type
type Member = {
  name: string;
  age?: number;
};

//1. Get an array of first names of everyone.
function getFirstNames(members: Member[]): void {
  const firstNames = members.map((member) => member.name.split(" ")[0]);
  console.log(firstNames);
}

//2. Convert everyone’s last names to UPPERCASE in the given array of objects.
function updateLastNamesToUpperCase(members: Member[]): void {
  const updatedMembers = members.map((member) => {
    const nameParts = member.name.split(" ");
    if (nameParts.length > 1) {
      const popped = nameParts.pop();
      let lastName = "";
      if (popped) {
         lastName = popped.toUpperCase();
      }
      return { ...member, name: [...nameParts, lastName].join(" ") };
    }
    return member;
  });
  console.log(updatedMembers);
}

//3. Get entries where age is between 41–60.
function ageBetween41And60(members: Member[]): void {
  const result = members.filter(
    (member) => member.age !== undefined && member.age >= 41 && member.age <= 60
  );
  console.log(result);
}

//4. Get the average age.
function getAverageAge(members: Member[]): void {
  const ages = members.filter((m) => m.age !== undefined).map((m) => m.age!);
  const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
  console.log(Number(averageAge.toFixed(2)));
}

//5. Get the person with the maximum age.
function getPersonWithMaxAge(members: Member[]): void {
  const personWithMaxAge = members.reduce((max, member) =>
    (member.age || 0) > (max.age || 0) ? member : max
  );
  console.log(personWithMaxAge);
}

//6. Divide persons into three groups
function divideIntoGroups(members: Member[]): void {
  const groups: { young: Member[]; old: Member[]; noage: Member[] } = {
    young: [],
    old: [],
    noage: [],
  };

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

//7. Add a new member at index 2
function addNewMemberAtIndex(members: Member[], index: number): void {
  const newMember: Member = { name: "New Member", age: 30 };
  members.splice(index, 0, newMember);
  console.log(members);
}

//8. Extract the first and second elements
function extractFirstAndSecond(members: Member[]): void {
  const [first, second] = members;
  console.log(first, second);
}

//9. Add new member at start
function addNewMemberAtStart(members: Member[]): void {
  const newMember: Member = { name: "New Member", age: 30 };
  const newMembersArray: Member[] = [newMember, ...members];
  console.log(newMembersArray);
}

//10. Extract properties
function nameAndAge(member: Member): void {
  const { name, age } = member;
  console.log(name, age);
}

//11. Rename properties
function renameWhileDestructuring(member: Member): void {
  const { name: fullName, age: years } = member;
  console.log(fullName, years);
}

//12. Destructure with spread
function getRemainingProperties(member: Member): void {
  const { name, ...rest } = member;
  console.log(name, rest);
}

//13. Copy and override
function copyAndOverride(member: Member): void {
  const newMember: Member = { ...member, age: 99 };
  console.log(newMember);
}

//14. Reduce on array & object
function reduceExample(members: Member[]): void {
  const totalAge = members.reduce((sum, member) => sum + (member.age || 0), 0);
  console.log(totalAge);

  const obj = { a: 1, b: 2, c: 3 };
  const sumValues = Object.values(obj).reduce((sum, value) => sum + value, 0);
  console.log(sumValues);
}

// -------- Main --------
function main(): void {
  const members: Member[] = [
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
      if (members[0]) {
        nameAndAge(members[0]);
      } else {
        console.log("No members in the array");
      }
      break;
    case 11:
      if (members[0]) {
        renameWhileDestructuring(members[0]);
      } else {
        console.log("No members in the array");
      }
      break;
    case 12:
      if (members[0]) {
        getRemainingProperties(members[0]);
      } else {
        console.log("No members in the array");
      }
      break;
    case 13:
      if (members[0]) {
        copyAndOverride(members[0]);
      } else {
        console.log("No members in the array");
      }
      break;
    case 14:
      reduceExample(members);
      break;
    default:
      console.log("Invalid task number");
  }
}

main();
