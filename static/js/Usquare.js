/* Function for Unsymmetric Square Tesselation */

export async function SquareTesselation(width,height,stroke,n,x1,y1,x2,y2,x3,y3,x4,y4,diff)
{
    console.log("Hello");
    /*Creating canvas to tesslate on */
    const canvas3 = document.createElement("canvas");
    const ctx3 = canvas3.getContext("2d");
    canvas3.height = height;
    canvas3.width = width;
    canvas3.id = "canvas3";
    // canvas3.className = "tesselation";
    
    /*Calculating positions*/
    var H=canvas3.width/n;
    var ratio= diff/H;
    ctx3.lineWidth=stroke;
    var c=1;
    var r=1;
    ctx3.clearRect(0,0,canvas3.width,canvas3.height);

    
    for(var i=0;i<=canvas3.width;i=i+H)
    {
        c=1 
        for(var j=0;j<=canvas3.height;j=j+H)
        {
            
            ctx3.beginPath();
           
            ctx3.moveTo(i,j);
            ctx3.bezierCurveTo(i+(x1.x/ratio),j+(x1.y/ratio),i+y1.x/ratio,j+y1.y/ratio,i+H,j);
            ctx3.bezierCurveTo(i+H+(x4.x/ratio),j+(x4.y/ratio),i+H+y4.x/ratio,j+y4.y/ratio,i+H,j+H);
          
            ctx3.moveTo(i,j)
            ctx3.bezierCurveTo(i+(x2.x/ratio),j+(x2.y/ratio),i+y2.x/ratio,j+y2.y/ratio,i,j+H);
            ctx3.bezierCurveTo(i+(x3.x/ratio),j+H+(x3.y/ratio),i+y3.x/ratio,j+H+(y3.y/ratio),i+H,j+H);
            
            if((c%2==0 && r%2==0) || (c%2!=0 && r%2!=0))
            {
                ctx3.fill();
            }
            
            c=c+1;
        }
        r++;
    }
 /*creating and returnig tesselation image*/
 const image = new Image();
 image.src = canvas3.toDataURL();
 console.log(image);
 return image;
}