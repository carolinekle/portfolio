import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Ferro = () => {
  const ferroRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let THE_SEED;
      let number_of_particles = 1000; 
      let number_of_particle_sets = 6;
      let particle_sets = [];
      let palette;
      

      const centerX = 100; 
      const centerY = 100;
      const radius = 90;   

      p5.disableFriendlyErrors = true;  

      p.setup = () => {
        p.createCanvas(200, 200).parent(ferroRef.current); 
        THE_SEED = p.floor(p.random(9999999));
        p.randomSeed(THE_SEED);

        p.noFill();
        p.background("#f5f5f5");
        p.stroke(20, 10);
        p.strokeWeight(0.7);
        p.smooth();

        palette = [p.color(80, 55, 83, 20), p.color(21, 142, 121, 20)];

        
        for (let j = 0; j < number_of_particle_sets; j++) {
          let ps = [];
          for (let i = 0; i < number_of_particles; i++) {
            const angle = p.random(p.TWO_PI); 
            const r = p.random(radius);    
            const x = centerX + r * p.cos(angle); 
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
          this.pos.x += p.cos(this.angle);
          this.pos.y += p.sin(this.angle);

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

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={ferroRef} className="ferro-sketch"></div>;
};

export default Ferro;
