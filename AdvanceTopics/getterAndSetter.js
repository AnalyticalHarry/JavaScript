class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
}

// creating an instance of Point
const obj = new Point(10, 20);

// using the getter to print the value of x
console.log(obj.x);

// using the setter to update the value of x and then printing the updated value
obj.x = 40;
console.log(obj.x);

// using the getter to print the value of y
console.log(obj.y);

// using the setter to update the value of y. No need to print here since set_y does not return a value.
obj.y = 50;

// updated value of y
console.log(obj.y);
