// the goal of this file is to render multiple orbits in his style in 3D


function setup() {
    createCanvas(401, 401, WEBGL);
    //normalMaterial();
}



function draw() {
    background(0);
    stroke(255,0,0);
    lights();
    orbitControl();
    noLights();

    frameRate(30);

    push();
    emissiveMaterial(0,0,0,1)
    sphere(50);
    pop();

    for (let i = 0; i < frameCount%60/5; i++) {
        // Render a 2D ellipse in 3D space
        push();
        translate(0, 0, 0); // Position the ellipse in 3D space
        rotateX(0.7* i); // Rotate around the X-axis
        rotateY(0.4* i); 
        rotateZ(1.2* i);
        addEllipse(150 + (i*10), 0.08*i);
        pop();
    }

    drawCrosses();
    if (frameCount == 60) {
        saveGif('mySketch', 5);
    }
}

function drawCrosses() {
    push();
    // Set up an orthographic projection for screen space drawing
    camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
    ortho(-width / 2, width / 2, -height / 2, height / 2, -1000, 1000);

    
    for (let i = 0; i < width; i += 50) {
        for (let j = 0; j < height; j += 50) {
            let x = i - width / 2; // Adjust for WEBGL coordinate system
            let y = j - height / 2; // Adjust for WEBGL coordinate system
            if (i == 0 || i == width-1 || j == 0 || j == height-1) {
                stroke(255);
            } else {
                stroke(255);
            }
            
            line(x, y - 5, x, y + 5); // Vertical line
            line(x - 5, y, x + 5, y); // Horizontal line
        }
    }
    pop();
}

function addEllipse(a,e) {
    
    //let vertices = [];

    stroke(255,0,0);
    strokeWeight(2);
    noFill();
    
    beginShape();

    for (let angle = 0; angle < TWO_PI; angle += 0.1) {
        let r = a*(1-e**2) / (1 + e * cos(angle));
        
        let x = r * cos(angle); // Radius along x-axis
        let y = r * sin(angle); // Radius along y-axis
        

        //vertices.push({ x, y, z: 0 });
        vertex(x,y,0); // Define the vertex in 3D space
    }

    endShape(CLOSE);
}
