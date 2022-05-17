class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static zero = new Vector3(-60, 0, 55);
}

module.exports = Vector3;