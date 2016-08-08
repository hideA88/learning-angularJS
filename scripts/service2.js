angular.module('myApp')
  .value('getBookList', function(){
      return [
      {
        isbn: 'aaaa11',
        title: 'サーブレット＆JSPリファレンス',
        price: 2900,
        publish: 'gihyo',
        published: new Date(2015, 0, 8)
      },
      {
        isbn: 'bbbb22',
        title: 'Javaリファレンス',
        price: 4000,
        publish: 'gihyo',
        published: new Date(2017, 11, 8)
      },
    ];
  })
