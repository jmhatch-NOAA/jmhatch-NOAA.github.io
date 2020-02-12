var app = angular.module('seaturtleApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url:'/',
            views: {
                'header': {
			templateUrl : 'views/header.html'
                },
		'content': {
			templateUrl : 'views/home.html'
		},
		'footer' : {
			templateUrl : 'views/footer.html'
		}
            }
    	})
	
	.state('app.about', {
		url:'about',
		views: {
			'content@': {
				templateUrl: 'views/about.html'
			}
		}
	})

	.state('app.shiny', {
		url:'shiny',
		views: {
			'content@': {
				templateUrl: 'views/shiny.html'
			}
		}
	})

	.state('app.terms', {
		url:'terms',
		views: {
			'content@': {
				templateUrl: 'views/terms.html'
			}
		}
	});
	
    $urlRouterProvider.otherwise('/');
	
});
