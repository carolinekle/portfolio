import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Ferro = () => {
    const ferroRef = useRef();

    useEffect(() => {
      const sketch = (p) => {
        let THE_SEED;
        let number_of_particles = 3000;  
        let number_of_particle_sets = 6;
        let particle_sets = [];
        let palette;
        

        const centerX = 200;  
        const centerY = 200;  
        const radius = 150;  
  
        p5.disableFriendlyErrors = true;  
  
        p.setup = () => {
          p.createCanvas(400, 400);
          THE_SEED = p.floor(p.random(9999999));
          p.randomSeed(THE_SEED);
  
          p.noFill();
          p.background('#F5F5F5');
          p.stroke(20, 10);
          p.strokeWeight(0.7);
          p.smooth();
  
          palette = [p.color(80, 55, 83, 20), p.color(21, 142, 121, 20)];
  
          // Initialize particles within a circle
          for (let j = 0; j < number_of_particle_sets; j++) {
            let ps = [];
            for (let i = 0; i < number_of_particles; i++) {
              const angle = p.random(p.TWO_PI);  // Random angle
              const r = p.random(radius);        // Random radius within the circle
              const x = centerX + r * p.cos(angle);  // Convert polar to Cartesian
              const y = centerY + r * p.sin(angle);
              ps.push(new Particle(x, y, angle));
            }
            particle_sets.push(ps);
          }
        };
  
        p.draw = () => {
          particle_sets.forEach((particles, index) => {
            particles.forEach((particle) => {
              particle.update(index);
              particle.display(index);
            });
          });
        };
  
        class Particle {
          constructor(x, y, phi) {
            this.pos = p.createVector(x, y);
            this.angle = phi;
            this.val = 0;
          }
  
          update(index) {
            // Move particle
            this.pos.x += p.cos(this.angle);
            this.pos.y += p.sin(this.angle);
  
            // Compute noise values for particle movement
            let nx =
              p.map(this.pos.y, 0, p.height, 3, 0.5) *
              p.map(this.pos.x, 0, p.width, -1, 1);
            let ny =
              2 *
              p.map(this.pos.y, 0, p.height, 3, 0.5) *
              p.map(this.pos.y, 0, p.height, -1, 1);
  
            let n = p.createVector(nx, ny);
  
            let nval =
              (p.noise(n.x + 42, n.y - 23) +
                0.045 * (index - number_of_particle_sets / 2)) %
              1;
  
            this.angle += 3 * p.map(nval, 0, 1, -1, 1);
            this.val = nval;
  
            
            let distFromCenter = p.dist(this.pos.x, this.pos.y, centerX, centerY);
            if (distFromCenter > radius) {
              this.angle += p.PI;  
            }
          }
  
          display(index) {
            if (this.val > 0.482 && this.val < 0.518) {
              p.push();
              p.translate(this.pos.x, this.pos.y);
              p.rotate(this.angle);
              p.point(0, 0);
              p.pop();
            }
          }
        }
      };
  
      ferroRef.current = new p5(sketch);
  
      return () => {
        ferroRef.current.remove();
      };
    }, []);
  
    return <div id="p5-sketch-container"></div>;
  };
  
export default Ferro;
