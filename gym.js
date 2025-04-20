// ###################################

// Navbar
const nav_Home = document.getElementById('nav_Home');
const nav_Program = document.getElementById('nav_Program');
const nav_Service = document.getElementById('nav_Service');
const nav_About = document.getElementById('nav_About');
const nav_Community = document.getElementById('nav_Community');

const languages = document.getElementById('languages');
const navbar = document.getElementById('navbar');
// Header
const CaptinName = document.getElementById('cname');
const headerTitle = document.getElementById("header_title");
const headerCoach = document.getElementById("header_coach");
const headerDescription = document.getElementById("header_description");
const get_offer = document.getElementById("get_offer");
const headerButton = document.getElementById("header_button");


// Explore

const Eplore_title = document.getElementById('Eplore_title');

const Eplore_programs_title1 = document.getElementById('Eplore_programs_title1');
const Eplore_programs_desc1 = document.getElementById('Eplore_programs_desc1');
const Eplore_programs_btn1 = document.getElementById('Eplore_programs_btn1');

const Eplore_programs_title2 = document.getElementById('Eplore_programs_title2');
const Eplore_programs_desc2 = document.getElementById('Eplore_programs_desc2');
const Eplore_programs_btn2 = document.getElementById('Eplore_programs_btn2');

const Eplore_programs_title3 = document.getElementById('Eplore_programs_title3');
const Eplore_programs_desc3 = document.getElementById('Eplore_programs_desc3');
const Eplore_programs_btn3 = document.getElementById('Eplore_programs_btn3');

const Eplore_programs_title4 = document.getElementById('Eplore_programs_title4');
const Eplore_programs_desc4 = document.getElementById('Eplore_programs_desc4');
const Eplore_programs_btn4 = document.getElementById('Eplore_programs_btn4');

// Class

const class_title = document.getElementById('class_title')
const class_desc = document.getElementById('class_desc')
const class_btn = document.getElementById('class_btn')


// Join

const join_title = document.getElementById('join_title');
const join_subtitle = document.getElementById('join_subtitle');


// Price

const price_title = document.getElementById('price_title');
const price_desc = document.getElementById('price_desc');



const plan_id1 = document.getElementById('plan_id1');
const plan_price1 = document.getElementById('plan_price1');
const plan_feature11 = document.getElementById('plan_feature11');
const plan_feature12 = document.getElementById('plan_feature12');
const plan_btn1 = document.getElementById('plan_btn1');

const plan_id2 = document.getElementById('plan_id2');
const plan_price2 = document.getElementById('plan_price2');
const plan_feature21 = document.getElementById('plan_feature21');
const plan_feature22 = document.getElementById('plan_feature22');
const plan_feature23 = document.getElementById('plan_feature23');
const plan_btn2 = document.getElementById('plan_btn2');


const plan_id3 = document.getElementById('plan_id3');
const plan_price3 = document.getElementById('plan_price3');
const plan_feature31 = document.getElementById('plan_feature31');
const plan_feature32 = document.getElementById('plan_feature32');
const plan_feature33 = document.getElementById('plan_feature33');
const plan_feature34 = document.getElementById('plan_feature34');
const plan_feature35 = document.getElementById('plan_feature35');
const plan_btn3 = document.getElementById('plan_btn3');


// Work

const work_title = document.getElementById('work_title');
const work_sub_title = document.getElementById('work_sub_title');
const work_desc = document.getElementById('work_desc');

const join_title1 = document.getElementById('join_title1')
const join_desc1 = document.getElementById('join_desc1')

const join_title2 = document.getElementById('join_title2')
const join_desc2 = document.getElementById('join_desc2')

const join_title3 = document.getElementById('join_title3')
const join_desc3 = document.getElementById('join_desc3')

// footer 

const footer_brand_desc = document.getElementById('footer_brand_desc');
const footer_contact_title = document.getElementById('footer_contact_title');
const footer_links_title = document.getElementById('footer_links_title');
const footer_feedback_title = document.getElementById('footer_feedback_title');
const footer_feedback_desc = document.getElementById('footer_feedback_desc');
const footer_feedback_input = document.getElementById('footer_feedback_input');
const footer_feedback_button = document.getElementById('footer_feedback_button');
const footer_copyright = document.getElementById('footer_copyright');






// Language Select
let select = document.getElementById('langs');
let lang = localStorage.getItem('lang');

// default language
console.log("default:", lang);

select.onchange = (e) => {
    console.log(e.target.value)
    lang = e.target.value;
    localStorage.setItem('lang', lang);
    fetchPage(lang)
    setDir(lang)
    window.location.reload();

}



