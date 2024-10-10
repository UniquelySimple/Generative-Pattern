// This js script makes the interactive Cubic Bézier curve generator
// Exports coordinates of p1, p2, control point1, control point2 coordinates
// Use statement >>>> import { p1, cp1, cp2, p2 } from './interactive_component.js' <<<< for importing the exported coordinates
// ------------------------------------- ui for Square ------------------------------------------
// Coordinates of the curve as {x, y}
let p1 =    { x: 72,    y: 72  };
let cp1 =   { x: 45,   y: 108  };
let cp2 =   { x: 97,   y: 175  };
let p2 =    { x: 72,   y: 217  };
let p3 =    { x: 217,    y: 72 };
let cp3 =   { x: 100,   y: 108 };
let cp4 =   { x: 189,   y: 36  };
let p4 =    { x: 217,   y: 217 };


/*Functions to create Bezier Curves*/
function createCubicBezierH(ctx) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
    ctx.moveTo(p3.x, p3.y);
    ctx.bezierCurveTo(cp1.x+145, cp1.y, cp2.x+145, cp2.y, p4.x, p4.y);
    ctx.stroke();
}
function createCubicBezierV(ctx2) {
    ctx2.beginPath();
    ctx2.moveTo(p1.x, p1.y);
    ctx2.bezierCurveTo(cp3.x, cp3.y, cp4.x, cp4.y, p3.x, p3.y);
    ctx2.moveTo(p2.x, p2.y);
    ctx2.bezierCurveTo(cp3.x, cp3.y+145, cp4.x, cp4.y+145, p4.x, p4.y);
    ctx2.stroke();
}

$("body").prepend('<div class="parentDiv"></div>');
    
$(".parentDiv").prepend('<div class="container"></div>');
$(".container").prepend('<div class="cor1"></div>');
$(".container").prepend('<div class="cor2"></div>');
$(".container").prepend('<div class="cont1"></div>');
$(".container").prepend('<div class="cont2"></div>');
$(".container").prepend('<div class="cor3"></div>');
$(".container").prepend('<div class="cor4"></div>');
$(".container").prepend('<div class="cont3"></div>');
$(".container").prepend('<div class="cont4"></div>');
    

$('body').append("<button id='tesselate-btn'> Tesselate </button>")
    
// creating canvas
$(".parentDiv").append('<canvas class="svgObject" id="canvas" height="300" width="300"></canvas>')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
$(".parentDiv").append('<canvas class="svgObject" id="canvas2" height="300" width="300"></canvas>')
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

$(".parentDiv").append('<div class="tesselation" ></div>');

// drawing initial Cubic Bézier curve
createCubicBezierH(ctx);
createCubicBezierV(ctx2);

/*Controlling lines with the moving control points*/
$(".cont3").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#cor1-text').html(ui.position.left+' '+ui.position.top)
        $('#line3').attr("x1",""+ui.position.left)
        $('#line3').attr("y1",""+ui.position.top)
        ctx2.clearRect(0,0,300,300);
        cp3.x = ui.position.left;
        cp3.y = ui.position.top;
        createCubicBezierV(ctx2);
    }
});

$(".cont4").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#cor2-text').html(ui.position.left+' '+ui.position.top)
        $('#line4').attr("x1",""+ui.position.left)
        $('#line4').attr("y1",""+ui.position.top)
        ctx2.clearRect(0,0,300,300);
        cp4.x = ui.position.left;
        cp4.y = ui.position.top;
        createCubicBezierV(ctx2);
    }
});
$(".cont1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#cont1-text').html(ui.position.left+' '+ui.position.top)
        $('#line1').attr("x1",""+ui.position.left)
        $('#line1').attr("y1",""+ui.position.top)
        ctx.clearRect(0,0,300,300);
        cp1.x = ui.position.left;
        cp1.y = ui.position.top;
        createCubicBezierH(ctx);
    }
});
$(".cont2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#cont2-text').html(ui.position.left+' '+ui.position.top)
        $('#line2').attr("x1",""+ui.position.left)
        $('#line2').attr("y1",""+ui.position.top)
        ctx.clearRect(0,0,300,300);
        cp2.x = ui.position.left;
        cp2.y = ui.position.top;
        createCubicBezierH(ctx);
    }
});

