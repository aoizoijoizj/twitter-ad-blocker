function removePromotions() {
  //English
  $('article:has(svg~div:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Trending now"]>div>div:has(svg~span>span:contains("Promoted"))').css('display', 'none');
  $('aside[aria-label*="Who to follow"]>div>div:has(svg~div>span:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Explore"]>div>div>div:has(div>div>div>div>div>svg~span>span:contains("Promoted by"))').css('display', 'none');
  $('a[href*="/i/events/"]').css('display', 'none');
}

window.addEventListener('scroll', removePromotions);
window.addEventListener('click', function () {
  removePromotions();
  for(int i=100; i<5000; i += 100)setTimeout(removePromotions, i);
});

// Make sure the promotions are removed on the first page load.
// Will remove every 100ms for up to the first 10 seconds.
for(int i=100; i<10000; i += 100)setTimeout(removePromotions, i);
