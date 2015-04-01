$("#search-form").submit(function(event){
    event.preventDefault();

    var phrase = $("#phrase").val().toLowerCase(),
    map = {
        "big": "Althing",
        "small": "Chram",
        "corner": "Ślęża",
        "side": "Radogoszcz",
    }, input = $("#input"),
    output = $("#output"),
    results = $("#results"),
    noResults = $("#no-results");
    if (phrase in map) {
        input.html(phrase.charAt(0).toUpperCase() + phrase.slice(1));
        output.html(map[phrase]);
        results.removeClass('hidden');
        noResults.addClass('hidden');
    } else {
        results.addClass('hidden');
        noResults.removeClass('hidden');
    }
});
