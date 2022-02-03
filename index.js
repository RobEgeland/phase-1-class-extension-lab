class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        let count = 0
        this.sides.forEach(side => {
            count += 1
        })
        return count
    }

    get perimeter() {
        let count = 0
        this.sides.forEach(side => {
            count += side
        })
        return count
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.sides[0] + this.sides[1] > this.sides[2] && this.sides[2] + this.sides[0] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        for(let i = 0, c = 1; i < this.sides.length, c < this.sides.length; i++, c++ ){
            if(this.sides[i] === this.sides[c]){
                return true
            }else{
                return false
            }
        }
    }

    get area() {
        return this.sides[0]**2
    }
}