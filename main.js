var canvas=new fabric.Canvas("myCanvas");
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;
player_object="";
block_img_object="";

function player_update()
{
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)
});
}

function new_img(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img_object)
});
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey&&keypressed=="80")
    {
        console.log("Shift and P pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey&&keypressed=="77")
    {
        console.log("Shift and M pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="39")
    {
        right()
        console.log("right")
    }
    if(keypressed=="40")
    {
        down();
        console.log("down")
    }
    if(keypressed=="37")
    {
        left()
        console.log("left")
    }
    if(keypressed=="87")
    {
        new_img("wall.jpg");
        console.log("W");
    }
    if(keypressed=="71")
    {
        new_img("ground.png");
        console.log("G");
    }
    if(keypressed=="76")
    {
        new_img("light_green.png");
        console.log("L");
    }
    if(keypressed=="84")
    {
        new_img("trunk.jpg");
        console.log("T");
    }
    if(keypressed=="82")
    {
        new_img("roof.jpg");
        console.log("R");
    }
    if(keypressed=="89")
    {
        new_img("yellow_wal.png");
        console.log("Y");
    }
    if(keypressed=="68")
    {
        new_img("dark_green.png");
        console.log("D");
    }
    if(keypressed=="85")
    {
        new_img("unique.png");
        console.log("U");
    }
    if(keypressed=="67")
    {
        new_img("cloud.jpg");
        console.log("Cloud");
    }
    
}
function up()
{
    if(player_y>0)
    {
        player_y=player_y-block_img_height;
        console.log("block image height: "+block_img_height);
        console.log("when up arrow is pressed, x: "+player_x+" y: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<500)
    {
        player_y=player_y+block_img_height;
        console.log("block image height: "+block_img_height);
        console.log("when Down arrow is pressed, x: "+player_x+" y: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(player_x>0)
    {
        player_x=player_x-block_img_width;
        console.log("block image width: "+block_img_width);
        console.log("when left arrow is pressed, x: "+player_x+" y: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<850)
    {
        player_x=player_x+block_img_width;
        console.log("block image width: "+block_img_width);
        console.log("when right arrow is pressed, x: "+player_x+" y: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}