var dog,sadDog,happyDog;
var feed,add;
var database;
var foodS = 20;
var lastFed = 0;
var foodObj = null;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database()
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("FEED THE DOG.")
  feed.position(600,95)
  feed.mousePressed(feedDog)

  add = createButton("ADD THE FOOD.")
  add.position(800,95)
  add.mousePressed(addFoods)

  foodObj = new Food();


}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
}

//function to read food Stock

function readstock(data){
	foodS = data.val();
	foodObj.updateFoodStock(foodS);
	}


function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
}
}

//function to update food stock and last fed time

function update(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

//function to add food in stock
function addFoods(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()*-1)
  }
}
