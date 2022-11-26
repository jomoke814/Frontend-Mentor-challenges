// dynamic card 

const projectCards = document.querySelector('.project-card');
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('cards');
    const image = document.createElement('div');
    image.classList.add('image');
    const img = document.createElement('img');
    img.setAttribute('src', `${project.image}`)
    const tags = document.createElement('div');
    tags.classList.add('tags');
    const para1 = document.createElement('p');
    para1.textContent = `${project.tags.tag1}`;
    const para2 = document.createElement('p');
    para2.textContent = `${project.tags.tag2}`;
    const buttonTag = document.createElement('button');
    buttonTag.textContent = `${project.tags.tag3}`;
    const descriptionTag = document.createElement('div');
    descriptionTag.classList.add('description');
    const heading = document.createElement('h2');
    heading.textContent = `${project.title}`;
    const para = document.createElement('p');
    para.textContent = `${project.description}`;
    const linkTag = document.createElement('div');
    linkTag.classList.add('links');
    const a = document.createElement('a')
    a.innerText = `Solution`
    a.setAttribute('href', `${project.link.link1}`);
    const a2 = document.createElement('a');
    a2.innerText = `Live`
    a2.setAttribute('href', `${project.link.link2}`);


    projectCards.appendChild(card);
    card.appendChild(image);
    image.appendChild(img);
    image.appendChild(tags);
    tags.appendChild(para1);
    tags.appendChild(para2);
    tags.appendChild(buttonTag);
    card.appendChild(descriptionTag);
    descriptionTag.appendChild(heading);
    descriptionTag.appendChild(para);
    descriptionTag.appendChild(linkTag);
    linkTag.appendChild(a);
    linkTag.appendChild(a2);
})














    // <div class="cards">
    //             <div class="image">
    //                 <img src="images/${project.image}" alt="design-img">
    //             </div>
    //             <div class="description">
    //                 <h2>${project.name}</h2>
    //                 <p>${project.description}</p>
    //                 <div class="links">
    //                     <a href="https://github.com/jomoke814/news-homepage">Solution</a>
    //                     <a href="https://jomoke814.github.io/news-homepage/">Live</a>
    //                 </div>
    //             </div>
    //         </div>