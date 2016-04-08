angular.module('app')
.constant('FirebaseUrl', 'https://plngfb.firebaseio.com/')
.service('rootRef', ['FirebaseUrl', Firebase]);
  
//   truco que por detras esta haciendo lo siguiente
//   el servicio lo que hace es crear un new , pero una unica vez
  
//   new Firebase('FirebaseURL')
