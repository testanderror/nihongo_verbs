const btn = document.getElementById('button');
const container = document.getElementById('container');

function fetchData() {
  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(verb) {
  const randomInteger = Math.floor(Math.random() * 50);
  container.innerHTML = `
  <div class="container1">
    <p id="verb">${verb[randomInteger].Verb}</p>
    <p id="kanji">${verb[randomInteger].Kanji}</p>
    <p id="en">${verb[randomInteger]['English Meaning']}</p>
  </div>
  <div class="container2">
    <div class="positive">
    <p class="sub">Affirmative Tenses</p>
      <p id="1-1">Polite Present/Future: <br> ${verb[randomInteger]['Positive Tenses']['Present/Future Affirmative']}</p>
      <p id="1-2">Casual Present/Future: <br> ${verb[randomInteger]['Positive Tenses']['Casual Present/Future Affirmative']}</p>
      <p id="1-3">Polite Past:<br> ${verb[randomInteger]['Positive Tenses']['Past Affirmative']}</p>
      <p id="1-4">Casual Past:<br> ${verb[randomInteger]['Positive Tenses']['Casual Past Affirmative']}</p>
      <p id="1-5">TE Form:<br> ${verb[randomInteger]['Positive Tenses']['TE Form']}</p>
    </div>
    <div class="negative">
      <p class="sub">Negative Tenses</p>
      <p id="2-1">Polite Present/Future: <br>${verb[randomInteger]['Negative Tenses']['Present/Future Negative']}</p>
      <p id="2-2">Casual Present/Future: <br>${verb[randomInteger]['Negative Tenses']['Casual Present/Future Negative']}</p>
      <p id="2-3">Polite Past: <br>${verb[randomInteger]['Negative Tenses']['Past Negative']}</p>
      <p id="2-4">Casual Past: <br>${verb[randomInteger]['Negative Tenses']['Casual Past Negative']}</p>
      <p id="2-5">TE Form: <br>${verb[randomInteger]['Negative Tenses']['TE Form']}</p>
    </div>
  </div>
  <div class="container3">
    <p>Extra Conjugations</p>
    <p id="3-1">TAI Form: <br>${verb[randomInteger]['Extra Conjugations']['Present/Future TAI Affirmative']}</p>
    <p id="3-2">Conditional: <br>${verb[randomInteger]['Extra Conjugations']['Casual Conditional']}</p>
  </div>
  `;
}
fetchData();

btn.addEventListener('click', fetchData);

// container.innerHTML = `

// `;

// const name = document.getElementById('verb');
// const kanji = document.getElementById('kanji');
// const english = document.getElementById('en');
// const pos1 = document.getElementById('1-1');
// const pos2 = document.getElementById('1-2');
// const pos3 = document.getElementById('1-3');
// const pos4 = document.getElementById('1-4');
// const pos5 = document.getElementById('1-5');
// const ne1 = document.getElementById('2-1');
// const ne2 = document.getElementById('2-2');
// const ne3 = document.getElementById('2-3');
// const ne4 = document.getElementById('2-4');
// const ne5 = document.getElementById('2-5');
// const x1 = document.getElementById('3-1');
// const x2 = document.getElementById('3-2');

// name.innerHTML = verb[randomInteger].Verb;
// kanji.innerHTML = ${verb[randomInteger].Kanji};
// english.innerHTML = ${verb[randomInteger]['English Meaning']};
// pos1.innerHTML =
//   ${verb[randomInteger]['Positive Tenses']['Present/Future Affirmative']};
// pos2.innerHTML =
//   ${verb[randomInteger]['Positive Tenses']['Casual Present/Future Affirmative'];
// pos3.innerHTML = ${verb[randomInteger]['Positive Tenses']['Past Affirmative']};
// pos4.innerHTML =
//   verb[randomInteger]['Positive Tenses']['Casual Past Affirmative'];
// pos5.innerHTML = verb[randomInteger]['Positive Tenses']['TE Form'];
// ne1.innerHTML =
//   verb[randomInteger]['Negative Tenses']['Present/Future Negative'];
// ne2.innerHTML =
//   verb[randomInteger]['Negative Tenses']['Casual Present/Future Negative'];
// ne3.innerHTML = verb[randomInteger]['Negative Tenses']['Past Negative'];
// ne4.innerHTML =
//   verb[randomInteger]['Negative Tenses']['Casual Past Negative'];
// ne5.innerHTML = verb[randomInteger]['Negative Tenses']['TE Form'];
// x1.innerHTML =
//   ${verb[randomInteger]['Extra Conjugations']['Present/Future TAI Affirmative']};
// x2.innerHTML =
//   verb[randomInteger]['Extra Conjugations']['Casual Conditional'];
