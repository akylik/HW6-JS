const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];


// 1
function getSubjects(students) {
   let resultSubject = Object.keys(students.subjects);
   resultSubject = resultSubject.map((letter) => {
      letter = letter[0].toUpperCase() + letter.slice(1).toLowerCase();
      return letter.replaceAll(('_'), (' '));
   });
   return resultSubject;
};
console.log(getSubjects(students[0]))


// 2
function getAverageMark(student) {
   let marksTotal = 0;
   let marksCount = 0;
   Object.entries(student.subjects).map(([subject, marks]) => {
      marks.forEach((mark, index) => {
         marksTotal += mark;
         marksCount++;
      })
   });
   return (marksTotal / marksCount).toFixed(2);
}
console.log(getAverageMark(students[2]));
students.forEach((student, index) => {
   console.log((index + 1) + '. ' + student.name + ': ' + getAverageMark(student) + ';')
});


// 3
function getStudentInfo(student) {
   return {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student)
   }
}
console.log(getStudentInfo(students[2]));


// 4
function getStudentsNames(student) {
   let result = []
   student.sort(function (a, b) {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1
      }
      return 0
   })
   return result = student.map(el => el.name);
}
console.log(getStudentsNames(students));


// 5 
function getBestStudent(students) {
   let studentAverageMarks = students.map((student, index) => {
      return {
         name: student.name,
         averageMark: getAverageMark(student)
      };
   });
   let bestStudent;
   let bestMark = 0;
   studentAverageMarks.forEach((student, index) => {
      if (student.averageMark > bestMark) {
         bestMark = student.averageMark;
         bestStudent = student.name;
      }
   });
   return bestStudent;
}
console.log(getBestStudent(students));


// 6
function calculateWordLetters(word) {
   let result = {};
   wordArr = word.split('');
   wordArr.forEach((letter, index) => {
      if (result[letter]) {
         result[letter]++;
      } else {
         result[letter] = 1;
      }
   });
   return result;
}
console.log(calculateWordLetters('тест'));