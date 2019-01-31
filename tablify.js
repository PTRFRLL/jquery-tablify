/**
 * jquery-tablify
 * Peter Fiorella
 * 2019
 */
(function( $ ) {
    
    function cap(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function normalize(data){
        try{
            return JSON.parse(data);
        }catch(e){
            return data;
        }
    }

    function maxKeys(data){
        var max = 0;
        for(var i = 0; i < data.length; i++){
            var keyCount = Object.keys(data[i]).length;
            if(keyCount > max){
                max = keyCount;
                index = i;
            }
        }
        return index;
    }

    $.fn.tablify = function(options) {
        let data = normalize(options.data);

        let settings = $.extend({
            capitalize: true,
            uppercase: false
        }, options);

        if(!data || data.length == 0){
            return this;
        }
        var mostKeys = maxKeys(data);
        var keys = Object.keys(data[mostKeys]);
        var header = keys.map(item => {
            if(settings.capitalize){
                item = cap(item);
            }
            if(settings.uppercase){
                item = item.toUpperCase();
            }
            return `<th>${item}</th>`;
        }).join('');
        let thead = `<thead><tr>${header}</tr></thead>`;

        let body = data.map(item => {
            return "<tr>" + Object.keys(item).map(prop => {
                return `<td>${item[prop]}</td>`
            }).join('') + "</tr>";
        }).join('');
        let tbody = `<tbody>${body}</tbody>`;
        let html = thead + tbody;
        this.html(html);
        return this;
    };
 
}( jQuery ));