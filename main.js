var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_Image(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
	block_image_object = Img;

	block_image_object.scaleToWidth(blockImageWidth);
	block_image_object.scaleToHeigth(blockImageHeigth);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{	blockX = 100;
		new_Image('rr1.png')
		console.log("e")
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_Image('gr.png')
		console.log("v")
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_Image('yr.png')
		console.log("a")
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_Image('pr.png')
		console.log("r")
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_Image('br.png')
		console.log("i")
	// enviar ranger índigo
	}
	
}

