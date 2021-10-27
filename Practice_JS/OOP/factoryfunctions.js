

function myFactoryFunction(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function() {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}

myColor = myFactoryFunction(60, 200, 15);
console.log(myColor.r);
console.log(myColor.rgb());
console.log(myColor.hex());