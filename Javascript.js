<! DOCTYPE html>
<html>
	<head>
		<title>Javascript</title>
	</head>
	<body>
		<script>
		
		function setup() {
  createCanvas(400, 400);
		background(0,200,255 )
}
var R = 0
var G = 255
var B = 0

function draw() {
 	stroke(R,G,B)
	if (key === 70) {
	line(mouseX, mouseY, 200, 200)
	}
}

		</script>
	</body>
</html>
