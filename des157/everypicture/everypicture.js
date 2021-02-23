(function () {
    'use strict';

     /* Icon 1 */
    document.getElementById('icon1').addEventListener('mouseover', function(){
        document.getElementById('icon1').src = "images/icon-carrot.svg";
        document.getElementById('image1').id = 'hover1';
    });

    document.getElementById('icon1').addEventListener('mouseout', function(){
        document.getElementById('icon1').src = "images/icon-1.svg";
        document.getElementById('hover1').id = 'image1';
    });

     /* Icon 2 */
     document.getElementById('icon2').addEventListener('mouseover', function(){
        document.getElementById('icon2').src = "images/icon-carrot.svg";
        document.getElementById('image2').id = 'hover2';
    });

    document.getElementById('icon2').addEventListener('mouseout', function(){
        document.getElementById('icon2').src = "images/icon-2.svg";
        document.getElementById('hover2').id = 'image2';
    });

     /* Icon 3 */
    document.getElementById('icon3').addEventListener('mouseover', function(){
        document.getElementById('icon3').src = "images/icon-carrot.svg";
        document.getElementById('image3').id = 'hover3';
    });

    document.getElementById('icon3').addEventListener('mouseout', function(){
        document.getElementById('icon3').src = "images/icon-3.svg";
        document.getElementById('hover3').id = 'image3';
    });

     /* Icon 4 */
    document.getElementById('icon4').addEventListener('mouseover', function(){
        document.getElementById('icon4').src = "images/icon-carrot.svg";
        document.getElementById('image4').id = 'hover4';
    });

    document.getElementById('icon4').addEventListener('mouseout', function(){
        document.getElementById('icon4').src = "images/icon-4.svg";
        document.getElementById('hover4').id = 'image4';
    });

     /* Icon 5 */
    document.getElementById('icon5').addEventListener('mouseover', function(){
        document.getElementById('icon5').src = "images/icon-carrot.svg";
        document.getElementById('image5').id = 'hover5';
    });

    document.getElementById('icon5').addEventListener('mouseout', function(){
        document.getElementById('icon5').src = "images/icon-5.svg";
        document.getElementById('hover5').id = 'image5';
    });

})();