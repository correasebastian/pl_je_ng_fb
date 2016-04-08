

angular.module('app')
    .component('login', {
        templateUrl: 'security/login.html',
        bindings: {
            currentAuth: '='
        },
        controller: function(auth, $location) {
            debugger;

            this.loggedIn = !!this.currentAuth;
            this.anonLogin = function() {
                auth.$authAnonymously()
                    .then(function(res) {
                        console.info(res)
                        $location.path('/home')
                    })
                    .catch((function(err) {
                        this.errorMessage = err.code
                    })
                        .bind(this))

            }

            this.fbLogin = function() {
                auth.$authWithOAuthPopup('facebook')
                    .then(function(res) {
                        console.info(res)
                        $location.path('/home')
                    })
                    .catch((function(err) {
                        this.errorMessage = err.code
                    })
                        .bind(this))

            }
        }
    })
