var blocks = document.querySelectorAll(".block")
function checkUnderline() {
  //console.log(blocks)
  for (var i = 0; i < blocks.length; i++) {
    // if(document.scrollTop > blocks[i])
    //console.log(blocks[i].id + " : " + blocks[i].getBoundingClientRect().top)
    if (-blocks[i].getBoundingClientRect().top < blocks[i].getBoundingClientRect().height - 2*scrollOffset) {
      break;
    }
  }
  var realLink = document.getElementById("link" + blocks[i].id);
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("underline");
  }
  realLink.classList.add("underline");
}
var parallaxContainers = document.querySelectorAll(".parallaxContainer");
function checkParallax() {
  for(var i = 0; i < parallaxContainers.length; i++) {
    var pCont = parallaxContainers[i];
    var pImages = pCont.querySelectorAll("img");
    if(pCont.getBoundingClientRect().top < window.innerHeight && pCont.getBoundingClientRect().top + pCont.offsetHeight > 0) {
      for(var j = 0; j < pImages.length; j++) {
        var percent = -((pCont.getBoundingClientRect().top)-pCont.offsetHeight/2)/(window.innerHeight);
        //console.log(percent)
        pImages[j].style.transform = "translateY("+(-50*percent*pImages[j].dataset.speed)+"%)";
      }
    }
    else {
      for(var j = 0; j < pImages.length; j++) {
        pImages[j].style.transform = "none"
      }
    }
  }
}

var classChangerDivs = document.querySelectorAll(".classChanger");
function changeClass() {
  for(var i = 0; i < classChangerDivs.length; i++) {
    var classChangerDiv = classChangerDivs[i];
    // console.log(classChangerDiv.getBoundingClientRect().top-classChangerDiv.offsetHeight/2)
    //console.log(window.innerHeight)
    if(classChangerDiv.getBoundingClientRect().top < window.innerHeight/2) {
      document.body.classList.add(classChangerDiv.dataset.classname)
    }
    else {
      document.body.classList.remove(classChangerDiv.dataset.classname)
    }
  }
}


var lastScroll = 0;
var launchedScroll = true;
var launchedScrollTime = 0;
var currScroll = 0;
var scrollDest = 0;
var ellmmtt = document.getElementById("header");
var headerHeight = ellmmtt.offsetHeight ;
var scrollOffset = headerHeight ;

//document.write(headerHeight);

var scrollDuration = 1000;
function scrollHandler() {
  lastScroll = new Date().getTime();
  launchedScroll = false;
}
window.addEventListener("wheel", scrollHandler, false);


function startScroll(block) {
  //console.log(block.offsetTop)
  //removeScrollE();
  launchedScroll = true;
  launchedScrollTime = new Date().getTime();

  currScroll = document.documentElement.scrollTop || document.body.scrollTop
  scrollDest = block.offsetTop - scrollOffset;
}

function checkMagScroll(lastS) {
  if(!launchedScroll && new Date().getTime() - lastS > 200) {
    var closest = -1;
    var smallestDist = 100000000;
    for(var i = 0; i < blocks.length; i++) {
      if(Math.abs(blocks[i].getBoundingClientRect().top) < smallestDist) {
        closest = i;
        smallestDist = Math.abs(blocks[i].getBoundingClientRect().top);
      }
    }
    startScroll(blocks[closest])
  }


  if(launchedScroll && new Date().getTime() - launchedScrollTime < scrollDuration) {
    var lerpScroll = Math.easeInOutSine(
      new Date().getTime() - launchedScrollTime,
      currScroll,
      scrollDest,
      scrollDuration
    )
    document.documentElement.scrollTop = document.body.scrollTop  = lerpScroll;
  }
  else if(new Date().getTime() - launchedScrollTime > scrollDuration) {
    //addScrollE()
  }



}

Math.easeInOutSine = function (t, b, e, d) {
	return -(e-b)/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};



$(function() {
  /**
   * Smooth scrolling to page anchor on click
   **/
  $("a[href*='#']:not([href='#'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        startScroll(anchor[0])
      }
    }
  });
});
