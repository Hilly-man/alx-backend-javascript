export default class ClassRoom {
  constructor(maxStudentSize) {
    this._maxStudentSize = maxStudentSize;
  }
  getMaxStudentSize() {
    return this._maxStudentSize;
  }
}
