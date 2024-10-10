import { p1, cp1, cp2, p2, p3, cp3, cp4, p4 } from './interactive_component.js'
import {point1,point2,point3,lcp1,lcp2,bcp1,bcp2,rcp1,rcp2} from './interactive_component.js'
import {sp1,lvcp1,lvcp2,rvcp1,rvcp2,sp2,sp3,thcp1,thcp2,bhcp1,bhcp2,sp4 } from './interactive_component.js'
import { squareTilling } from "./square.js";
import { TriangleTesselation } from "./triangle.js";
import { SquareTesselation } from "./Usquare.js";
let state = {
    'triangle': false,
    'square':   true,
    'Usquare':  false,
};

function showSquare(){
    document.querySelector(".parentDiv").style.display = "flex";
    document.querySelector(".TriangleDiv").style.display = "none";
    document.querySelector(".sparentDiv").style.display = "none";
    state.square = true;
    state.Usquare = false;
    state.triangle = false;
}
function showTriangle(){
    document.querySelector(".TriangleDiv").style.display = "flex";
    document.querySelector(".parentDiv").style.display = "none";
    document.querySelector(".sparentDiv").style.display = "none";
    state.square = false;
    state.Usquare = false;
    state.triangle = true;
}

function showUnsSquare(){
    document.querySelector(".sparentDiv").style.display = "flex";
    document.querySelector(".TriangleDiv").style.display = "none";
    document.querySelector(".parentDiv").style.display = "none";
    
    state.square = false;
    state.Usquare = true;
    state.triangle = false;
}

$("body").append('<div class="choice-div-wrap"></div>');
$(".choice-div-wrap").append('<h3>Choose Shape :</h3>')
$(".choice-div-wrap").append('<input type="radio" id="square" name="design" value="1" checked><label for="square">Symmetric Square</label><br><input type="radio" id="triangle" name="design" value="2"><label for="triangle">Triangle</label><br><input type="radio" id="Usquare" name="design" value="3"><label for="Usquare">Unsymmatiric Square</label>')
$(".choice-div-wrap").append('<div class="choice-div-wrap-controls"></div>')
$(".choice-div-wrap-controls").append('<label for="height">Height (px) </label><input type="number" name="height" id="height" value="300" placeholder="300"><br><label for="width" id="widthLabel">Width (px) </label><input type="number" name="width" id="width" value="300"placeholder="300"><br><label for="height">Repetation :</label><input type="range" name="repetation" id="rep" min="3" max="50" >')
document.getElementById ("triangle").addEventListener ("click", showTriangle, false);
document.getElementById ("square").addEventListener ("click", showSquare, false);
document.getElementById ("Usquare").addEventListener ("click", showUnsSquare, false);
/* Tesselation being done on button click*/

$("#tesselate-btn").click(function(){
      var canwidth=parseInt(document.querySelector('#width').value);
      var canheight=parseInt(document.querySelector('#height').value);
      var component=parseInt(document.querySelector('#rep').value);
     console.log(canheight+" "+canwidth+" "+component);
    // console.log(state.Usquare);
    if(state.square){
        var contHp1={x:p1.x-cp3.x  ,  y:p1.y-cp3.y};
        var contHp2={x:p1.x-cp4.x  ,  y:p1.x-cp4.y};
        var contVp1={x:p1.x-cp1.x  ,  y:p1.y-cp1.y};
        var contVp2={x:p1.x-cp2.x  ,  y:p1.y-cp2.y};
        var length=p1.x-p3.x;
        // $('.tesselation').toggle();
        
        
        squareTilling(canwidth,canheight,1,component,contHp1,contHp2,contVp1,contVp2,length).then(function(img) {
            $(".tesselation").html(img);
        });
    }
    else if(state.triangle){
        var contHp1={x:point1.x-lcp1.x  ,  y:point1.y-lcp1.y};
        var contHp2={x:point1.x-lcp2.x  ,  y:point1.y-lcp2.y};
        var contHp3={x:point2.x-bcp1.x  ,  y:point2.y-bcp1.y};
        var contVp1={x:point1.x-rcp1.x  ,  y:point1.y-rcp1.y};
        var contVp2={x:point1.x-rcp2.x  ,  y:point1.y-rcp2.y};
        var contVp3={x:point2.x-bcp2.x  ,  y:point2.y-bcp2.y};
        var length=point3.x-point2.x;
        TriangleTesselation(canwidth,canheight,1,component,contHp1,contHp2,contVp1,contVp2,contHp3,contVp3,length).then(function(img) {
            $(".tesselation").html(img);
        });
    }
    else if(state.Usquare){
        var x1={x:sp1.x-thcp1.x  ,  y:sp1.y-thcp1.y};
        var y1={x:sp1.x-thcp2.x  ,  y:sp1.x-thcp2.y};
        var x2={x:sp1.x-lvcp1.x  ,  y:sp1.y-lvcp1.y};
        var y2={x:sp1.x-lvcp2.x  ,  y:sp1.y-lvcp2.y};
        var x3={x:sp2.x-bhcp1.x  ,  y:sp2.y-bhcp1.y};
        var y3={x:sp2.x-bhcp2.x  ,  y:sp2.y-bhcp2.y};
        var x4={x:sp3.x-rvcp1.x  ,  y:sp3.y-rvcp1.y};
        var y4={x:sp3.x-rvcp2.x  ,  y:sp3.y-rvcp2.y};
      
       
        var len=sp1.x-sp3.x;
        SquareTesselation(canwidth,canheight,1,component,x1,y1,x2,y2,x3,y3,x4,y4,len).then(function(img) {
            $(".tesselation").html(img);
        });
    }
});