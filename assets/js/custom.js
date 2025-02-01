document.querySelectorAll('.scroll-towards').forEach(span => {
    span.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-id');
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const staticCards = `
    <div class="col-md-6 scroll-animation"
        data-animation="fade_from_left">
        <div class="pricing-table">
            <div class="pricing-table-header">
                <div
                    class="top d-flex justify-content-between align-items-start">
                    <h4>basic</h4>
                    <p class="text-right">Have design ready
                        to build?<br>or small budget</p>
                </div>
                <h2>$80 <p class="package-name">(1 Page Website)</p>
                </h2>
            </div>
            <ul class="feature-lists">
                <li>Static Website</li>

                <li>Design Using Prebuilt Themes with slight adjustments</li>

                <li>Contact, About and other Sections will be included in the page</li>

                <li>Implement with HTML/CSS and Javascript</li>

                <li>Remote/Online</li>

                <li>Free Hosting on Github, Infinity Free etc</li>

                <li>Support 3 months</li>

                <li>+$20 for Each Extra or Seperate Page</li>
            </ul>
            <a target="_blank" href="#contact"
                class="theme-btn">pick this package</a>
        </div>
    </div>
    <div class="col-md-6 scroll-animation"
        data-animation="fade_from_right">
        <div class="pricing-table">
            <div class="pricing-table-header">
                <div
                    class="top d-flex justify-content-between align-items-start">
                    <h4>premium</h4>
                    <p class="text-right">Not have any
                        design?<br> Leave its for me</p>
                </div>
                <h2>$125 <p class="package-name">(3 Page Website)</p>
                </h2>
            </div>
            <ul class="feature-lists">
                <li>Static Website</li>

                <li>Design Using Prebuilt or Custom Tailored Themes</li>

                <li>Fully customizable</li>

                <li>Implement with HTML/CSS and Javascript</li>

                <li>Remote/Online</li>

                <li>Free Hosting on Github, Infinity Free etc</li>

                <li>Support 6 months</li>

                <li>+$20 for Each Extra Page</li>

                <li>Your project alway be priority</li>
            </ul>
            <a target="_blank" href="#contact"
                class="theme-btn">pick this package</a>
        </div>
    </div>
`;
const dynamicCards = `
    <div class="col-md-6 scroll-animation"
        data-animation="fade_from_left">
        <div class="pricing-table">
            <div class="pricing-table-header">
                <div
                    class="top d-flex justify-content-between align-items-start">
                    <h4>basic</h4>
                    <p class="text-right">Have design ready
                        to build?<br>or small budget</p>
                </div>
                <h2>$100 <p class="package-name">(1 - 3 Page Website)</p>
                </h2>
            </div>
            <ul class="feature-lists">
                <li>Dynamic Website</li>

                <li>Design Using Prebuilt Themes with slight adjustments</li>

                <li>Contact, About and other Sections will be included in the website</li>

                <li>Frontend Implementation with HTML/CSS and Javascript</li>

                <li>Backend Implementation with PHP/MYSQL</li>

                <li>Remote/Online</li>

                <li>Free Hosting on Infinity Free or purchased private hosting</li>

                <li>Setup your site with your hosting and Publish it on google</li>

                <li>Support 3 months</li>

                <li>+$20 for Each Extra or Seperate Page</li>
            </ul>
            <a target="_blank" href="#contact"
                class="theme-btn">pick this package</a>
        </div>
    </div>
    <div class="col-md-6 scroll-animation"
        data-animation="fade_from_right">
        <div class="pricing-table">
            <div class="pricing-table-header">
                <div
                    class="top d-flex justify-content-between align-items-start">
                    <h4>premium</h4>
                    <p class="text-right">Not have any
                        design?<br> Leave its for me</p>
                </div>
                <h2>$160 <p class="package-name">(1 - 5 Page Website)</p>
                </h2>
            </div>
            <ul class="feature-lists">
                <li>Dynamic Website</li>

                <li>Design Using Prebuilt or Custom Tailored Themes</li>

                <li>Fully customizable</li>

                <li>Frontend Implementation with HTML/CSS and Javascript</li>

                <li>Backend Implementation with PHP/MYSQL</li>

                <li>Remote/Online</li>

                <li>Free Hosting on Infinity Free or purchased private hosting</li>

                <li>Setup your site with your hosting and Publish it on google</li>

                <li>Support 3 months</li>

                <li>+$20 for Each Extra or Seperate Page</li>

                <li>Your project alway be priority</li>
            </ul>
            <a target="_blank" href="#contact"
                class="theme-btn">pick this package</a>
        </div>
    </div>
`;
const stprice = document.querySelector('.static-pricing');
const dyprice = document.querySelector('.dynamic-pricing');
const priceCards = document.querySelector('.pricing-cards');
stprice.addEventListener('click', ()=>{
    if(!stprice.classList.contains('active')){
        stprice.classList.add('active');
        if(dyprice.classList.contains('active')){
            dyprice.classList.remove('active');
        }
    }
    priceCards.innerHTML = staticCards;
});
dyprice.addEventListener('click', ()=>{
    if(!dyprice.classList.contains('active')){
        dyprice.classList.add('active');
        if(stprice.classList.contains('active')){
            stprice.classList.remove('active');
        }
    }
    priceCards.innerHTML = dynamicCards;
});
if(stprice.classList.contains('active')){
    priceCards.innerHTML = staticCards;
}else if (dyprice.classList.contains('active')){
    priceCards.innerHTML = dynamicCards;
}