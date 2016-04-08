angular.module('app').component('home', {
  templateUrl: 'home/home.html',
  controller: function (rootRef) {
      rootRef.on('value', function (snap) {
          console.log('connected', snap.val())
      })
  }
})