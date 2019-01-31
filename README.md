# jQuery Tablify

Simple jQuery plugin that fills contents of an HTML table with JSON or JS array data. 

## Usage

Include tablify.js (and jQuery) in your project 
```html
<script src='jquery.js'></script>
<script src='tablify.js'></script>
```

Intialize tablify on an empty table:

```js
$('#users').tablify(options);
```

### Options
 - `data`: JSON or JS array (required)
 - `capitalize`: will capitalize header items (default true)
 - `uppercase`: will uppercase header names (default false) (overrides capitalize)


## Examples
```html

<table id='users'>
</table>

<script> 
    $(document).ready(function(){
        let users = [
            {name: 'Phillip J. Fry', occupation: 'Delivery Boy'}, 
            {name: 'Bender Bending Rodriguez', occupation: 'Girder-bender'}, 
            {name: 'Turanga Leela', occupation: 'Spaceship Captain'}
        ];
        
        $('#users').tablify({ data: users});
    });
</script>
```

The above example will produce:


| Name                     | Occupation        |
|--------------------------|-------------------|
| Phillip J. Fry           | Delivery Boy      |
| Bender Bending Rodriguez | Girder-bender     |
| Turanga Leela            | Spaceship Captain |


