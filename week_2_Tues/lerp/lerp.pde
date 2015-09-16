// calculate a number between two points at a specifc increment
// lerp(start, stop, amount)

float a = 20;
float b = 80;
float c = lerp(a, b, .2);
float d = lerp(a, b, .5);
float e = lerp(a, b, .8);
beginShape(POINTS);
vertex(a, 50); // 20
vertex(b, 50); // 80
vertex(c, 50); // 80 - 20 = 60 / 10 x 2 + 20 = 32
vertex(d, 50); // 80 - 20 = 60 / 10 x 5 + 20 = 50
vertex(e, 50);
endShape();

print("c is  ");
println(c);
print("d is  ");
println(d);
print("e is  ");
println(e);