'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('home_ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {
		
		//projects
		$rootScope.projects = [
			{ title: 	'Brothers Tale', 
				at: 		'VFS',
				info: 	"Ages ago, Death wanted to retire. However, in order to do that, he had to kill every living creature. In an ancient race of people, four brothers became heroes who fought Death. They harnessed the power of the elements — earth, air, fire and water — by each wearing a magical mask imbued with these powers. They fought valiantly and, ultimately, denied Death in his bid to destroy mankind. Yet they sacrificed their lives in the process to save the people they loved. And they left behind a fifth brother — a little boy — who had been too young to fight. Now, he is a man embarking on a quest to kill Death and avenge the demise of his brothers."},	
			{ title: 	'Shogunee', 
				at: 		'Just for fun',
				info: 	"I have a certain affinity for the games I played growing up. I loved Tower Defense games, so when my abilities in Flash developed, I was able to create my own using AS3. The point of the game is to protect your castle from ninjas and samurais hordes by placing different towers in the best possible spot. Players need to be careful, because there are invisible ninjas and other enemies who can attack and take out the towers. Players can sell, repair and upgrade their towers for better protection. Shogunee was an experiment in Flash development. My goal was to take on the challenge of creating a fully functional Flash game from scratch. The project was successful and was instrumental in developing my abilities with Action Script, Flash and Adobe Illustrator."},
			{ title: 	'Zootaire', 
				at: 		'Just for fun',
				info: 	"I got an assignment in University to create a soliter table game —not solitaire, the card game!— using Visual Studio. I loved the project so much that I decided to turn it into a Flash game. I turned my C# code into AS3 and created a cool, childish design for it. I wanted to make the game for kids to enhance their logic capacities. The goal of Zootaire is to reduce the number of stones —or in this case sheeps— all the way down to one by moving stones to the side of a neighboring stone, but only if there is an empty space. Movements can be made vertically or horizontally, not diagonally."},
			{ title: 	'CBC - Sodium Calculator', 
				at: 		'Ayogo Inc.',
				client:	'CBC - Marketplace',
				info: 	"Suddenly we got an opportunity to work for CBC Marketplace on an online, interactive html5 and css3 based (so no flash) sodium calculator for their upcoming show. The deadline was super close, we only got two weeks before the show started. Becuse of budget and timing, Ayogo assigned this project to me as a one man army, though I got a programmer intern to help me out and start programming the logic parallel while I was designing the UI and UX. In this two week, my responsibilities spanned from talking to the client, keeping my boss in the loop, building a fast and non-redundant work process between me and Allen (my little helper, who helped a LOT), Designing UX/UI from scratch, using stock icons where possible for foods and at the end, ironing out bugs in the code. Oh, almost forgot to mention, that this 2 week was shortened by 2 days also because I requested some vacation time off before we even knew about this project, and that vacation time was really precious to me, because my girlfriend left the country, so wanted to spend my last days with her only. So even with -2 days, we delivered before time, way under budget and the client was super happy and impressed with the quality of work in this short time we had to deliver."},
			{ title: 	'I<3J', 
				at: 		'Ayogo Inc.',
				client: 'Avery Dennison - Vancive',
				info:		"A project that I feel... failed. So why am I showing this? I think we can learn just as much from failures (if not more) than successes. Also this project involved a lot of heat, pressure, frustration and cutting edge technology and was overall fun and really interesting. Also was my first mobile unity project. And if that's not enough, throw in a cutting edge hardware and software (it came in parts so we had to assemble it ourselves), a non-exsiting API and Bluetooth. All served cold. :D hahaha. So Avery Dennison hired Ayogo to create an Android mobile game that uses their prototype patch to measure all kinds of activity data like heart rate, respiration rate, body temperature, sweat level, movement (gyro, or steps) and so on. This little patch saves data internally. In certain periods it tryes to connect to a mobile device and sends it's saved data throught Bluetooth for further processing. The client wanted a game that reacts to this 'real time' data feed in real time and you know, just be fun, casual and make kids (oh right, we targeted kids) get up and do a little exercise now and then. The game is meant to be showcased with the patch, and to see what and how the patch can be used and integrated. We did real life tests of just sitting and being calm, walking, running, doing jumpingjacks, doing a full workout and such to realise that the patch was unreliable in measuring bio data and in connectivity. The showcases still wen't smoothly though, but just wasn't using live data from the patches. Also we wen't way over budget (around 300%) and time too."},
			{ title: 'Project 6 Title', at: 'Are u kidding me?'}
		]
  
	}])
	
  .controller('project_ctrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
		
		$scope.title 	= $rootScope.projects[$routeParams.projectId - 1].title;
		$scope.at 		= $rootScope.projects[$routeParams.projectId - 1].at;
		$scope.info 	= $rootScope.projects[$routeParams.projectId - 1].info;
		
  }])
	
	.controller('projects_ctrl', ['$scope', function($scope) {
		
		//init scrollr
		if($scope.$last) {
			setTimeout(function() {
				skrollr.init({
					forceHeight: false
				});
			}, 0);
		}
		
  }]);