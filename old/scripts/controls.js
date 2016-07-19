$(".dropdown-menu li a").click(function () {
    var selectedText = $(this).text();
    $(this).parents('.dropdown').find('.dropdown-toggle').html(selectedText + ' <span class="caret"></span>');

    // selected item fix
    var items = $('li.active');
    items.each(function (index, item) {
        if (item.textContent !== selectedText) {
            item.className = "";
        }
    });
});