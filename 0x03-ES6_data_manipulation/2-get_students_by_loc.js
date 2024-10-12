export default function getStudentsByLocation(studentsObj, city) {
  return studentsObj.filter((studentObj) => (studentObj.location === city));
}
