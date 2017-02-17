app.controller("testController", ["$scope", "$http", function($scope, $http){
	$http.get("/assets/resources/JPetStore_CD_changelog_id_3_09-Dec-2016 06-31 PM.xml").then(function(response){
		result = xmlToJSON.parseString(response.data);
		console.log(result);
		
		var appName = ((result[0].appName)[0])['_test'];
		var buildId = ((result[0].buildId)[0])['_test'];
		var buildStatus = ((result[0].buildStatus)[0])['_test'];
		
		var itemList = result[0].item;
		
		for(var i = 0; i < itemList.length; i++){
			
		}
	});
	$http.get("/assets/resources/TEST-Fish.Fish_test.xml").then(function(response){
		result = xmlToJSON.parseString(response.data);
		console.log(result);
	
		var errorCount = ((((result[0])['_attr])[0])['errors'])['_value'];
		var totalTests = ((((result[0])['_attr])[0])['tests'])['_value'];
		var failureCount = ((((result[0])['_attr])[0])['failures'])['_value'];
		var skippedTestCount = ((((result[0])['_attr])[0])['skipped'])['_value'];
		var buildId = ((result[0].buildId)[0])['_test'];
		var buildStatus = ((result[0].buildStatus)[0])['_test'];
		
		var testCases = (result[0])['testcase'];
		
		$scope.testCaseAttributes = [];
		for(var i = 0; i < testCases.length; i++){
			$scope.testCaseAttributesObj = {};
			$scope.testCaseAttributesObj['Class Name'] = (((testCases[i])['_attr'])['classname'])['_value'];
			$scope.testCaseAttributesObj['Method Name'] = (((testCases[i])['_attr'])['name'])['_value'];
			$scope.testCaseAttributesObj['Test Duration'] = (((testCases[i])['_attr'])['time'])['_value'];
			if(testCases[i].failure != undefined){
				$scope.testCaseAttributesObj['Failue Type'] = (((((testCases[i])['failure'])[0])['_attr'])['type'])['_value'];
				$scope.testCaseAttributesObj['Failue Message'] = (((((testCases[i])['failure'])[0])['_attr'])['message'])['_value'];
			}
		}
	});
	
	
}]);