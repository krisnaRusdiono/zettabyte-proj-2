"use strict";
// Expected Result : 
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.
exports.__esModule = true;
var students = [
    {
        id: "1",
        name: "Ryan",
        school: {
            id: "1",
            short_name: "PLMK"
        }
    },
    {
        id: "2",
        name: "Ari",
        school: {
            id: "1",
            short_name: "PLMK"
        }
    },
    {
        id: "3",
        name: "Rahman",
        school: {
            id: "2",
            short_name: "STJK"
        }
    },
    {
        id: "4",
        name: "Budi",
        school: {
            id: "2",
            short_name: "STJK"
        }
    },
    {
        id: "5",
        name: "Jaka",
        school: {
            id: "1",
            short_name: "PLMK"
        }
    }
];
var schoolId = '2';
function result(students, schoolId) {
    // Your Code Here
    var filtered = students.filter(function (student) {
        return student.school.id === schoolId;
    });
    return filtered;
}
console.log(result(students, schoolId));