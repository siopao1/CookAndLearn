document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    const cuisine = document.getElementById("selectCuisine");
    const difficulty = document.getElementById("selectDifficulty");
    const meal = document.getElementById("selectMeal");
    const time = document.getElementById("selectTime");
    const searchMain = document.getElementById("searchInput");
    const searchHeader = document.getElementById("searchNavbar"); 
    const clearBtn = document.getElementById("clearFilters");

    function filterCards() {
        const searchValue = searchMain.value.trim().toLowerCase() || searchHeader.value.trim().toLowerCase();

        cards.forEach(card => {
            let show = true;

           
            const c = cuisine.value;
            const d = difficulty.value;
            const m = meal.value;
            const t = time.value;

            
            const cardCuisine = card.dataset.cuisine;
            const cardDifficulty = card.dataset.difficulty;
            const cardMeal = card.dataset.meal;
            const cardTime = parseInt(card.dataset.time);
            const cardName = card.dataset.name.toLowerCase();

            
            if (searchValue && !cardName.includes(searchValue)) show = false;

            // Filters
            if (c && cardCuisine !== c) show = false;
            if (d && cardDifficulty !== d) show = false;
            if (m && cardMeal !== m) show = false;
            if (t) {
                const [min, max] = t.split("-").map(Number);
                if (cardTime < min || cardTime > max) show = false;
            }

            card.style.display = show ? "block" : "none";
        });
    }

   
    [cuisine, difficulty, meal, time, searchMain, searchHeader].forEach(el =>
        el.addEventListener("input", filterCards)
    );

    
    clearBtn.addEventListener("click", () => {
        cuisine.value = "";
        difficulty.value = "";
        meal.value = "";
        time.value = "";
        searchMain.value = "";
        searchHeader.value = "";
        filterCards();
    });

});