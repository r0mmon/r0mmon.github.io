function getSearchResult() {
  $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php',
    data: queryData,
    dataType: 'json',
    type: 'GET',
    // headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      alert (data.result);
       // do something with data
    }
} );
}