let body = document.body;

const setDir = (lang) => {
    if (lang === 'ar') {
        body.setAttribute("dir", "rtl");
    } else {
        body.setAttribute("dir", "ltr");
    }
    console.log("dir:", body.getAttribute("dir"))
}


// Initialize Swiper based on the current dir
const initializeSwiper = () => {
    // Initialize Swiper
    // Explore
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

    // Initialize another swiper if needed (for comments)
    var swiperComments = new Swiper(".mySwipercomments", {
        spaceBetween: 50,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            }
        }
    });


    var swiper = new Swiper(".mySwiperworks1", {
        effect: "flip",
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

window.onload = () => {
    lang = localStorage.getItem('lang');
    select.value = lang
    fetchPage(lang);
    setDir(lang);
    initializeSwiper(); // Initialize Swiper on page load
    initializeTyped(lang);
    navbar.style.boxShadow = 'none';
}

// Typed.js Initialization
// var typed = new Typed('.multiple-text', {
//     strings: ['Ahmed Yahya ', 'Certified Personal Training'],
//     typeSpeed: 50,
//     backSpeed: 50,
//     typeDelay: 50,
//     loop: true
// });




// ReWrirte
function initializeTyped(lang) {
    var typedStrings = [];

    if (lang === 'en') {
        typedStrings = ['Ahmed Yahya', 'Certified Personal Training'];
    } else if (lang === 'ar') {
        typedStrings = ['أحمد يحيى', 'تدريب شخصي معتمد'];
    }

    new Typed('.multiple-text', {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 50,
        typeDelay: 50,
        loop: true
    });
}


// Scroll NavBar Style
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navbar.style.boxShadow = '0 2px 10px #f9ac54';
    } else {
        navbar.style.boxShadow = 'none';
    }
});



// const reviews = [
//     {
//         text: "The trainers here are truly amazing. They push you to be your best!",
//         rating: 5,
//         name: "Emily Wilson",
//         role: "Fitness Enthusiast",
//         img: "https://i.pravatar.cc/100?img=1"
//     },
//     {
//         text: "Love the personalized plans they offer. I've seen real progress.",
//         rating: 4.5,
//         name: "Mark Thompson",
//         role: "Gym Member",
//         img: "https://i.pravatar.cc/100?img=2"
//     },
//     {
//         text: "Very clean gym with great equipment and even better staff!",
//         rating: 4,
//         name: "Lara Smith",
//         role: "Yoga Practitioner",
//         img: "https://i.pravatar.cc/100?img=3"
//     },
//     {
//         text: "Helpful and encouraging trainers. Highly recommended!",
//         rating: 5,
//         name: "Tom Hanks",
//         role: "Bodybuilder",
//         img: "https://i.pravatar.cc/100?img=4"
//     },
//     {
//         text: "My favorite gym in the city. Amazing team and community.",
//         rating: 5,
//         name: "Sara Parker",
//         role: "Runner",
//         img: "https://i.pravatar.cc/100?img=5"
//     },
//     {
//         text: "Trainers are knowledgeable and friendly, great experience!",
//         rating: 4.5,
//         name: "Jake Lee",
//         role: "Student",
//         img: "https://i.pravatar.cc/100?img=6"
//     },
//     {
//         text: "Equipment is modern and the atmosphere is motivating.",
//         rating: 4,
//         name: "Nina Patel",
//         role: "Crossfit Athlete",
//         img: "https://i.pravatar.cc/100?img=7"
//     },
//     {
//         text: "Great results and fantastic support from the coaches!",
//         rating: 5,
//         name: "Chris Martin",
//         role: "Cyclist",
//         img: "https://i.pravatar.cc/100?img=8"
//     },
//     {
//         text: "Flexible hours and welcoming environment. Love it!",
//         rating: 4.5,
//         name: "Megan Davis",
//         role: "Office Worker",
//         img: "https://i.pravatar.cc/100?img=9"
//     },
//     {
//         text: "The staff truly care about your goals. 10/10!",
//         rating: 5,
//         name: "Daniel King",
//         role: "Athlete",
//         img: "https://i.pravatar.cc/100?img=10"
//     },
// ];

function getStarIcons(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    if (halfStar) stars += '<i class="fa-solid fa-star-half-stroke"></i>';

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += `<i class="far fa-star"></i>`;
    }

    return stars;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// const randomReviews = shuffleArray(reviews).slice(0, 5);
// const container = document.getElementById('reviews-container');

