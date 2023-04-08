// Valid CSV from Students in this order: last_name, first_name, birthday
const data = `Aguilar,Roberto,2010-01-12
Angeles,Laura,2010-08-24
Benítez,Edgar,2009-12-24
Fernández,Julia,2010-04-12
Rodríguez,Diana,2010-06-06
Robles,Daniel,2010-03-15
Toledo,Diana,2010-07-26
Velázques,Ruben,2010-09-01`;

//console.log(data)

var studentList = data.split("\n");
studentList = studentList.map((student) => {
  const str = student.split(",");
  // console.log(str);
  return {
    last_name: str[0],
    first_name: str[1],
    birthday: new Date(str[2]),
  };
}); // here we will defined the array of users
// console.log({ studentList });

/* 
studentList: Array<{
  last_name: string,
  first_name: string,
  birthday: string // Date
}>
*/

/**
 * There are 3 new students with this information that need to be added
 *
 * Rodrigo García, Aug 10, 2010
 * Victoria Dominguez, May 18, 2010
 * Lisbeth Flores, November 23, 2010
 *
 * I wanna see the updated list of students (sorted by last_name)
 */

studentList.push({
  last_name: "Garcia",
  first_name: "Rodrigo",
  birthday: new Date("2010-10-10"),
});
studentList.push({
  last_name: "Dominguez",
  first_name: "Victoria",
  birthday: new Date("2010-05-18"),
});
studentList.push({
  last_name: "Flores",
  first_name: "Lisbeth ",
  birthday: new Date("2010-11-23"),
});

studentList.sort((a, b) => {
  if (a["last_name"] > b.last_name) {
    return 1;
  } else if (a["last_name"] < b.last_name) {
    return -1;
  }
  return 0;
});

console.log({ studentList });

/**
 * 2 Students are leaving the year before the end of the regular scholar period
 *
 * Julia Fernández
 * Daniel Robles
 *
 * I wanna see the updated list of students (sorted by last_name)
 */

// find Julia Fernandez

const indexJulia = studentList.findIndex((student) => {
  return student.last_name === "Fernández";
});

studentList.splice(indexJulia, 1);

const indexDaniel = studentList.findIndex((student) => {
  return student.last_name === "Robles";
});

studentList.splice(indexDaniel, 1);

console.log(studentList);

/**
 * We personalize some gift cards on the students birthdays,
 *
 * we need a list of the students sorted by "birthday"
 */
const scholarYearMonths = [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6];


const birthdayList = studentList.sort((a, b) => {
  const aBirthdayIndex = scholarYearMonths.indexOf(a["birthday"].getMonth());
  const bBirthdayIndex = scholarYearMonths.indexOf(b["birthday"].getMonth());

  if (aBirthdayIndex > bBirthdayIndex) {
    return 1;
  } else if (aBirthdayIndex < bBirthdayIndex) {
    return -1;
  }
  return 0;
});

console.log({ birthdayList });
