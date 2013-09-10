'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.service('Projects', function($rootScope, $http) {
		
		//projects
		$rootScope.projects = [
			{ 
				title: 	'Brothers Tale', 
				at: 		'VFS',
				what:		['Idea', 'UX/UI', 'Art', 'GameDesign', 'LevelDesign', 'Modelling', 'Texturing', 'WeightPainting', 'Animating', 'C#'],
				info: 	"Ages ago, Death wanted to retire. However, in order to do that, he had to kill every living creature. In an ancient race of people, four brothers became heroes who fought Death. They harnessed the power of the elements — earth, air, fire and water — by each wearing a magical mask imbued with these powers. They fought valiantly and, ultimately, denied Death in his bid to destroy mankind. Yet they sacrificed their lives in the process to save the people they loved. And they left behind a fifth brother — a little boy — who had been too young to fight. Now, he is a man embarking on a quest to kill Death and avenge the demise of his brothers.",
				imgdir:	'brothers-tale',
				dropdowns: [
					{
						title: 'case studies',
						links: [
							{
								title: 'read the blog',
								url: 'http://community.vfs.com/oomph/2011/10/game-design-yeah-digital-design-students-can-do-that/',
								target: '_blank'
							},
							{
								title: 'watch the video',
								url: 'http://vimeo.com/32888874',
								target: '_blank'
							}
						]
					},
					{
						title: 'dowload the game',
						links: [
							{
								title: 'for Windows',
								url: '#'
							},
							{
								title: 'for Mac',
								url: '#'
							}
						]
					}
				]
			},
			{
				title: 	'Shogunee', 
				at: 		'Just for fun',
				what:		['Idea', 'UX/UI', 'Art', 'GameDesign', 'AS3'],
				info: 	"I have a certain affinity for the games I played growing up. I loved Tower Defense games, so when my abilities in Flash developed, I was able to create my own using AS3. The point of the game is to protect your castle from ninjas and samurais hordes by placing different towers in the best possible spot. Players need to be careful, because there are invisible ninjas and other enemies who can attack and take out the towers. Players can sell, repair and upgrade their towers for better protection. Shogunee was an experiment in Flash development. My goal was to take on the challenge of creating a fully functional Flash game from scratch. The project was successful and was instrumental in developing my abilities with Action Script, Flash and Adobe Illustrator.",
				imgdir:	'shogunee',
				links: [
					{
						title: 'play Shogunee',
						url: '#'
					}
				]
			},
			{
				title: 	'Zootaire', 
				at: 		'Just for fun',
				what:		['Idea', 'UX/UI', 'AS3'],
				info: 	"I got an assignment in University to create a soliter table game —not solitaire, the card game!— using Visual Studio. I loved the project so much that I decided to turn it into a Flash game. I turned my C# code into AS3 and created a cool, childish design for it. I wanted to make the game for kids to enhance their logic capacities. The goal of Zootaire is to reduce the number of stones —or in this case sheeps— all the way down to one by moving stones to the side of a neighboring stone, but only if there is an empty space. Movements can be made vertically or horizontally, not diagonally.",
				imgdir:	'zootaire',
				links: [
					{
						title: 'play Zootaire',
						url: '#'
					}
				]
			},
			{
				title: 	'CBC - Sodium Calculator', 
				at: 		'Ayogo Inc.',
				what:		['UX/UI', 'Time/Team/Client Management', 'Supervised Coding', 'HTML5 & CSS3', 'jQuery'],
				client:	'CBC - Marketplace',
				info: 	"Suddenly we got an opportunity to work for CBC Marketplace on an online, interactive html5 and css3 based (so no flash) sodium calculator for their upcoming show. The deadline was super close, we only got two weeks before the show started. Becuse of budget and timing, Ayogo assigned this project to me as a one man army, though I got a programmer intern to help me out and start programming the logic parallel while I was designing the UI and UX. In this two week, my responsibilities spanned from talking to the client, keeping my boss in the loop, building a fast and non-redundant work process between me and Allen (my little helper, who helped a LOT), Designing UX/UI from scratch, using stock icons where possible for foods and at the end, ironing out bugs in the code. Oh, almost forgot to mention, that this 2 week was shortened by 2 days also because I requested some vacation time off before we even knew about this project, and that vacation time was really precious to me, because my girlfriend left the country, so wanted to spend my last days with her only. So even with -2 days, we delivered before time, way under budget and the client was super happy and impressed with the quality of work in this short time we had to deliver.",
				imgdir:	'cbc-sodium',
				links: [
					{
						title: 'check it out',
						url: 'http://www.cbc.ca/news/interactives/sodium-calculator/index.html',
						target: '_blank'
					}
				]
			},
			{
				title: 	'I<3J', 
				at: 		'Ayogo Inc.',
				what:		['UX', 'C#', 'Java'],
				client: 'Avery Dennison - Vancive',
				info:		"A project that I feel... failed. So why am I showing this? I think we can learn just as much from failures (if not more) than successes. Also this project involved a lot of heat, pressure, frustration and cutting edge technology and was overall fun and really interesting. Also was my first mobile unity project. And if that's not enough, throw in a cutting edge hardware and software (it came in parts so we had to assemble it ourselves), a non-exsiting API and Bluetooth. All served cold. :D hahaha. So Avery Dennison hired Ayogo to create an Android mobile game that uses their prototype patch to measure all kinds of activity data like heart rate, respiration rate, body temperature, sweat level, movement (gyro, or steps) and so on. This little patch saves data internally. In certain periods it tryes to connect to a mobile device and sends it's saved data throught Bluetooth for further processing. The client wanted a game that reacts to this 'real time' data feed in real time and you know, just be fun, casual and make kids (oh right, we targeted kids) get up and do a little exercise now and then. The game is meant to be showcased with the patch, and to see what and how the patch can be used and integrated. We did real life tests of just sitting and being calm, walking, running, doing jumpingjacks, doing a full workout and such to realise that the patch was unreliable in measuring bio data and in connectivity. The showcases still wen't smoothly though, but just wasn't using live data from the patches. Also we wen't way over budget (around 300%) and time too.",
				imgdir:	'zootaire'
			},
			{
				title:	'Ayogo Website Update', 
				at:			'Ayogo Inc.',
				what:		['UI', 'Supervised Coding', 'HTML5 & CSS3', 'jQuery', 'AngularJS'],
				info:		'Something here...',
				imgdir:	'ayogo-website-update',
				links: [
					{
						title: 'check it out',
						url: 'http://ayogo.com/',
						target: '_blank'
					}
				]
			}
		];
		
		//return projects only after we got the images
		var run = false;
		return {
			
			getProjects : function(callback) {
				
				console.log("-----call start: " + new Date().getTime() / 1000);
				
				if(run && !!callback) {
					console.log("-----call end: " + new Date().getTime() / 1000);
					console.log('scrollr callback');
					callback($rootScope.projects);
					callback($rootScope.scrollr);
					return;
				}
				
				var counter = 0;
				var num_projects = $rootScope.projects.length;
				
				// count how many projects we have received
				var cb = function() {
					if (++counter == num_projects) {
						run = true;
						if (!!callback) {
							console.log("-----call end: " + new Date().getTime() / 1000);
							console.log('scrollr init');
							$rootScope.scrollr = skrollr.init({
								forceHeight: false
							});
							console.log('scrollr init callback');
							callback($rootScope.scrollr);
							callback($rootScope.projects);
						}
					}
				}
				
				// get project images
				for (var i = 0; i < num_projects; i++) {
					(function(proj_idx) {
						if (typeof($rootScope.projects[proj_idx].imgdir) != 'undefined') {
							$http.get('php/getProjectImages.php?imgdir=' + $rootScope.projects[proj_idx].imgdir)
							.success(function(data) {
								$rootScope.projects[proj_idx].imgs = data;
								cb();
							})
							.error(function(data, status, header, config) {
								//console.error(data);
							});
						}
					})(i);
				}
					
			}
		};
		
	});