/*Drawing lines from control points */
$(".parentDiv").append('<svg class="svgObject1" height="300" width="300"><line id="line1" x1="45" y1="108" x2="72" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".parentDiv").append('<svg class="svgObject2" height="300" width="300"><line id="line2" x1="97" y1="175" x2="72" y2="217" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".parentDiv").append('<svg class="svgObject3" height="300" width="300"><line id="line3" x1="100" y1="108" x2="72" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".parentDiv").append('<svg class="svgObject4" height="300" width="300"><line id="line4" x1="189" y1="36" x2="217" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')

// ------------------------------------- ui for triangle ------------------------------------------

let point1 =    { x: 144.75,    y: 70  };
let lcp1 =   { x: 100,   y: 90  };
let lcp2 =   { x: 128.75,   y: 165  };
let point2 =    { x: 84,   y: 185  };
let bcp1 =   { x: 114,   y: 215.75  };
let bcp2 =   { x: 176,   y: 154.25  };
let point3 =    { x: 206,    y: 185 };
let rcp1 =   { x: 134.75,   y: 113 };
let rcp2 =   { x: 216,   y: 139  };

function createCubicBezierCurves(ctx) {
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.bezierCurveTo(lcp1.x, lcp1.y, lcp2.x, lcp2.y, point2.x, point2.y);
    ctx.moveTo(point2.x, point2.y);
    ctx.bezierCurveTo(bcp1.x, bcp1.y, bcp2.x, bcp2.y, point3.x, point3.y);
    ctx.stroke();
    ctx.moveTo(point1.x, point1.y);
    ctx.bezierCurveTo(rcp1.x, rcp1.y, rcp2.x, rcp2.y, point3.x, point3.y);
    ctx.stroke();
}

$("body").append('<div class="TriangleDiv"></div>');
$(".TriangleDiv").prepend('<div class="holder"></div>');
$(".TriangleDiv").prepend('<div class="top"></div>');
$(".TriangleDiv").prepend('<div class="left"></div>');
$(".TriangleDiv").prepend('<div class="right"></div>');
$(".TriangleDiv").prepend('<div class="lcont2"></div>');
$(".TriangleDiv").prepend('<div class="lcont1"></div>');
$(".TriangleDiv").prepend('<div class="rcont1"></div>');
$(".TriangleDiv").prepend('<div class="rcont2"></div>');
$(".TriangleDiv").prepend('<div class="bcont1"></div>');
$(".TriangleDiv").prepend('<div class="bcont2"></div>');

// creating canvas
$(".TriangleDiv").append('<canvas class="CanvasForTriangle" id="tcanvas" height="300" width="300"></canvas>')
const tcanvas = document.getElementById('tcanvas');
const tctx = tcanvas.getContext('2d');

$(".TriangleDiv").append('<div class="tesselation" ></div>');

createCubicBezierCurves(tctx);

$(".lcont1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line5').attr("x1",""+ui.position.left)
        $('#line5').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        lcp1.x = ui.position.left;
        lcp1.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".lcont2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line6').attr("x1",""+ui.position.left)
        $('#line6').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        lcp2.x = ui.position.left;
        lcp2.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".bcont1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line7').attr("x1",""+ui.position.left)
        $('#line7').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        bcp1.x = ui.position.left;
        bcp1.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".bcont2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line8').attr("x1",""+ui.position.left)
        $('#line8').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        bcp2.x = ui.position.left;
        bcp2.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".rcont1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line9').attr("x1",""+ui.position.left)
        $('#line9').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        rcp1.x = ui.position.left;
        rcp1.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".rcont2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#line10').attr("x1",""+ui.position.left)
        $('#line10').attr("y1",""+ui.position.top)
        tctx.clearRect(0,0,300,300);
        rcp2.x = ui.position.left;
        rcp2.y = ui.position.top;
        createCubicBezierCurves(tctx);
    }
});
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line5" x1="100" y1="90" x2="144.75" y2="70" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line6" x1="128.75" y1="165" x2="84" y2="185" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line7" x1="114" y1="215.75" x2="84" y2="185" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line8" x1="176" y1="154.25" x2="206" y2="185" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line9" x1="134.75" y1="113" x2="144.75" y2="70" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".TriangleDiv").append('<svg class="svgObject5" height="300" width="300"><line id="line10" x1="216" y1="139" x2="206" y2="185" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')


/* -------------------Start unsymmetric Square UI------------------------*/
/**points */
let sp1   =   { x: 72,    y: 72  };
let lvcp1 =   { x: 45,   y: 108  };
let lvcp2 =   { x: 97,   y: 175  };
let rvcp1 =   { x: 190,   y: 108  };
let rvcp2 =   { x: 242,   y: 175  };
let sp2   =   { x: 72,   y: 217  };
let sp3   =   { x: 217,   y: 72 };
let thcp1 =   { x: 100,   y: 108 };
let thcp2 =   { x: 189,   y: 36  };
let bhcp1 =   { x: 100,   y: 253 };
let bhcp2 =   { x: 189,   y: 181 };
let sp4   =   { x: 217,   y: 217 };


