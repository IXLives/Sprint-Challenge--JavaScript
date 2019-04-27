// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cubo = new CuboMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cubo.volume()); // 100
 console.log(cubo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor (x) {
        super(x, x, x);
    }

    cubeVolume() {
        return this.length * this.height * this.width;
    }

    cubeSurfaceArea() {
        return 6 * (this.length * this.height);
    }
}

const cube = new CubeMaker(9);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());