class Vector {
    constructor(d) {
      this.v = d
      this.dim = d.length
    }

    randomize() {
        let res = this.v
        res.forEach((x, i) => {
            return res[i] = Math.random();
        })
        return new Vector(res)
    }
  
    scale(s) {
      let res = this.v
      res.forEach((x, i) => {
        return res[i] = x * s
      })
      return new Vector(res)
    }
  
    add(v) {
      let res = this.v
      res.forEach((x, i) => {
        return res[i] = x + v.v[i]
      })
      return new Vector(res)
    }
  
    dot(v) {
      let res = 0
      for (var i = 0; i < this.dim; i++) {
        res += this.v[i] * (v.v[i])
      }
      return res
    }
    cross(v) { }
    magnitude() {
      return Math.sqrt(Math.pow(this.v[0], 2) + Math.pow(this.v[1], 2))
    }
    unit() {
      return new Vector([this.v[0] / this.magnitude(), this.v[1] / this.magnitude()])
    }
  }
  
  class Matrix {
    constructor(val) {
      this.dim = [val.length, val[0].length]
      this.v = val
    }

    randomize() {
        let res = this.v
        for(var i = 0; i < this.dim[0]; i++) {
            for(var j = 0; j < this.dim[1]; j++) {
                res[i][j] = Math.random();
            }
        }
        return new Matrix(res)
    }

  
    gaussian() { }
    det() { }
    mult() { }
    dot(v) {
        let out = []
        for (let i = 0; i < this.dim[0]; i++) {
            out[i] = new Vector(this.v[i]).dot(v)
        }
        return new Vector(out)
    }
    transform(v) {
      let i = new Vector(this.v[0])
      let j = new Vector(this.v[1])
  
      return i.sc(v.v[0]).a(j.sc(v.v[1]))
    }
  
    nullSpace() {
      // return new space()
    }
  
    columnSpace() {
  
    }
  
    eigenSpace() {
  
    }
  
    eigenValues() {
  
    }
  
    eigenVectors() {
  
    }
  }
  
  class space {
    constructor(dim) {
      this.dim = dim
      this.basii = [[], ['i'], ['i', 'j'], ['i', 'j', 'k']][dim]
    }
  
    includes() { }
  }
  
  class complex {
    constructor(a, b) {
      this.c = new Vector([a, b]) // a + bi
    }
  }
  
  // module.exports = { Vector, Matrix, space }
  let exp = {Vector, Matrix, space}
  export default exp
  export {Vector, Matrix, space}