/*Functions to create Bezier Curves*/
function createSquareBezier(ctx) {
    ctx.beginPath();
    ctx.moveTo(sp1.x, sp1.y);
    ctx.bezierCurveTo(lvcp1.x, lvcp1.y, lvcp2.x, lvcp2.y, sp2.x, sp2.y);
    ctx.bezierCurveTo(bhcp1.x, bhcp1.y, bhcp2.x, bhcp2.y, sp4.x, sp4.y);
    ctx.moveTo(sp1.x, sp1.y);
    ctx.bezierCurveTo(thcp1.x, thcp1.y, thcp2.x, thcp2.y, sp3.x, sp3.y);
    ctx.bezierCurveTo(rvcp1.x, rvcp1.y, rvcp2.x, rvcp2.y, sp4.x, sp4.y);
    ctx.stroke();
}

$("body").prepend('<div class="sparentDiv"></div>');
$(".sparentDiv").prepend('<div class="sholder"></div>');
$(".sholder").prepend('<div class="scor1"></div>');
$(".sholder").prepend('<div class="scor2"></div>');
$(".sholder").prepend('<div class="lvcon1"></div>');
$(".sholder").prepend('<div class="lvcon2"></div>');
$(".sholder").prepend('<div class="scor3"></div>');
$(".sholder").prepend('<div class="scor4"></div>');
$(".sholder").prepend('<div class="thcon1"></div>');
$(".sholder").prepend('<div class="thcon2"></div>');
$(".sholder").prepend('<div class="bhcon1"></div>');
$(".sholder").prepend('<div class="bhcon2"></div>');
$(".sholder").prepend('<div class="rvcon1"></div>');
$(".sholder").prepend('<div class="rvcon2"></div>');
    
    
// creating canvas
$(".sparentDiv").append('<canvas class="svgObject6" id="scanvas" height="300" width="300"></canvas>')
const scanvas = document.getElementById('scanvas');
const sctx = scanvas.getContext('2d');

$(".sparentDiv").append('<div class="tesselation" ></div>');


// drawing initial Cubic Bézier curve
createSquareBezier(sctx);


/*Controlling lines with the moving control points*/
$(".lvcon1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#linel1').attr("x1",""+ui.position.left)
        $('#linel1').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        lvcp1.x = ui.position.left;
        lvcp1.y = ui.position.top;
        createSquareBezier(sctx);
    }
});

$(".lvcon2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        $('#linel2').attr("x1",""+ui.position.left)
        $('#linel2').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        lvcp2.x = ui.position.left;
        lvcp2.y = ui.position.top;
        createSquareBezier(sctx);
    }
});

$(".thcon1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#linet1').attr("x1",""+ui.position.left)
        $('#linet1').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        thcp1.x = ui.position.left;
        thcp1.y = ui.position.top;
        createSquareBezier(sctx);
    }
});
$(".thcon2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#linet2').attr("x1",""+ui.position.left)
        $('#linet2').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        thcp2.x = ui.position.left;
        thcp2.y = ui.position.top;
        createSquareBezier(sctx);
    }
});
$(".bhcon1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#lineb1').attr("x1",""+ui.position.left)
        $('#lineb1').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        bhcp1.x = ui.position.left;
        bhcp1.y = ui.position.top;
        createSquareBezier(sctx);
    }
});

$(".bhcon2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#lineb2').attr("x1",""+ui.position.left)
        $('#lineb2').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        bhcp2.x = ui.position.left;
        bhcp2.y = ui.position.top;
        createSquareBezier(sctx);
    }
});
$(".rvcon1").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#liner1').attr("x1",""+ui.position.left)
        $('#liner1').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        rvcp1.x = ui.position.left;
        rvcp1.y = ui.position.top;
        createSquareBezier(sctx);
    }
});
$(".rvcon2").draggable({
    containment : 'parent',
    drag : function(event, ui){
        
        $('#liner2').attr("x1",""+ui.position.left)
        $('#liner2').attr("y1",""+ui.position.top)
        sctx.clearRect(0,0,300,300);
        rvcp2.x = ui.position.left;
        rvcp2.y = ui.position.top;
        createSquareBezier(sctx);
    }
});

/*Drawing lines from control points */
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="linel1" x1="45" y1="108" x2="72" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="linel2" x1="97" y1="175" x2="72" y2="217" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="linet1" x1="100" y1="108" x2="72" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="linet2" x1="189" y1="36" x2="217" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="lineb1" x1="100" y1="252" x2="72" y2="217" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="lineb2" x1="189" y1="181" x2="217" y2="217" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="liner2" x1="252" y1="175" x2="217" y2="217" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')
$(".sparentDiv").append('<svg class="svgObject6" height="300" width="300"><line id="liner1" x1="190" y1="108" x2="217" y2="72" style="stroke:rgb(31, 129, 140);stroke-width:0.5" /></svg>')


/*---------------------End Unsymetric square Ui--------------------------*/


export { p1, cp1, cp2, p2, p3, cp3, cp4, p4 };
export{point1,point2,point3,lcp1,lcp2,bcp1,bcp2,rcp1,rcp2}
export {sp1,lvcp1,lvcp2,rvcp1,rvcp2,sp2,sp3,thcp1,thcp2,bhcp1,bhcp2,sp4};