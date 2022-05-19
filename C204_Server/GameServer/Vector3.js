class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static zero = new Vector3(-15, 0, 36);
}

module.exports = Vector3;