var events = function () {
    var _init = function () {
        _keyboardEvents();
    }
    _keyboardEvents = function () {
        var textToSearchFor;

        var _search = function () {
            var $this = $(this),
                thisText = $this.text().toLowerCase();
            if (thisText.search(textToSearchFor) > -1) {
                // The search input matches
                $this.show();
            }
            else {
                $this.hide();
            }
        };

        $('#search').keyup(function () {
            var $searchInput = $(this);
            textToSearchFor = $searchInput.val().toLowerCase();

            $('#accordion .panel-title > a').each(_search);

            $('#documentation-list > li > a').each(_search);
        });
    };

    return {
        init: _init
    };
}();