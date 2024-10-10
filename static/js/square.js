/* Function for Square Tesselation */

export async function squareTilling(width,height,stroke,n,x1,y1,x2,y2,diff)
{
    /*Creating canvas to tesslate on */
    const canvas3 = document.createElement("canvas");
    const ctx3 = canvas3.getContext("2d");
    canvas3.height = height;
    canvas3.width = width;
    canvas3.id = "canvas3";
    // canvas3.className = "tesselation";
    
    /*Calculating positions*/
    var H=width/n;
    var ratio= diff/H;
    ctx3.lineWidth=stroke;
    var c=1;
    var r=1;
    ctx3.clearRect(0,0,width,height);

    for(var i=0;i<=width;i=i+H)
    {
        c=1 
        for(var j=0;j<=height;j=j+H)
        {
            ctx3.beginPath();
           
            ctx3.moveTo(i,j);
            ctx3.bezierCurveTo(i+(x1.x/ratio),j+(x1.y/ratio),i+y1.x/ratio,j+y1.y/ratio,i+H,j);
            ctx3.bezierCurveTo(i+H+(x2.x/ratio),j+(x2.y/ratio),i+H+y2.x/ratio,j+y2.y/ratio,i+H,j+H);
          
            ctx3.moveTo(i,j)
            ctx3.bezierCurveTo(i+(x2.x/ratio),j+(x2.y/ratio),i+y2.x/ratio,j+y2.y/ratio,i,j+H);
            ctx3.bezierCurveTo(i+(x1.x/ratio),j+H+(x1.y/ratio),i+y1.x/ratio,j+H+y1.y/ratio,i+H,j+H);
            
            if((c%2==0 && r%2==0) || (c%2!=0 && r%2!=0))
            {
                ctx3.stroke();
            }
            else{
                ctx3.fill();
            }
            c=c+1;
        }
        r++;
    }
 /*creating and returnig tesselation image*/
 const image = new Image();
 image.src = canvas3.toDataURL();
 return image;
}