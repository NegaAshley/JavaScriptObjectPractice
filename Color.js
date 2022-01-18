// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };


//-------------------- Previous class syntax above------------------//

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        console.log("Hellow from a color!", this.name);
    }

    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
    }

    hex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

}

const color1 = new Color(108, 26, 138, 'grape');
color1.greet();
console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba(0.2));