// 1a. display lower case keyboard only when page loads
$(document).ready(function () {



    // 1b. hide uppercase keyboard when page loads
    $('#keyboard-upper-container').hide();


    // 2a. jQuery-toggle  when press/release "shift" toggle keyboard key code 16
    // when 16 pressed toggle upper keyboard

    $(document).keydown(function (event) {
        if (event.which == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
    })


    //3a. on key press, highlight key in browser
    //When keys are pressed, they should be highlighted in the browser.
    /* Hint: the letters should be matched with the corresponding ascii code. The id value of the key in the html corresponds to the ASCII character code that you can access in the keyboard listener. For example, ascii value 65 is A, and 97 is a. Search for ASCII character chart to see a complete list of codes. Ask yourself: How do I determine which key was pressed on the keyboard when using a jQuery event listener?*/

    //4a. Display sentence one at a time at top of page
    //4b. Next sentence appear when one complete (check for end of sentence)
    let sentences = ['ten', 'Torfvgo', 'osat', 'iwqta', 'neetbtrbtb'];
    let sentenceIndex = 0;
    let charIndex = 0;
    let move = 15

    $('#sentence').html(sentences[sentenceIndex]);

    if (charIndex == 0){
        $('#target-letter').html(sentences[sentenceIndex].charAt(charIndex[0]))
    }

    $(document).keypress(function (event) {
        if (event.which === event.keyCode) {
            $('#' + event.keyCode).toggleClass('highlight-key')
        }
        if (sentenceIndex === 5) {
            return;
        }
        $('#target-letter').html(sentences[sentenceIndex].charAt(charIndex+1))
        console.log(sentences[sentenceIndex].charAt(charIndex))
        charIndex++;
        console.log(charIndex);
        console.log(sentences[sentenceIndex].length)
        // Check for end of sentence
        if (charIndex === sentences[sentenceIndex].length) {
            sentenceIndex++;
            move = 15;
            charIndex = 0;
            $('#sentence').html(sentences[sentenceIndex]);
        }
        $('#yellow-block').css({ left: move })
        move += 17;

        
    })



    $(document).keyup(function (event) {
        if (event.which == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
        if (event.which === event.keyCode) {
            $('.key').removeClass('highlight-key')
        }
    })







    //5a. highlight the currently expected letter in the on-screen sentence that should be typed next
    //5b. move yellow block along page
    //5c. reset yellow block to beginning of sentence, once at end of sentence




    //6 Also display the currently expected letter in the center (div id="target-letter" provided for you)


    //7a. in div id=feedback, display green check or red x
    //7b. clear out at beginning of next sentence


    //8a. calculate wpm at end of last sentence using numberOfWords / minutes - 2 * numberOfMistakes (note: you can hard code the number of words)


    //9a. delay when display score
    //9b. ask user to reset yes- reset; no- leave alone

    //10 you should not use a loop at all.
})
