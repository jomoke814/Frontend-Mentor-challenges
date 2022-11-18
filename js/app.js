// dynamic card 

const projectCards = document.querySelector('.project-card');
projects.forEach(project => {
    projectCards.innerHTML += `
    <div class="cards">
                <div class="image">
                    <img src="images/${project.image}" alt="design-img">
                </div>
                <div class="description">
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <div class="links">
                        <a href="https://github.com/jomoke814/news-homepage">Solution</a>
                        <a href="https://jomoke814.github.io/news-homepage/">Live</a>
                    </div>
                </div>
            </div>
    `;
})