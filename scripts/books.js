angular.module('myApp', [])
  .controller('MyContoroller', function($scope){
    $scope.books =[
      {
        isbn: 'aaaa',
        title: 'サーブレット＆JSPリファレンス',
        price: 2900,
        publish: 'gihyo',
        published: new Date(2015, 0, 8)
      },
      {
        isbn: 'bbbb',
        title: 'Javaリファレンス',
        price: 4000,
        publish: 'gihyo',
        published: new Date(2017, 11, 8)
      },
    ];
  });
