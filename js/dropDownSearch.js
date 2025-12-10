document.addEventListener("DOMContentLoaded", function() {
   
    var selectDiff = document.getElementById("selectDiff");
    var selectMeal = document.getElementById("selectMeal");
    var selectTime = document.getElementById("selectTime");
    var clearBtn = document.getElementById("clearFilters");
   
    var searchNavbar = document.getElementById("searchNavbar");
    var searchPage = document.getElementById("searchPage");
    
    var cards = document.querySelectorAll(".cards .card");

    function filterCards() {
        var diffVal = selectDiff.value.toLowerCase();
        var mealVal = selectMeal.value.toLowerCase();
        var timeVal = selectTime.value.toLowerCase();

        var searchNavbarVal = searchNavbar.value.toLowerCase();
        var searchPageVal = searchPage.value.toLowerCase();
        var searchTerm = searchNavbarVal || searchPageVal; 

        
        cards.forEach(function(card) {
            var cardDiff = card.dataset.difficulty.toLowerCase();
            var cardMeal = card.dataset.meal.toLowerCase();
            var cardTime = card.dataset.time.toLowerCase();

           
            var cardTitle = card.querySelector("h3").innerText.toLowerCase();
            var cardDesc = card.querySelector("p").innerText.toLowerCase();

            var matchDiff = !diffVal || cardDiff === diffVal;
            var matchMeal = !mealVal || cardMeal === mealVal;
            var matchTime = !timeVal || cardTime === timeVal;

           
            var matchSearch = !searchTerm || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);

            if (matchDiff && matchMeal && matchTime && matchSearch) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }


    selectDiff.addEventListener("change", filterCards);
    selectMeal.addEventListener("change", filterCards);
    selectTime.addEventListener("change", filterCards);

    searchNavbar.addEventListener("keyup", filterCards);
    searchPage.addEventListener("keyup", filterCards);

    
    function clearFilters() {
        selectDiff.value = "";
        selectMeal.value = "";
        selectTime.value = "";
        searchNavbar.value = "";
        searchPage.value = "";
        filterCards();
    }
    
    clearBtn.addEventListener("click", clearFilters);

    filterCards(); 
});