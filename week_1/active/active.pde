// declaring my variable. Since I'm doing it up here, it's known as Global
int account;
String address;
float coordinate = 42.9;  // declaring + instianting varibale

// setup if a function. It only runs once
void setup() {


  //println(frameCount);
  account = 10;
  println(account);
  address = "Jay Street MetroTech";
  
  //account = account + round(coordinate);
  account = account + int(coordinate);  // this is casting
  println(account);
}

// draw is a function. it loops.

void draw() {
  //println(frameCount);  //vs print(frameCount)
  //println(address);
  account = account + 10;
  //println(account);

  account = account - 100;

  address = account + "  Jay Street MetroTech" ;
}