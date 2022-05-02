class Vector2 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static zero = new Vector2(0, 0, 0);
}

module.exports = Vector2;