
//And then try create an equilateral triangle 

function CreateTriangle(){
const space = function (spc) {
	if(spc === 0) {
		return "";}
		return " " +space (spc-1);
	};
	const star = function (str){
		if (str === 0) {
			return "";}
			return "*" + star(str-1);
		};
		const run = function (n,spc,str) {
			if(n===0) {
				return " ";}
				console.log(space(spc)+star(str))
			run(n-1,spc-1,str+2);
		}
		const trianglestars = function(n)
		{
			run(n,n-1,1)
		};
		trianglestars(5);
    }

//4. Complex Patterns
//Using the loop approach above, create a chess board using # and space ' '. 
function CreateChessBoard(){

var createBoard = function()
{
	rank = ["A","B","C","D","E","F","G","H"];
	file = [1,2,3,4,5,6,7,8];

	var currentTile = {};

  	var count = 0;
  	 for(var i = 0; i < rank.length; i++)
	  {
	    for (var j = 0; j < file.length; j++)
	      {
	        if(count%8 == 0)
	        {
	          $("#chessboard").append('<div class="tile smoothfade" style="clear:left"></div>');

	        }else{
	          $("#chessboard").append('<div class="tile smoothfade"></div>');
	          }
	        $(".tile").eq(count).attr("data-gridpos",((rank[rank.length - (i +1)]+file[j])));
	        
	        if(((i%2 == 0) && (j%2 != 0)) || ((i%2 != 0) && (j%2 == 0)))
	        {
	          $(".tile").eq(count).addClass("black");
	        }
	        else
	        {
	          $(".tile").eq(count).addClass("white");
	        }
	        count++;
	    }
	  }
}
}


//5. ASCII Art
//Create ASCII Art using arrays, loops and conditions. 
//You can choose to create generative art using standard keyboard characters 
//(possibly usingMath.random() )or make a more precise illustration (name, face, object, symbol).

function CreateASCII(){

const canvas = document.getElementById('preview');
const fileInput = document.querySelector('input[type="file"');
const asciiImage = document.getElementById('ascii');

const context = canvas.getContext('2d');

const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

const getFontRatio = () => {
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';

    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);

    return height / width;
};

const fontRatio = getFontRatio();

const convertToGrayScales = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);

    const grayScales = [];

    for (let i = 0 ; i < imageData.data.length ; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];

        const grayScale = toGrayScale(r, g, b);
        imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;

        grayScales.push(grayScale);
    }

    context.putImageData(imageData, 0, 0);

    return grayScales;
};

const MAXIMUM_WIDTH = 80;
const MAXIMUM_HEIGHT = 80;

const clampDimensions = (width, height) => {
    const rectifiedWidth = Math.floor(getFontRatio() * width);

    if (height > MAXIMUM_HEIGHT) {
        const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);
        return [reducedWidth, MAXIMUM_HEIGHT];
    }

    if (width > MAXIMUM_WIDTH) {
        const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);
        return [MAXIMUM_WIDTH, reducedHeight];
    }

    return [rectifiedWidth, height];
};

fileInput.onchange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
            const [width, height] = clampDimensions(image.width, image.height);

            canvas.width = width;
            canvas.height = height;

            context.drawImage(image, 0, 0, width, height);
            const grayScales = convertToGrayScales(context, width, height);

            fileInput.style.display = 'none';
            drawAscii(grayScales, width);
        }

        image.src = event.target.result;
    };

    reader.readAsDataURL(file);
};

const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
const rampLength = grayRamp.length;

const getCharacterForGrayScale = grayScale => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];

const drawAscii = (grayScales, width) => {
    const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
        let nextChars = getCharacterForGrayScale(grayScale);
        if ((index + 1) % width === 0) {
            nextChars += '\n';
        }

        return asciiImage + nextChars;
    }, '');

    asciiImage.textContent = ascii;
};

}



// // let answer = 42;
// // alert("Hello" + answer);
// // let greeting = "Good" + " " + "Morning";

// //1. Condition 
// //Using Math.random() function, create random numbers between 1 and 100
// //create a simple condition that outputs whether its odd or even,

var number = Math.floor((Math.random()*100)+1);
if (number%2==0)
    { CreateASCII();
}
else
{
    function CreateChessBoard();
   
}

// //2. Loops and Maths Operators
// //Loop through numbers 1 to 100 and for each of these numbers, 
// //output (console.log()) its square (ie 2 * 2 = 4).
var i;
for (i= 1; i<100; i++) { 
 console.log(Math.pow(i,2));
}

// //3. Patterns using Loops
// //Convert this into a for(...) loop (more compact).

var number,
for (number<10) {
    console.log('#'.repeat(number));
    number++;
}




