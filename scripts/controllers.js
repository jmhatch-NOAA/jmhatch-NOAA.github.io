'use strict';

angular.module('seaturtleApp')

		// controller for scrolling to the top
		.controller('ScrollCtrl', ['$scope', '$anchorScroll', function ($scope, $anchorScroll) {
			
			// scroll to the top
			$scope.backToTop = function () {
				$anchorScroll();
			};
			
		}])

		// controller for Navbar buttons
		.controller('NavbarBtnCtrl', function($scope, $state) {
	
			// set default active state to home
			$scope.active = $state.current.name;
	
			// function to set active state
			$scope.setActive = function(type) {
				$scope.active = type;
			};
	
			// function to determine active state
			$scope.isActive = function(type) {
				return type === $scope.active;
			};
	
		})

		// controller for progress table
		.controller('ProgressCtrl', function ($scope) {
	
			// progress report section
			$scope.milestones = [{
				date: "05/01/18", milestone: "Meet with GARFO for initial coordination meeting.", percent: 0, type: "info" 
			}, {
				date: "06/01/18", milestone: "Meet with GARFO to coordinate on joint GARFO-NEFSC efforts to create rasters of commercial fishing effort. Establish a research plan that coordinates with the GARFO summer intern project.", percent: 0, type: "info" 				
			}, {
				date: "09/30/18", milestone: "Complete the assembly of data on relevant IPCC projections.", percent: 0, type: "info" 				
			}, {
				date: "12/15/18", milestone: "Complete preparation of commercial fishing effort raster layers (for case study and other possible fisheries).", percent: 0, type: "info" 				
			}, {
				date: "01/15/19", milestone: "Meet with NEFSC bycatch folks and UMass Dartmouth to discuss bycatch plan.", percent: 0, type: "info" 				
			}, {
				date: "07/15/19", milestone: "R Shiny application for track reconstruction active on a NMFS website.", percent: 75, type: "info" 				
			}, {
				date: "12/15/19", milestone: "Submit to Center review a manuscript describing the spatial / temporal overlap analysis.", percent: 0, type: "info" 				
			}, {
				date: "09/15/20", milestone: "Complete component that models loggerhead density in relation to temperature.", percent: 0, type: "info" 				
			}, {
				date: "09/15/20", milestone: "Prepare a NMFS webpage which dynamically illustrates additional climate change scenarios and projected loggerhead distribution. Webpage to go live when related manuscript published.", percent: 0, type: "info" 				
			}, {
				date: "09/15/20", milestone: "Submit to Center review a manuscript using climate change scenarios to project loggerhead turtle distributions in the U.S. mid-Atlantic.", percent: 0, type: "info" 				
			}];
	
		});