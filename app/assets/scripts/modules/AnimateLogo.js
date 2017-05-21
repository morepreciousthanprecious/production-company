import {TweenMax, Power2, TimelineLite} from "gsap";

window.onload = function() {
	TweenMax.to(".animate-logo__red-girl", 2, {scale: 40, ease:Power2.easeInOut});
	TweenMax.to(".animate-logo__red-path", 2, {fill:"#f05136"});
	TweenMax.to(".animate-logo__red-girl", 3, {scale:300, ease:Power2.easeIn, delay:4});
	TweenMax.to(".animate-logo__red-path", 1, {autoAlpha:0, delay:5});
}



export default AnimateLogo;