const loadData = async () => {
    cardContainer.innerHTML = '';
    loader.classList.remove('hidden');

    const searchInput = document.getElementById('search-input');
    if(searchInput.value !== '' && isNaN(searchInput.value)) {
        try {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(Array.isArray(data)) {
                loader.classList.add('hidden');
                displayData(data);
            }
            else {
                loader.classList.add('hidden');
                alert('Enter valid word!');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        alert('Enter valid input!');
        loader.classList.add('hidden');
    }
}