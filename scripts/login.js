document.addEventListener("DOMContentLoaded", function () {
    const UPPER_MAX_RADIUS = 100;
    const LOWER_MAX_RADIUS = 25;
    // Create the container that will follow the cursor.
    const orbitContainer = document.createElement("div");
    orbitContainer.classList.add("cursor-orbit");
    document.body.appendChild(orbitContainer);

    // Reference to the login form.
    const form = document.querySelector(".form");

    // Global minimum and maximum orbit radius values.
    let globalMinRadius = 10;
    let globalMaxRadius = UPPER_MAX_RADIUS; // Increased max radius

    // Create an array for particles.
    const particles = [];
    const numParticles = 50; // Number of particles

    // Helper: generate random number between min and max.
    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    // Create particles with random starting parameters.
    for (let i = 0; i < numParticles; i++) {
        const particleElem = document.createElement("div");
        particleElem.classList.add("orbit-particle");
        orbitContainer.appendChild(particleElem);

        const particle = {
            elem: particleElem,
            currentAngle: randomRange(0, 360),          // Starting angle (degrees)
            speed: randomRange(20, 100),                 // Angular speed (deg per second)
            currentRadius: randomRange(globalMinRadius, globalMaxRadius), // Initial orbit radius (px)
            targetRadius: randomRange(globalMinRadius, globalMaxRadius),  // Target orbit radius (px)
            nextRadiusUpdate: performance.now() + randomRange(500, 1500)    // Next update time (ms)
        };

        particles.push(particle);
    }

    // Variables for inertia effect on the container.
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    // Flag to check if the mouse is inside the .form area.
    let inForm = false;

    let lastTimestamp = performance.now();
    function animate(timestamp) {
        const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
        lastTimestamp = timestamp;

        // Smoothly update current position toward the target (simulate mass/inertia)

        let inertiaFactor = 0.03;
        currentX += (targetX - currentX) * inertiaFactor; // Adjust the factor (0.1) for more or less lag
        currentY += (targetY - currentY) * inertiaFactor;
        orbitContainer.style.left = currentX + "px";
        orbitContainer.style.top = currentY + "px";

        // Update particle properties only if the container is visible (i.e. mouse is not inside the form)
        if (!inForm) {
            particles.forEach(p => {
                // Update orbit angle.
                p.currentAngle += p.speed * deltaTime;
                // Update target radius periodically.
                if (timestamp > p.nextRadiusUpdate) {
                    p.targetRadius = randomRange(globalMinRadius, globalMaxRadius);
                    p.nextRadiusUpdate = timestamp + randomRange(500, 1500);
                }
                // Smoothly interpolate the current radius toward the target radius.
                p.currentRadius += (p.targetRadius - p.currentRadius) * 0.05;
                // Apply transformation: rotate then translate outward.
                p.elem.style.transform = `rotate(${p.currentAngle}deg) translateX(${p.currentRadius}px)`;
            });
            orbitContainer.style.display = "block";
        } else {
            orbitContainer.style.display = "none";
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // On mouse move, update the target position and create a fading trail.
    document.addEventListener("mousemove", function (e) {
        targetX = e.clientX;
        targetY = e.clientY;
        inForm = form.contains(e.target);

        if (!inForm) {
            // Create a trail clone using the current (inertial) container position.
            const trail = orbitContainer.cloneNode(true);
            trail.classList.add("orbit-trail");
            trail.style.left = currentX + "px";
            trail.style.top = currentY + "px";
            document.body.appendChild(trail);
            setTimeout(() => { trail.remove(); }, 500);
        }
    });

    // When the mouse button is pressed down, decrease the global maximum radius.
    document.addEventListener("mousedown", function (e) {
        globalMaxRadius = LOWER_MAX_RADIUS; // Reduce maximum radius
    });

    // When the mouse button is released, restore the original maximum radius.
    document.addEventListener("mouseup", function (e) {
        globalMaxRadius = UPPER_MAX_RADIUS; // Restore maximum radius
    });
});


function redirectWithDelay(url, delay_in_ms) {
    setTimeout(() => {
        window.location.href = url;
    }, delay_in_ms);
}
