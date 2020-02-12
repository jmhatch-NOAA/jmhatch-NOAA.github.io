'use strict';

angular.module('seaturtleApp')

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
			task: "1.1", date: "06/2018", milestone: "Meet with GARFO to coordinate on joint GARFO-NEFSC efforts to create rasters of commercial fishing effort.", percent: 100, type: "info" 
			}, {
			task: "1.2", date: "09/2019", milestone: "Complete preparation of commercial fishing effort raster layers (for case study and other possible fisheries).", percent: 100, type: "info" 				
			}, {
			task: "1.3", date: "03/2020", milestone: "Submit to Center review a manuscript describing the spatial-temporal overlap analysis.", percent: 25, type: "info"
			}, {                  
			task: "2.1", date: "04/2019", milestone: "Coordinate with GFDL on the assembly of relevant IPCC projections.", percent: 100, type: "info" 
			}, {
			task: "2.2", date: "05/2019", milestone: "Assemble OISST monthly composites synced to a spatial grid from 1982-2018.", percent: 100, type: "info" 				
			}, {
			task: "2.3", date: "08/2019", milestone: "Forecast / hindcast the loggerhead distribution in relation to SST and depth using the fitted model.", percent: 100, type: "info"
			}, {
			task: "2.4", date: "09/2020", milestone: "Submit to Center review a manuscript using climate change scenarios to project loggerhead turtle distributions in the U. S. mid-Atlantic.", percent: 75, type: "info"
			}, {
			task: "3.1", date: "11/2018", milestone: "Complete R Shiny application for track reconstruction using a CTCRW model as described in Winton et al. (2018).", percent: 100, type: "info" 
			}, {
			task: "3.2", date: "12/2018", milestone: "Using the developed R Shiny app, filter 196 satellite tags deployed on large juvenile and adult loggerheads from 2009-2018.", percent: 100, type: "info" 				
			}, {               
			task: "3.4", date: "09/2020", milestone: "Prepare a NMFS webpage which dynamically illustrates climate change scenarios and projected loggerhead distribution.  Webpage to go live when related manuscript published.", percent: 50, type: "info"
		}];

	});

	$scope.$on('$stateChangeSuccess', function () {
		$scope.active = '/';
	});
