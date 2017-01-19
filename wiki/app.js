

var wiki = new Vue({
  el: '#root',
  data: {
    message: '',
    res: []
  },
  methods: {
    getResult: function () {
      $.ajax( {
        url: 'http://ru.wikipedia.org/w/api.php',
        data:  {
          'action': "opensearch",
          'format': "json",
          'search': this.message//request.term
          },
        dataType: 'jsonp',
        type: 'GET',
        success: function(responce) {
          wiki.res = [];
          wiki.message = '';
          for (var i = 0; i < responce[2].length; i++) {
            var x = {};
            x.title = responce[1][i];
            x.content = responce[2][i];
            x.url = responce[3][i];
            wiki.res.push(x);
          }
        }
      });
    }
  }
})
