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
  if(realLink) {
    realLink.classList.add("underline");
  }

}
var parallaxContainers = document.querySelectorAll(".parallaxContainer");
function checkParallax() {
  for(var i = 0; i < parallaxContainers.length; i++) {
    var pCont = parallaxContainers[i].parentNode;
    var pImages = pCont.querySelectorAll("img");
    if(pCont.getBoundingClientRect().top < window.innerHeight && pCont.getBoundingClientRect().top + pCont.offsetHeight > 0) {

        for(var j = 0; j < pImages.length; j++) {
          //var percent = -((pCont.getBoundingClientRect().top)-pCont.offsetHeight/2)/(window.innerHeight);
          var percent = -((pCont.getBoundingClientRect().top)-148)/(window.innerHeight);
          if(i == 0) console.log(percent)
          var value = 0;
          if(pImages[j].dataset.speed > 0) {
            value = (-30*Math.min(percent*pImages[j].dataset.speed, 0))
          } else {
            value = (-30*Math.max(percent*pImages[j].dataset.speed, 0))
          }
          //console.log(percent)
          pImages[j].style.transform = "translateY("+value+"%)";
        }

    }
    else {
      for(var j = 0; j < pImages.length; j++) {
        pImages[j].style.transform = "none"
      }
    }
  }
}
var flyDistance = 0;
var flyImages = document.querySelector(".rotationContainer").querySelectorAll("img")
function updateRotation() {
  flyDistance++;
  flyDistance += flyExtraSpeed;
  flyExtraSpeed -= 0.1;
  flyExtraSpeed = Math.max(0, flyExtraSpeed)
  for(var j = 0; j < flyImages.length; j++) {

    flyImages[j].style.transform = "rotateZ("+(flyDistance*flyImages[j].dataset.rotate)+"deg)";
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

var selfClassChangerDivs = document.querySelectorAll(".selfClassChanger");

function selfChangeClass() {
  for(var i = 0; i < selfClassChangerDivs.length; i++) {
    var classChangerDiv = selfClassChangerDivs[i];
    //console.log(classChangerDiv.getBoundingClientRect().top)
    // console.log(classChangerDiv.getBoundingClientRect().top-classChangerDiv.offsetHeight/2)
    //console.log(window.innerHeight)
    if(classChangerDiv.getBoundingClientRect().top < window.innerHeight/2) {
      classChangerDiv.classList.add(classChangerDiv.dataset.classname)

    }
    else {
      classChangerDiv.classList.remove(classChangerDiv.dataset.classname)
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
flyExtraSpeed = 0;
function scrollHandler(e) {
  lastScroll = new Date().getTime();
  launchedScroll = false;

  console.log(e.deltaY)
  flyExtraSpeed = Math.abs(e.deltaY/10);

}
window.addEventListener("wheel", scrollHandler, false);

function checkHeader() {
  currScroll = document.documentElement.scrollTop || document.body.scrollTop
  if(currScroll > window.innerHeight/2) {
    document.getElementById("header").classList.add("visible");
  }
  else {
      document.getElementById("header").classList.remove("visible");
  }

  if(currScroll > 100) {
    document.getElementById("bottomScrollText").classList.add("invisible");
  }
  else {
      document.getElementById("bottomScrollText").classList.remove("invisible");
  }
}

function startScroll(block) {
  //console.log(block.offsetTop)
  //removeScrollE();
  launchedScroll = true;
  launchedScrollTime = new Date().getTime();

  currScroll = document.documentElement.scrollTop || document.body.scrollTop
  scrollDest = block.offsetTop - scrollOffset;
  console.log(block.offsetTop)
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
    console.log(smallestDist+" : "+closest);
    console.log(blocks[closest])
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
