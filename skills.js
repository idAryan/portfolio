document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.setProperty("--skill-level", `${skillLevel}%`);
    });
});
