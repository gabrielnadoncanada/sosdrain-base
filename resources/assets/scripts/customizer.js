import $ from 'jquery';

// Update the site title in real time...
wp.customize( 'blogname', function( value ) {
  value.bind( function( newval ) {
    $( '#site-title a' ).html( newval );
  } );
} );

