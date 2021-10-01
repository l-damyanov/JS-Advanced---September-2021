function solve(area, vol, input) {
    return JSON.parse(input).map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)
    }));
}


function area() {
    return Math.abs(this.x * this.y);
};



function vol() {
    return Math.abs(this.x * this.y * this.z);
};
