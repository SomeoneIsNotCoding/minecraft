var canvas = new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
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

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
      block_img_object=Img;
        
      block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);

    });
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keyP=e.keyCode;
    if(e.shiftKey == true && keyP=='80'){
        block_img_height+=10;
        block_img_width+=10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;

    }

    if(e.shiftKey == true && keyP=='77'){
        block_img_height-=10;
        block_img_width-=10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;

    }
    if(keyP== '37'){
        left();
        
    }

    if(keyP== '38'){
       up();
        
    }
    if(keyP== '39'){
       right();
        
    }
    if(keyP== '40'){
       down();
        
    }
    if(keyP== '67'){
        new_image('cloud.jpg');
        
    }

    if(keyP== '68'){
        new_image('dark_green.png');
        
    }

    if(keyP== '71'){
        new_image('ground.png');
        
    }

    if(keyP== '76'){
        new_image('light_green.png');
        
    }

    if(keyP== '82'){
        new_image('roof.jpg');
        
    }


    if(keyP== '84'){
        new_image('trunk.jpg');
        
    }


    if(keyP== '85'){
        new_image('unique.png');
        
    }


    if(keyP== '87'){
        new_image('wall.jpg');
        
    }



    if(keyP== '89'){
        new_image('yellow_wall.png');
        
    }


    

}


function right(){

    
    if(player_x<900){
        player_x+=block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}



function left(){

    
    if(player_x>0){
        player_x-=block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}





function up(){

    
    if(player_y>0){
        player_y-=block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}





function down(){

    
    if(player_y<500){
        player_y+=block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}




