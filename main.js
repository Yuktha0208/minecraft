var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var player_object="";
var image_object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        image_object=Img;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=="80"){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;

        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && key_pressed=="77"){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;

        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

    if(key_pressed=="38"){
     up();
     console.log("up");
    }

    if(key_pressed=="40"){
        down();
        console.log("down");
       }

       if(key_pressed=="39"){
        right();
        console.log("right");
       }

       if(key_pressed=="37"){
        left();
        console.log("left");
       }

       if(key_pressed=="84"){
        new_img("trunk.jpg");
        console.log("t");
       }

       if(key_pressed=="67"){
        new_img("cloud.jpg");
        console.log("c");
       }

       if(key_pressed=="68"){
        new_img("dark_green.png");
        console.log("d");
       }

       if(key_pressed=="71"){
        new_img("ground.png");
        console.log("g");
       }

       if(key_pressed=="76"){
        new_img("light_green.png");
        console.log("l");
       }

       if(key_pressed=="82"){
        new_img("roof.jpg");
        console.log("r");
       }

       if(key_pressed=="85"){
        new_img("unique.png");
        console.log("u");
       }

       if(key_pressed=="87"){
        new_img("wall.jpg");
        console.log("w");
       }

       if(key_pressed=="89"){
        new_img("yellow_wall.png");
        console.log("y");
       }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height= " +block_image_height);
        console.log("When Up Arrow Key Is Pressed, x= " + player_x+",y= " +player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height= " +block_image_height);
        console.log("When Down Arrow Key Is Pressed, x= " + player_x+",y= " +player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block image height= " +block_image_width);
        console.log("When right Arrow Key Is Pressed, x= " + player_x+",y= " +player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("block image height= " +block_image_width);
        console.log("When Left Arrow Key Is Pressed, x= " + player_x+",y= " +player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}