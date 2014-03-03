/**
 * Created with JetBrains WebStorm.
 * User: yunan.zhao
 * Date: 2013-07-09
 * Time: 1:48 AM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module("quizModule", []);

app.factory('QuizFactory', function() {
    var allQuestions = [
        {id:1, title:"1", question:"Your friend wants to hang out on Thursday:",
            choices:[
                {id:0, text:"I barely have time to brush my teeth.",
                    cert:0, cources:2, dd:0, lead:3, handbook:0,
                    grumpy:3, science:2, business:0, bossy:0, olympic:0, hipster:0
                },
                {id:1, text:"There’s a one-hour gap in my schedule at 11:00PM. (Barely.)",
                    cert:0, cources:3, dd:0, lead:0, handbook:0,
                    grumpy:0, science:2, business:3, bossy:2, olympic:1, hipster:0
                },
                {id:2, text:"Broken Social Scene’s playing Lee’s Palace. Wanna tag along?",
                    cert:3, cources:0, dd:0, lead:0, handbook:0,
                    grumpy:0, science:0, business:1, bossy:1, olympic:2, hipster:3
                },
                {id:3, text:"Y.O.L.O. Bring it on!",
                    cert:2, cources:2, dd:3, lead:2, handbook:0,
                    grumpy:0, science:0, business:0, bossy:0, olympic:3, hipster:3
                }]},
        {id:2, title:"2", question:"What’s your top survival tip for First Year Calculus?",
            choices:[
                {id:0, text:"Read the textbook like a champ!",
                    cert:2, cources:1, dd:3, lead:1, handbook:0,
                    grumpy:0, science:3, business:3, bossy:2, olympic:0, hipster:0
                },
                {id:1, text:"Grab your friends to form a study group.",
                    cert:2, cources:2, dd:3, lead:1, handbook:0,
                    grumpy:1, science:1, business:2, bossy:2, olympic:3, hipster:3
                },
                {id:2, text:"Everything you ever need is on Wikipedia and YouTube.",
                    cert:1, cources:1, dd:0, lead:3, handbook:0,
                    grumpy:3, science:1, business:1, bossy:1, olympic:0, hipster:2
                }]},
        {id:3, title:"3", question:"What’s your Skule motto?",
            choices:[
                {id:0, text:"Make new friends!",
                    cert:2, cources:1, dd:3, lead:1, handbook:0,
                    grumpy:0, science:0, business:2, bossy:2, olympic:3, hipster:3
                },
                {id:1, text:"Build my credentials and resume.",
                    cert:3, cources:2, dd:1, lead:1, handbook:0,
                    grumpy:1, science:2, business:3, bossy:1, olympic:0, hipster:0
                },
                {id:2, text:"Make the world a better place.",
                    cert:1, cources:1, dd:3, lead:0, handbook:0,
                    grumpy:0, science:1, business:3, bossy:3, olympic:0, hipster:0
                },
                {id:3, text:"Focus on my five-year plan towards launching my Fortune 500 company.",
                    cert:3, cources:2, dd:1, lead:3, handbook:0,
                    grumpy:0, science:1, business:3, bossy:3, olympic:0, hipster:0
                }]},
        {id:4, title:"4", question:"By day you’re an engineering student. By night you’re:",
            choices:[
                {id:0, text:"A toga-wearing philosopher",
                    cert:0, cources:3, dd:0, lead:0, handbook:0,
                    grumpy:2, science:0, business:0, bossy:1, olympic:0, hipster:3
                },
                {id:1, text:"An eccentric camp counselor",
                    cert:0, cources:0, dd:3, lead:0, handbook:0,
                    grumpy:0, science:3, business:0, bossy:0, olympic:1, hipster:2
                },
                {id:2, text:"A crossfit fanatic",
                    cert:3, cources:0, dd:0, lead:0, handbook:0,
                    grumpy:0, science:0, business:2, bossy:0, olympic:3, hipster:0
                },
                {id:3, text:"A part-time interesting person",
                    cert:0, cources:0, dd:0, lead:3, handbook:0,
                    grumpy:0, science:0, business:2, bossy:2, olympic:1, hipster:0
                },
                {id:4, text:"A DJ spinning the night away!",
                    cert:0, cources:0, dd:2, lead:2, handbook:0,
                    grumpy:0, science:1, business:0, bossy:0, olympic:0, hipster:3
                }]},
        {id:5, title:"5", question:"How do you recharge your batteries at the end of the week?",
            choices:[
                {id:0, text:"Return to my fortress of solitude. #brampton",
                    cert:2, cources:3, dd:0, lead:2, handbook:0,
                    grumpy:3, science:3, business:0, bossy:2, olympic:0, hipster:0
                },
                {id:1, text:"Lose my self-respect at SUDS.",
                    cert:2, cources:1, dd:3, lead:1, handbook:0,
                    grumpy:3, science:3, business:2, bossy:2, olympic:3, hipster:3
                }]}];

    var cert, cources, dd, lead, handbook, grumpy=0, science=0, business=0, bossy=0, olympic=0, hipster=0;
    var theta = 0;
    var choices = [{id:-1},{id:-1},{id:-1},{id:-1},{id:-1}];
    var ilead =
        [
            {title:"cert", score:0, link:"http://ilead.engineering.utoronto.ca/courses-certificates/certificate-programs/", content:"Certificate programs. Get recognized."},
            {title:"cources", score:0, link:"http://ilead.engineering.utoronto.ca/courses-certificates/undergraduate-courses/", content:"Academic courses. Get credit."},
            {title:"dd", score:0, link:"http://ilead.engineering.utoronto.ca/events-activities/department-division-groups/", content:"ILead Department&Division groups. Make magic happen."},
            {title:"lead", score:0, link:"http://ilead.engineering.utoronto.ca/events/", content:"Special events. Get inspired."},
            {title:"handbook", score:0, link:"http://ilead.engineering.utoronto.ca/resources/handbook-for-student-leaders/", content:"Handbook for student leaders. Use it when you need it."}
        ];
    var factory = {};

    factory.allQuestions = allQuestions;

    factory.choices = choices;
    factory.theta = theta;
//    factory.cert = cert;
//    factory.cources = cources;
//    factory.dd = dd;
//    factory.lead = lead;
//    factory.handbook = handbook;

    factory.grumpy = grumpy;
    factory.science = science;
    factory.business = business;
    factory.bossy = bossy;
    factory.olympic = olympic;
    factory.hipster = hipster;

    factory.ilead = ilead;
    return factory;
});

app.controller('QuizController', function($scope, QuizFactory){
    QuizFactory.score = 0;
    QuizFactory.cat = 0;
    $scope.pick = -1;
    $scope.id = 1;
    $scope.questions = QuizFactory.allQuestions;

    $scope.loadNew = function(){
        if($scope.id != 1){
            QuizFactory.choices[$scope.id-2].id = $scope.pick;
        }

        $scope.pick = -1;
        $scope.id = $scope.id+1;

        var size = QuizFactory.allQuestions.length;
        if($scope.id== size+2){
            for(var i=0; i<size; i++){
                QuizFactory.ilead[0].score += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].cert;
                QuizFactory.ilead[1].score += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].cources;
                QuizFactory.ilead[2].score += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].dd;
                QuizFactory.ilead[3].score += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].lead;
                QuizFactory.ilead[4].score += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].handbook;

                QuizFactory.grumpy += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].grumpy;
                QuizFactory.science += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].science;
                QuizFactory.business += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].business;
                QuizFactory.bossy += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].bossy;
                QuizFactory.olympic += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].olympic;
                QuizFactory.hipster += QuizFactory.allQuestions[i].choices[QuizFactory.choices[i].id].hipster;
            }
            $scope.sort = "score";
            $scope.finalOptions = QuizFactory.ilead;
            var max = Math.max(QuizFactory.grumpy, QuizFactory.science, QuizFactory.business, QuizFactory.bossy, QuizFactory.olympic, QuizFactory.hipster);
            if(QuizFactory.grumpy == max){
                $scope.catmeme = {title:"Grumpy Cat", picture:"img/MemeGrumpy.jpg", text:"You take a completely hands-off approach. It’s not because you’re lazy or that you’re incompetent, you just don’t care."};
            } else if(QuizFactory.bossy == max){
                $scope.catmeme = {title:"Bossy Cat", picture:"img/MemeBossy.jpg", text:"You lead in a task-oriented manner with command, ambition, and a hint of arrogance. Controlling and protective, you rule the roost. You’re comfortable being in the driver’s seat and feel generous with your criticism of everyone else’s work."};
            } else if(QuizFactory.science == max){
                $scope.catmeme = {title:"Science Cat", picture:"img/MemeScience.jpg", text:"You lead with your mind pondering about ideas and theories that will either save or destroy the world. You see a good design and still have to change it to make improvements."};
            } else if(QuizFactory.business == max){
                $scope.catmeme = {title:"Business Cat", picture:"img/MemeBusiness.jpg", text:"You lead by tapping into ideas, experiences, skills, and opinions of others, but you are the one making the final call. You are organized and tend to have a colourcoded calendar scheduling your days to the hour."};
            } else if(QuizFactory.olympic == max){
                $scope.catmeme = {title:"Olympic Cat", picture:"img/MemeOlympic.jpg", text:"You lead enthusiastically in process-oriented work that requires innovation and cooperation. You facilitate creative decision making by encouraging participation and rewarding creativity."};
            } else if(QuizFactory.hipster == max){
                $scope.catmeme = {title:"Hipster Cat", picture:"img/MemeHipster.jpg", text:"You lead in your own creative leadership style. You strive in people-oriented projects by maintaining a calm, cool and comfortable environment for your team."};
            }

            $scope.$apply();
            var frontimg = document.getElementById("front-img");
            var startbutton = document.getElementById("start-button");
            startbutton.outerHTML="";
            frontimg.outerHTML="";
        }
    };
    $scope.singlechoice = function(id){
        $scope.pick = parseInt(id);
    };
});

app.directive('moveNext', function (QuizFactory){
    return {
        restrict: "A",
        link: function(scope,element){
            var carousel = document.getElementById('carousel'),
                navButtons = document.querySelectorAll('#navigation button'),
                panelCount = carousel.children.length,
                transformProp = Modernizr.prefixed('transform'),

                rotateCarousel = function( angle ) {
                    carousel.style[ transformProp ] = 'translateZ( -520px ) rotateY(' + QuizFactory.theta + 'deg)';

//                    carousel.style.webkitTransform = 'translateZ( -350px ) rotateY(' + QuizFactory.theta + 'deg)';
                },

                showSlide = function(){
                    if(scope.id < 6){
                        var cur_slide = document.getElementById(scope.id);
                        cur_slide.children[1].children[0].style.visibility = 'visible';
                    }
                },

                clearSlide = function(){
                    if(scope.id > 2){
                        var pre_slide = document.getElementById(scope.id-2);
                        pre_slide.children[1].children[0].style.visibility = 'hidden';
                    }
                },

                loadChoices = function(){
                    if(scope.id != 2 && scope.id != 1){
                        element[0].parentElement.parentElement.innerHTML = "";
                    }

                };




            element.bind('click', function(event){
                console.log(element);
                var questionID = element[0].getAttribute('question-id');

                if(scope.id-1 == questionID){
                    scope.singlechoice(element[0].getAttribute('choice-number'));
                }

                if((scope.id-1 == questionID && scope.pick != -1) || scope.id == 1 ){
                    console.log(event.target);
                    var increment = parseInt( event.target.getAttribute('data-increment') );
                    increment = 1;
                    QuizFactory.theta -= 60;
                    rotateCarousel();
                    showSlide();
                    setTimeout(clearSlide, 1000);
                    scope.loadNew();
                }

            });
        }
    }
});

