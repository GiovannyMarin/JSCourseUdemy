var x = 1;
var y = 1;

while (x < 10) {
	y = 1;
	while (y <= 10) {
		console.log(x + "x" + y + "=" + x * y);
		y++;
	}
	console.log("\n");
	x++;
}
