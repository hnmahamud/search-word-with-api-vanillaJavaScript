const cardContainer = document.getElementById('card-container');
const mainCardContainer = document.getElementById('main-card-container');
const loader = document.getElementById('loader');

const displayData = (data) => {
    let audioUrl = '';
    data.forEach(element => {
        element.phonetics.forEach(element => {
            console.log(element.audio);
            if(element.audio !== '') {
                audioUrl = element.audio;
            }
        });
    });

    // mainCardContainer.classList.add('border');
    cardContainer.innerHTML = '';
    cardContainer.classList.add('card-body');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="flex justify-between">
        <div>
            <h2 class="card-title">${data[0].word ? data[0].word : ''}</h2>
            <p>${data[0].phonetic ? data[0].phonetic : ''}</p>
        </div>
        <div>
            <audio controls src="${audioUrl ? audioUrl : ''}"></audio>
        </div>
    </div>
    <hr class="mt-4">
    `
    cardContainer.append(newDiv);
    const allMeaning = []
    data.forEach(element => {
        element.meanings.forEach(element => {
            allMeaning.push(element);
        });
    });

    allMeaning.forEach(element => {
        const {partOfSpeech, definitions, synonyms, antonyms} = element;
        const mainDef = [];
        definitions.forEach(element => {
            mainDef.push(element.definition);
        });
        const anotherDiv = document.createElement('div');
        anotherDiv.innerHTML = `
        <div class="flex flex-col space-y-4">
            <p><strong>PartOfSpeech: </strong> ${partOfSpeech ? partOfSpeech : ''}</p>
            <p><strong>Meaning: </strong> ${mainDef ? mainDef : ''}</p>
            <p><strong>Synonyms: </strong> ${synonyms ? synonyms : ''}</p>
            <p><strong>Antonyms: </strong> ${antonyms ? antonyms : ''}</p>
        </div>
        <hr class="mt-4">
        `
        cardContainer.append(anotherDiv);
    });
    
}