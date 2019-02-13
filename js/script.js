var currSlide = 0;
var waiting = true;
var showDemo = false;

slides = [
    {
        "note": "There's not even two minutes left, and it looks like the Tigers are sure to win.",
        "action": "Write copy based on a projected Tiger win.",
        "vidSeq":[
            '0.mp4', '1.mp4', '2.mp4' 
        ],
        "backSeq": ['0.png', '1.png'],
        "delay": 5000,
    },
    {
        "note": "Then Mississippi State comes back from behind. Now you've got edit your copy.",
        "action": "Rewrite some parts of your copy.",
        "vidSeq":[
            '2.mp4', '3.mp4', '4.mp4' 
        ],
        "backSeq": ['1.png', '2.png'],
        "delay": 3800,
    },
    {
        "note": "But maybe you want to stash some parts of your copy for later, in the event that the Tigers recover.",
        "action": "Keep some copy just in case.",
        "vidSeq":[
            '4.mp4', '5.mp4', '6.mp4' 
        ],
        "backSeq": ['2.png', '3.png'],
        "delay": 5500,
    },
    {
        "note": "You can write copy for a Tigers win, a Bulldogs win, or for either outcome.",
        "action": "Write more copy, then switch the outcome.",
        "vidSeq":[
            '6.mp4', '7.mp4', '8.mp4' 
        ],
        "backSeq": ['3.png', '4.png'],
        "delay": 9800,
    },
    {
        "note": "Now it looks like the Bulldogs are sure to win.",
        "action": "Write copy based on a projected Bulldogs win.",
        "vidSeq":[
            '8.mp4', '9.mp4', '10.mp4' 
        ],
        "backSeq": ['4.png', '5.png'],
        "delay": 6000,
    },
    {
        "note": "But, then the Tigers come back.",
        "action": "Finalize your copy.",
        "vidSeq":[
            '10.mp4', '11.mp4', '12.mp4' 
        ],
        "backSeq": ['5.png', '6.png'],
        "delay": 8000,
    },
];

$( document ).ready( function() {
  $("#note").text(slides[0]["note"]);
  $("#action").text(slides[0]["action"]);
});


$("#demo").on({
    'click': function() {
        waiting = false;

        var transImg = slides[currSlide]["vidSeq"][1];
        var restImg = slides[currSlide]["vidSeq"][2];
        var backImg = slides[currSlide]["backSeq"][1];
        var delay = slides[currSlide]["delay"];

        $("#demo").attr('src', '/img/' + transImg);
        $("#demo").removeAttr("loop")

        setTimeout(function() {
            $(".wayback img").attr('src', '/img/' + backImg);
        }, (delay / 2));
        
        setTimeout(function() {
            $("#demo").attr('src', '/img/' + restImg);
            $("#demo").attr('loop', 'loop');
            $('.nav-fill').toggleClass('footer-hide');

        }, delay);
    }
});

$('#demo-btn').click(function(){
    var showDemo = true;
    var startImg = slides[currSlide]["vidSeq"][0];
    var backImg = slides[currSlide]["backSeq"][0];
    $("#demo").attr('src', '/img/' + startImg);
    $(".wayback img").attr('src', '/img/' + backImg);
    $('.flip').find('#display').toggleClass('flipped');
});

$('#next').click(function(){
    currSlide += 1;
    $("#note").text(slides[currSlide]["note"]);
    $("#action").text(slides[currSlide]["action"]);
    $("#demo").attr("src", "img/" + currSlide + ".mp4");

    if ( $("#display").hasClass("flipped") ) {
        $('.flip').find('#display').toggleClass('flipped');
    };

    $('.nav-fill').toggleClass('footer-hide');
    var showDemo = false;
});

$('#prev').click(function(){
    if ( currSlide != 0 ) {
        currSlide -= 1;
    };
    $("#note").text(slides[currSlide]["note"]);
    $("#action").text(slides[currSlide]["action"]);
    $("#demo").attr("src", "img/" + currSlide + ".mp4");    
    
    if ( $("#display").hasClass("flipped") ) {
        $('.flip').find('#display').toggleClass('flipped');
    };

    $('.nav-fill').toggleClass('footer-hide');

    var showDemo = false;
});