// randomReviews.map(review => {
//     container.innerHTML += `
//     <div class="section__container review__container  swiper-slide">
//         <div class="review__content">
//             <p>${review.text}</p>
//             <div class="review-stars">${getStarIcons(review.rating)}</div>
//                 <div class="review__footer">
//                     <div class="review__member">
//                         <img src="${review.img}" alt="${review.name}">
//                         <div class="review__member__details">
//                             <h4>${review.name}</h4>
//                             <p>${review.role}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
// });

const fetchPage = (lang) => {
    fetch(`Languages/${lang}.json`)
        .then((res) => res.json())
        .then((data) => {
            nav_Home.textContent = data.nav_Home;
            nav_Program.textContent = data.nav_Program;
            nav_Service.textContent = data.nav_Service;
            nav_About.textContent = data.nav_About;
            nav_Community.textContent = data.nav_Community;

            // Header
            headerTitle.textContent = data.header_title;
            headerCoach.textContent = data.header_coach;
            headerDescription.textContent = data.header_description;
            get_offer.innerHTML = data.Get_Offer;
            headerButton.textContent = data.header_button;


            // Explore
            Eplore_title.textContent = data.Eplore_title;


            Eplore_programs_title1.innerHTML = data.Eplore_programs[0].title;
            Eplore_programs_desc1.innerHTML = data.Eplore_programs[0].description;
            Eplore_programs_btn1.innerHTML = data.Eplore_programs[0].btn;

            Eplore_programs_title2.innerHTML = data.Eplore_programs[1].title;
            Eplore_programs_desc2.innerHTML = data.Eplore_programs[1].description;
            Eplore_programs_btn2.innerHTML = data.Eplore_programs[1].btn;

            Eplore_programs_title4.innerHTML = data.Eplore_programs[2].title;
            Eplore_programs_desc4.innerHTML = data.Eplore_programs[2].description;
            Eplore_programs_btn4.innerHTML = data.Eplore_programs[2].btn;

            Eplore_programs_title3.innerHTML = data.Eplore_programs[3].title;
            Eplore_programs_desc3.innerHTML = data.Eplore_programs[3].description;
            Eplore_programs_btn3.innerHTML = data.Eplore_programs[3].btn;


            // Class
            class_title.innerHTML = data.class_section.title;
            class_desc.innerHTML = data.class_section.description;
            class_btn.innerHTML = data.class_section.btn;

            // Join
            join_title.innerHTML = data.why_join_us.title;
            join_subtitle.innerHTML = data.why_join_us.subtitle;

            join_title1.innerHTML = data.why_join_us.features[0].title;
            join_desc1.innerHTML = data.why_join_us.features[0].description;

            join_title2.innerHTML = data.why_join_us.features[1].title;
            join_desc2.innerHTML = data.why_join_us.features[1].description;

            join_title3.innerHTML = data.why_join_us.features[2].title;
            join_desc3.innerHTML = data.why_join_us.features[2].description;


            // Price
            price_title.innerHTML = data.pricing.title;
            price_desc.innerHTML = data.pricing.description;

            plan_id1.innerHTML = data.pricing.plans[0].name;
            plan_price1.innerHTML = data.pricing.plans[0].price;
            plan_feature11.innerHTML = data.pricing.plans[0].features[0].name;
            plan_feature12.innerHTML = data.pricing.plans[0].features[1].name;
            plan_btn1.innerHTML = data.pricing.plans[0].btn;




            plan_id2.innerHTML = data.pricing.plans[1].name;
            plan_price2.innerHTML = data.pricing.plans[1].price;
            plan_feature21.innerHTML = data.pricing.plans[1].features[0].name;
            plan_feature22.innerHTML = data.pricing.plans[1].features[1].name;
            plan_feature23.innerHTML = data.pricing.plans[1].features[2].name;
            plan_btn2.innerHTML = data.pricing.plans[1].btn;

            plan_id3.innerHTML = data.pricing.plans[2].name;
            plan_price3.innerHTML = data.pricing.plans[2].price;
            plan_feature31.innerHTML = data.pricing.plans[2].features[0].name;
            plan_feature32.innerHTML = data.pricing.plans[2].features[1].name;
            plan_feature33.innerHTML = data.pricing.plans[2].features[2].name;
            plan_feature34.innerHTML = data.pricing.plans[2].features[3].name;
            plan_feature35.innerHTML = data.pricing.plans[2].features[4].name;
            plan_btn3.innerHTML = data.pricing.plans[2].btn;

            // Work

            work_title.innerHTML = data.work.title;
            work_sub_title.innerHTML = data.work.hook;
            work_desc.innerHTML = data.work.description;

            const person1 = document.getElementById('person1');
            const person2 = document.getElementById('person2');
            const person3 = document.getElementById('person3');
            const person4 = document.getElementById('person4');
            const person5 = document.getElementById('person5');
            const person6 = document.getElementById('person6');
            const person7 = document.getElementById('person7');
            const differ = document.getElementById('differ');

            person1.innerHTML = data.work.persons[0].person1;
            person2.innerHTML = data.work.persons[1].person2;
            person3.innerHTML = data.work.persons[2].person3;
            person4.innerHTML = data.work.persons[3].person4;
            person5.innerHTML = data.work.persons[4].person5;
            person6.innerHTML = data.work.persons[5].person6;
            person7.innerHTML = data.work.persons[6].person7;
            differ.innerHTML = data.work.persons[6].differ;

            // Reviwers
            const Member_review = document.getElementById('Member_review');

            const reviews = data.Member_reviews.reviews;
            const randomReviews = shuffleArray(reviews).slice(0, 5);
            const container = document.getElementById('reviews-container');


            Member_review.innerHTML = data.Member_reviews.review_title;
            randomReviews.map(review => {
                container.innerHTML += `
                <div class="section__container review__container  swiper-slide">
                    <div class="review__content">
                        <p>${review.text}</p>
                        <div class="review-stars">${getStarIcons(review.rating)}</div>
                            <div class="review__footer">
                                <div class="review__member">
                                    <img src="${review.img}" alt="${review.name}">
                                    <div class="review__member__details">
                                        <h4>${review.name}</h4>
                                        <p>${review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });

            // Calories
            const calo_title = document.getElementById('calo_title');
            const calo_subTitle = document.getElementById('calo_subTitle');
            const calo_desc = document.getElementById('calo_desc');
            const calo_btn = document.getElementById('calo_btn');

            calo_title.innerHTML = data.Calories.title;
            calo_subTitle.innerHTML = data.Calories.subtitle;
            calo_desc.innerHTML = data.Calories.description;
            calo_btn.innerHTML = data.Calories.buttonText;


            // footer 

            footer_brand_desc.innerHTML = data.footer.brand.description;

            footer_contact_title.innerHTML = data.footer.contact.title;


            footer_links_title.innerHTML = data.footer.links.title;

            footer_feedback_title.innerHTML = data.footer.feedback.title;
            footer_feedback_desc.innerHTML = data.footer.feedback.description;
            footer_feedback_input.placeholder = data.footer.feedback.placeholder;
            footer_feedback_button.innerHTML = data.footer.feedback.button;

            footer_copyright.innerHTML = data.footer.copyright;

            // Render contact and links lists
            const contactList = document.getElementById('footer_contact_items');
            contactList.innerHTML = data.footer.contact.items.map(item => `<li class="nav-item"> <a>${item}</a></li>`).join('');

            const linksList = document.getElementById('footer_links_items');
            linksList.innerHTML = data.footer.links.items.map(item => `<li class="nav-item"> <a>${item}</a></li>`).join('');


            footer_links_title.classList.add(lang === 'ar' ? 'ar-margin' : 'en-margin');
            footer_contact_title.classList.add(lang === 'ar' ? 'ar-margin' : 'en-margin');



            select.classList.add(lang === 'ar' ? 'ar-nav' : 'en-nav');


        });
}


function validateFeedback() {
    const input = document.getElementById("footer_feedback_input").value.trim();
    const error = document.getElementById("feedback_error");

    // Regex: 10 to 300 characters, letters, numbers, spaces, and punctuation
    const regex = /^[\w\s.,!?'"()\-]{3,300}$/;

    if (!regex.test(input)) {
        error.textContent = "Please enter valid feedback (characters).";
    } else {
        error.textContent = "";
        alert("Feedback submitted successfully!");

    }
}


// Set countdown for 5 hours from now
const countdownElement = document.getElementById("countdown");

const setNewEndTime = () => {
    const newEndTime = new Date().getTime() + 5 * 60 * 60 * 1000;
    localStorage.setItem("countdownEndTime", newEndTime);
    return newEndTime;
};

let endTime = parseInt(localStorage.getItem("countdownEndTime"));

if (!endTime || endTime <= new Date().getTime()) {
    endTime = setNewEndTime();
}

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
        countdownElement.innerHTML = "انتهى العرض!";
        clearInterval(interval);

        // Reset countdown after it ends
        setTimeout(() => {
            endTime = setNewEndTime();
            interval = setInterval(updateCountdown, 1000);
            updateCountdown();
        }, 1000);

        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
};

let interval = setInterval(updateCountdown, 1000);
updateCountdown();