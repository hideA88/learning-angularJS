angular.module('myApp', [])
  .controller('MyContoroller', ['getBookList', function(getBookList){
    this.books = getBookList.call();
  }]);
