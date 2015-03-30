(function ( $ ) {

    $.fn.attrs = function(regex) {

        var attributes = {};

        if (this.length) {
            $.each(this[0].attributes, function(index, attr) {
                var name = attr.name;
                if (!regex || name.match(regex)) {
                    attributes[attr.name] = attr.value;
                }
            });
        }

        return attributes;
    };

}( jQuery ));
