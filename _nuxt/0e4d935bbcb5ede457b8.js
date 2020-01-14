(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{328:function(e,t){e.exports={attributes:{title:"Computer Vision System for a Chess-Playing Robot",titleShort:"Dissertation",date:"2019-05-01T00:00:00.000Z",image:"dissertation/demonstration.png",description:"A computer vision system for a chess-playing robot. Tracks the state of a chessboard over time, using Python, scikit-learn and OpenCV.",tags:["Python","OpenCV","scikit-learn","Flask","Vue"]},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"markdown"},[_vm._m(0),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/demonstration.png","alt":"Demonstration page of the system"}}),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'p\',[_vm._v("Isn’t it easy to detect moves being played on a chessboard? In general, a move consists one piece moving from one square to another square, the possible destination squares being determined by the type of the chessman being moved. However, pieces can often be very difficult to see from above, even for the human eye.")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/e2e4.png","alt":"Storyboard showing chess move e2e4"}}),_vm._v(" "),_c(\'p\',[_vm._v("The motivation for the project was to create a computer vision system which could successfully detect moves being played regardless of the lighting conditions and environment. The abstract is as follows:")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/canny.png","alt":"Canny edge detection on move e2e4"}}),_vm._v(" "),_c(\'p\',[_vm._v("The result of Canny edge detection alone is not enough to infer the move which has been made, however, it does clearly show which squares have changed the most. I combine this with two other metrics:")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c(\'p\',[_vm._v("I classified the colour of the squares and their pieces using a K-nearest neighbours algorithm. Before each move, the variance and intensity of each square were found in order to produce clusters of points, each cluster representing a colour combination of the square and its piece. There were 6 clusters of points, namely:")]),_vm._v(" "),_vm._m(8),_vm._v(" "),_c(\'p\',[_vm._v("After a move had been played, each square of the chessboard was classified into a cluster using the K-nearest neighbours algorithm. The probability of each move having occurred was found and combined with the result of the Canny edge detection to find the most probable move.")]),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/demonstration.png","alt":"Demonstration page of the system"}}),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/annotation.png","alt":"Annotation page of the system"}}),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"dissertation/testing.png","alt":"Testing page of the system"}}),_vm._v(" "),_vm._m(12),_vm._v(" "),_c(\'p\',[_vm._v("The system was tested with respect to many different factors, including lighting conditions and angle of the webcam. In ‘reasonable’ conditions, the system performed very well. Over the whole suite of test data, the computer vision system was found to have a success rate of 96.3% ± 8.4%. This shows promising performance whilst no constraints are upon the system, however, there is definitely scope to see the project taken further. With a larger set of chess videos to train the system upon, new algorithms and techniques could continue to improve the performance and robustness of the system, with the aim of creating a fully autonomous chess-playing robot.")]),_vm._v(" "),_vm._m(13)],1) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("I completed my dissertation as part of my 3"),_c(\'sup\',[_vm._v("rd")]),_vm._v(" year of university. Entitled “A Computer Vision System for a Chess-Playing Robot”, my dissertation aimed to infer the state of a chessboard from a webcam placed above the board. You can "),_c(\'a\',{attrs:{"href":"/projects/dissertation/dissertation.pdf"}},[_vm._v("download the report here")]),_vm._v(". Here’s what the finished system looks like!")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"impetus"}},[_vm._v("Impetus"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#impetus"}},[_vm._v("#")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Here is a storyboard of a pawn being moved from square "),_c(\'code\',{pre:true},[_vm._v("e2")]),_vm._v(" to square "),_c(\'code\',{pre:true},[_vm._v("e4")]),_vm._v(". The leftmost image is before, the middle image is after and the rightmost image is the difference between the two. As you can see, it is not as simple as finding the square which has changed the most.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'blockquote\',[_c(\'p\',[_vm._v("The aim of this project is to design a computer vision system to be used by a chess-playing robot, capable of detecting opponents’ moves and returning the best move to be played by the robot. The system should be robust to changes in perspective, lighting and other environmental factors so that it can be used in any reasonable setting.")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"how-it-works"}},[_vm._v("How It Works"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#how-it-works"}},[_vm._v("#")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("As seen previously, it is not possible to simply use the difference between keyframes in order to determine which piece has been moved. After some experimentation, the Canny edge detection provided by OpenCV proved to be incredibly valuable, identifying the edges of pieces even when they could barely be seen. Here you can see the effect of Canny edge detection on the previous storyboard of move "),_c(\'code\',{pre:true},[_vm._v("e2e4")]),_vm._v(". The image on the right is taken by the difference of the sums of each square in the board — a higher difference denotes more change in the square.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_vm._v("The possible moves according to the rules of chess")]),_vm._v(" "),_c(\'li\',[_vm._v("A classification of the colour of each square and its piece")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Finding which moves are possible at each point in the game is trivial; the "),_c(\'code\',{pre:true},[_vm._v("python-chess")]),_vm._v(" "),_c(\'a\',{attrs:{"href":"https://github.com/niklasf/python-chess"}},[_vm._v("library by Niklas Fiekas")]),_vm._v(" provides a simple API for move generation and validation, which I used to keep track of the state of the chessboard over time.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_vm._v("Empty black square")]),_vm._v(" "),_c(\'li\',[_vm._v("Empty white square")]),_vm._v(" "),_c(\'li\',[_vm._v("White piece on black square")]),_vm._v(" "),_c(\'li\',[_vm._v("Black piece on black square")]),_vm._v(" "),_c(\'li\',[_vm._v("White piece on white square")]),_vm._v(" "),_c(\'li\',[_vm._v("Black piece on white square")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"designing-the-user-interface"}},[_vm._v("Designing the User Interface"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#designing-the-user-interface"}},[_vm._v("#")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("I envisaged a dashboard-like system which would provide an overview of the current state of the game and  briefly show how the application worked. As the application would be very interactive, for example controlling video playback and annotating moves as the game progressed, I opted to use "),_c(\'a\',{attrs:{"href":"https://vuejs.org"}},[_vm._v("Vue.js")]),_vm._v(" as my front-end framework of choice: Vue would handle the data layer on the front-end without me having to worry about DOM manipulation or state management. The application would connect to the Python server in order to live stream the video playback and recieve information about the game being played.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("For the user interface, "),_c(\'a\',{attrs:{"href":"https://getbootstrap.com"}},[_vm._v("Bootstrap")]),_vm._v(" seemed the most obvious choice for a framework as it would allow me to rapidly prototype ideas without worrying about the maintenance of the CSS for the components. "),_c(\'a\',{attrs:{"href":"https://bootstrap-vue.js.org"}},[_vm._v("BootstrapVue")]),_vm._v(" allowed plug-and-play components within the application.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"conclusion-of-the-report"}},[_vm._v("Conclusion of the Report"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#conclusion-of-the-report"}},[_vm._v("#")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("To find out more, please "),_c(\'a\',{attrs:{"href":"/projects/dissertation/dissertation.pdf"}},[_vm._v("download the report here")]),_vm._v(" or take a look at the repository.")]) }]'}}}}]);