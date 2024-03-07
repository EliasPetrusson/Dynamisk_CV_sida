fetch('cv.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    document.querySelector('.uno').innerHTML = `
      <h1>${data.name}</h1>
      <p>${data.contact.phone} | ${data.contact.email}</p>
      <p>${data.summary}</p>
    `;
   
   
    const workExperienceSection = document.querySelector('.dos');
    data.workExperience.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.innerHTML = `
        <h3>${job.title}</h3>
        <h4>${job.company}</h4>
        <ul>
          ${job.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
        </ul>
      `;
      workExperienceSection.appendChild(jobElement);
    });

   
    const skillsSection = document.querySelector('.tres');
    data.skills.work.forEach(category => {
      const categoryElement = document.createElement('div');
      categoryElement.innerHTML = `
        <h3>${category.category}</h3>
        <ul>
          ${category.items.map(skill => `<li>${skill.name}<span class="skill-bar">${skill.level}</span></li>`).join('')}
        </ul>
      `;
      skillsSection.appendChild(categoryElement);
    });

   
    const languagesElement = document.createElement('div');
    languagesElement.innerHTML = `
      <h3>SPRÅK</h3>
      <ul>
        ${data.skills.languages.map(language => `<li>${language.name}<span class="skill-bar">${language.level}</span></li>`).join('')}
      </ul>
    `;
    skillsSection.appendChild(languagesElement);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });