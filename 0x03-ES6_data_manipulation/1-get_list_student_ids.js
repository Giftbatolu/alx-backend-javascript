export default function getListStudentIds(studentsObj) {
  if (Array.isArray(studentsObj) && (studentsObj.lenght !== 0)) {
    return studentsObj.map((studentObj) => (studentObj.id));
  }
  return [];
}
