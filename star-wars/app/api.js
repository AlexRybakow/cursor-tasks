document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const swPerson = document.getElementById('swperson');
  
  const personTitle = document.getElementById('perstitle');
  
  const personButton = document.createElement('button');
  personButton.innerText = 'Show characters';
  
  const swPlanet = document.getElementById('swplanet');
  
  const planetTitle = document.getElementById('pltitle');
  
  
  const planetButton = document.createElement('button');
  planetButton.innerText = 'Show planets'

  const wookie = document.getElementById('wookie');

  const wookieTitle = document.getElementById('wookie-lang');
  
  const wookieLangButton = document.createElement('button');
  wookieLangButton.innerText = 'Translate titles into wookie'
  
  function createElement(element) {
      return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  function getPersons() {
  const ul = document.getElementById('swpersons');
  const url = 'https://swapi.dev/api/people/';
  
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let persons = data.results;
    return persons.map(function(person) {
      let li = createElement('li');
      let span = createElement('span');
      span.innerHTML = `${person.name} - ${person.birth_year} - ${person.gender}`;
      li.style.marginBottom = '20px';
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  }); 
  }
  
  personButton.addEventListener('click', getPersons)
  
  personButton.onclick = function() {
    personButton.hidden = true;
  }
  
  function getPlanets() {
  
  const ul = document.getElementById('planets');
  const url = 'https://swapi.dev/api/planets/';
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let planets = data.results;
    return planets.map(function(planet) {
      let li = createElement('li');
      let span = createElement('span');
      span.innerHTML = `${planet.name}`;
      li.style.marginBottom = '20px'
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  }); 
  }
  
  planetButton.addEventListener('click', getPlanets)
  
  planetButton.onclick = function() {
    planetButton.hidden = true;
  }
  
  function helpWookie() {
  
    const ul = document.getElementById('films');
    const url = 'https://swapi.dev/api/films/2/?format=wookiee';
    
    fetch(url)
    .then(response => response.text())
    .then(data => {
      const planets = JSON.parse(data.replaceAll('\\',''));
      console.log(planets)
    })
    .catch(function(error) {
      console.log(error);
    }); 
    }
    
    wookieLangButton.addEventListener('click', helpWookie)
    
    wookieLangButton.onclick = function() {
      wookieLangButton.hidden = true;
    }

  swPerson.append(personButton)
  swPlanet.append(planetButton)
  wookie.append(wookieLangButton)
  
  body.append(swPerson, swPlanet, wookie)
})

