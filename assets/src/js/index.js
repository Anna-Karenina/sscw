var buttone = $('.form_button');

buttone.bind('click', function() {
  $(this).animate({
    'backgroundColor' : $(this).css('background-color' , '#FD6141')
}, 2000)
});


 var prevblockBtn = document.getElementById('prevblockBtn')
     nextblockBtn = document.getElementById('nextblockBnt')
     block1 = document.getElementById('block1')
     block2 = document.getElementById('block2')
     block3 = document.getElementById('block3')
     block4 = document.getElementById('block4')

  function nextblock(nextblockBtn){
    block1.style.display = 'none'
    block4.style.display = 'inherit'
  }
  function prevblock(prevblockBtn){
      block1.style.display = 'inherit'
  }

  var axisright =document.getElementById('#axisright');
      wrapperMan =  document.getElementById('wrapperMan')

  wrapperMan.onmousemove = function(e) {
      var x = e.offsetX
    if(x>455){
    	wrapperMan.classList.add("axisright");
    	wrapperMan.classList.remove("axisleft");
    } else {
    wrapperMan.classList.add("axisleft");
    wrapperMan.classList.remove("axisright");
    }
  }
