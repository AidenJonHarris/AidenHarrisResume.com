document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');

    // Number of shapes you want to create
    const numShapes = 20;

    // Create circles and triangles randomly
    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');

        // Randomize shape type
        const shapeType = Math.random() < 0.5 ? 'circle' : 'triangle';
        shape.classList.add(shapeType);

        // Randomize position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        shape.style.left = posX + 'px';
        shape.style.top = posY + 'px';

        body.appendChild(shape);
    }
});
