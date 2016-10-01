var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
var self = $scope;
self.firstName= "Joey";
self.lastName= "Bourbon";
self.colr="Blue";
self.age=48;
self.sign="Cancer";
});