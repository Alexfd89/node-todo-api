
$('#register-form').on('submit', function(e){
    e.preventDefault();
    var data = toJSONString(this);
    console.log(data);

fetch('https://fierce-wave-97937.herokuapp.com/users', {
            headers : {'content-type': 'application/json'},
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((res) =>  console.log(res))
        .catch((err)=>console.log(err))
});


	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}
        return JSON.stringify( obj );
	}


