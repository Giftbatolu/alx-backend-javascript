export default function getStudentIdsSum(studentsObj) {
  return studentsObj.reduce((sum, studentId) => sum + (studentId.id), 0);
}
