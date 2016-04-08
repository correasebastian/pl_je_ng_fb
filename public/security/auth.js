(function() {
    'use strict';

    angular
        .module('app')
        .factory('auth', auth);

    auth.$inject = ['rootRef', '$firebaseAuth'];
    function auth(rootRef, $firebaseAuth) {
       return $firebaseAuth(rootRef)
    }
})();