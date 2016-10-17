var app = angular.module('redditClone', ['angularMoment', 'ngAnimate']);

app.controller("PostController", function($scope) {

	$scope.view = {};
	$scope.view.sortNames = {
		author: 'Author',
		createdOn: 'Date',
		upVotes: 'Up Votes',
		title: 'Title'
	};
	$scope.view.sortBy  = 'upVotes'
	$scope.view.posts = [
		{
			title: 'Outside Aspen, CO',
			author: 'Ian McGonigle',
			description: 'Ut sit amet sodales elit. Sed imperdiet dignissim lorem, ut eleifend arcu porta quis. Sed laoreet lorem nec semper dictum. Mauris iaculis consectetur euismod. Aenean ut convallis ligula. Pellentesque tristique molestie augue, id imperdiet sem laoreet vel. Etiam nulla lectus, faucibus tincidunt lectus eu, ullamcorper consectetur urna. Curabitur blandit nulla a massa imperdiet consequat vitae quis mauris. Ut sed auctor nunc.  Mauris iaculis laoreet turpis fermentum elementum. Fusce bibendum malesuada velit.',
			imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzBNGy30ERDkb1dua5Hguc0xfrVwcRqBEVmKRiQZPfdfpfhoj9Ng',
			upVotes: -1,
			comments:[],
			commentsOnOff: false,
			createdOn: new Date(),
			addCommentsOnOff: false
		},
		{
			title: 'Cliffs of Moher',
			author: 'Bear Grylls',
			description: 'Ut sit amet sodales elit. Sed imperdiet dignissim lorem, ut eleifend arcu porta quis. Sed laoreet lorem nec semper dictum. Mauris iaculis consectetur euismod. Aenean ut convallis ligula. Pellentesque tristique molestie augue, id imperdiet sem laoreet vel. Etiam nulla lectus, faucibus tincidunt lectus eu, ullamcorper consectetur urna. Curabitur blandit nulla a massa imperdiet consequat vitae quis mauris. Ut sed auctor nunc.  Mauris iaculis laoreet turpis fermentum elementum. Fusce bibendum malesuada velit.',
			imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzBNGy30ERDkb1dua5Hguc0xfrVwcRqBEVmKRiQZPfdfpfhoj9Ng',
			upVotes: 9,
			comments:[
				{
					author: 'Bob Ross',
					body: 'Thats pretty cool yo..'
				},
				{
					author: 'Ian McGonigle',
					body: 'I like that?'
				}
			],
			commentsOnOff: false,
			createdOn: new Date(),
			addCommentsOnOff: false
		},
		{
			title: 'Olympic National Park',
			author: 'Ned Stark',
			description: 'Ut sit amet sodales elit. Sed imperdiet dignissim lorem, ut eleifend arcu porta quis. Sed laoreet lorem nec semper dictum. Mauris iaculis consectetur euismod. Aenean ut convallis ligula. Pellentesque tristique molestie augue, id imperdiet sem laoreet vel. Etiam nulla lectus, faucibus tincidunt lectus eu, ullamcorper consectetur urna. Curabitur blandit nulla a massa imperdiet consequat vitae quis mauris. Ut sed auctor nunc.  Mauris iaculis laoreet turpis fermentum elementum. Fusce bibendum malesuada velit.',
			imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBQ3Aj8lVFCrNGlGDL149HsGL52wVx7aFVtCQ5cI2SKfEJuGwy',
			upVotes: 3,
			comments:[
				{
					author: 'Chicken Little',
					body: 'The sky is falling'
				},
				{
					author: 'Obama Care',
					body: 'ummmmm okay'
				}
			],
			commentsOnOff: false,
			createdOn: new Date(),
			addCommentsOnOff: false
		}
	];

	$scope.view.showAddPost = false;

	$scope.postForm = {};

	$scope.addPost = function(form) {
		if(form.$valid){

			var post = {
				title: $scope.postForm.title,
				author: $scope.postForm.author,
				imageURL: $scope.postForm.imageURL,
				description: $scope.postForm.description,
				comments: [],
				upVotes: 0,
				commentsOnOff:false,
				addCommentsOnOff: false,
				createdOn: new Date()
			};

			$scope.view.posts.push(post);

			form.$setPristine();

			$scope.postForm.title = '';
			$scope.postForm.author = '';
			$scope.postForm.imageURL = '';
			$scope.postForm.description = '';

			$scope.view.showAddPost = false;

		}

	}

	$scope.addComment = function(form, post) {

		if(form.$valid) {

			var comment = {
				author: form.author.$modelValue,
				body: form.body.$modelValue
			};

			post.comments.push(comment);

			form.$setPristine();

			form.author = '';
			form.body = '';


			post.addCommentsOnOff = false;
			post.commentsOnOff = true
		}
	}

})
