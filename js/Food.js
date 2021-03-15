class Food{
    constructor(){
        var foodstock=0;
        this.image= loadImage("images/milk.png")
    }

    updateFoodStock(foodStock){
            this.foodStock = food;
            database.ref("/").update({Food: food});
    }

    display(){
        var x= 80;
        var y = 100;

        imageMode(CENTER)
        image(this.image,720,220,70,70)
        
        if(this.foodstock!=0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10===0){
                    x=80
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }
}