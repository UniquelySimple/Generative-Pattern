// Function for triangle tessalation
import { p1, cp1, cp2, p2, p3, cp3, cp4, p4 } from './interactive_component.js'
import {point1,point2,point3,lcp1,lcp2,bcp1,bcp2,rcp1,rcp2} from './interactive_component.js'

export async function TriangleTesselation(width,height,stroke,n,x1,y1,x2,y2,x3,y3,diff) {

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
    //  var ratio=diff/V;

    ctx3.clearRect(0,0,width,height);
    ctx3.lineWidth=stroke;

    
    for (var i = 0; i <= width; i += H) {
     
        for ( var j = 0; j <= height; j += H) {
            
            let tempx = i + (H / 2);

            ctx3.beginPath();
            ctx3.moveTo(tempx,j);
            ctx3.bezierCurveTo(tempx-(x1.x/ratio),j-(x1.y/ratio),tempx-y1.x/ratio,j-y1.y/ratio,i,j+H);
            ctx3.bezierCurveTo(tempx-H/2-x3.x/ratio, j+H-x3.y/ratio, tempx-H/2 - y3.x/ratio, j+H-y3.y/ratio, tempx+H/2,j+H);
            ctx3.lineTo(tempx+H/2,j+H);
            ctx3.bezierCurveTo(tempx-y2.x/ratio,j-y2.y/ratio,tempx-(x2.x/ratio),j-(x2.y/ratio),tempx,j);
            
            ctx3.fill();
            
            tempx+=H;
        }
        
    }

    const image = new Image();
    image.src = canvas3.toDataURL();
    return image;
}