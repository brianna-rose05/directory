const contractors = [ //list of items 
    {
        name: "Martinetto Contracting Inc",
        specialty: "General Contractor",
        services: "Roofing & siding, remodeling, outdoor structures, interior finishes, additions",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "Licensed, insured, professional residential, custom built, construction company with 30+ years of experience. Grand Rapids, MN and surrounding area.",
        logo: "assets/martinetto_contracting.jpg",
        saved: false
    },
    {
        name: "Juntunen Enterprises LLC",
        specialty: "General Contractor",
        services: "Custom homes, new home construction, garages, home design",
        area: "Serves Deer River area",
        licensed: true,
        bio: "Realistic budgets, clear communication, and support from design through construction. Helping homeowners build their dream home while keeping the process organized and on track.",
        logo: "assets/juntunen.jpg",
        saved: false
    },
    {
        name: "Timbercraft Homes",
        specialty: "General Contractor",
        services: "Home remodeling, home additions, construction management ",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "Building with Quality, Tradition & Trust since 2011. From custom homes to construction management, we get the job done right.",
        logo: "assets/timbercraft_homes.jpg",
        saved: false
    },
    {
        name: "Prestige Roofing",
        specialty: "Roofing",
        services: "Storm damage restoration, roof inspections, replacements, and repairs",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "Whether you need a new roof, storm damage repair, or expert guidance on your next project, Prestige Roofing delivers quality craftsmanship and peace of mind. Fully licensed, insured, and GAF certified—we protect what matters most.",
        logo: "assets/prestige_roofing.webp",
        saved: false
    },
    {
        name: "Arctic Heating & Cooling LLC",
        specialty: "HVAC",
        services: "Hvac, thermostat, A/C system, furnance, water heater, repair, maintenance, install",
        area: "Serves Grand Rapids area",
        licensed: false,
        bio: "Arctic Heating & Cooling, LLC is a trusted provider of heating, cooling and air quality services for residential and commercial properties across the Minnesota Northland.",
        logo: "assets/artic_logo.png",
        saved: false
    },
    {
        name: "Lease Landscaping, Inc.",
        specialty: "Landscaping",
        services: "Landscaping, excavation, lawn irrigation",
        area: "Serves Grand Rapids area",
        licensed: false,
        bio: "Lease Landscaping, Inc. offers residential and commercial landscaping and excavating services throughout Grand Rapids and the surrounding areas.",
        logo: "assets/lease_logo.png",
        saved: false
    },
    {
        name: "Nex-Gen Painting",
        specialty: "Painting",
        services: "Iterior painting, exterior painting, new constructions, remodels, repaints and pre-finishing.",
        area: "Serves Brainerd Lakes and Grand Rapids areas",
        licensed: false,
        bio: "Locally owned and operated, Nex-Gen Painting proudly serves northern Minnesota in all commercial and residential painting needs. We strive for 100% customer satisfaction in everything we do.",
        logo: "assets/nextgen_logo.webp",
        saved: false
    },
    {
        name:  "Ramsey Contractors",
        specialty: "Roofing",
        services: "Roofing and siding install and repairs.",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "At Ramsey Contractors, our roofing services are designed to cater to all your residential roofing needs. As your trusted roofing contractor, we specialize in both minor roof repairs and major roof replacement projects.",
        logo: "assets/ramsey_logo.png",
        saved: false
    },
    {
        name: "Northwoods Concrete & Masonry",
        specialty: "Masonry",
        services: "Masonry, concrete, fireplace, driveways, foundations, and repair work",
        area: "Serves Grand Rapids, Longville, Walker and Rnoemer areas",
        licensed: false,
        bio: "Our primary goal is customer satisfaction. With over twenty years in the concrete business I have the knowledge and experience to make your project a pleasant one.",
        logo: "assets/northwoods.png",
        saved: false
    },
    {
        name: "Rapid Garage Door & Awning",
        specialty: "Screens & Doors",
        services: "Garage door sales and install, retractable awnings, screens.",
        area: "Serves Grand Rapids area",
        licensed: false,
        bio: "The professionals at Rapid Garage Door & Awning provide top quality sales, installation, service and repair of garage doors, garage door openers, and retractable awnings and screens.",
        logo: "assets/rapid_garage.png",
        saved: false
    },
    {
        name: "Northern Plumbing & Air",
        specialty: "Plumbing",
        services: "Plumbing, HVAC, refrigeration, central air install, and mini split install",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "With a combined experience of 17 years, Northern Plumbing And Air is committed to providing quality plumbing and HVAC services. ",
        logo: "assets/northern_logo.png",
        saved: false
    },
    {
        name: "AJ Smith Custom Carpentry",
        specialty: "General Contractor",
        services: "siding, decks, garages, remodels, and custom builds.",
        area: "Serves Greater Itasca County area",
        licensed: true,
        bio: "Family owned and family centered business owned by AJ Smith and serving the community for over 16 years.",
        logo: "assets/ajsmith_logo.png",
        saved: false
    },
    {
        name: "North Country Insulation",
        specialty: "Insulation",
        services: "AeroSeal, BiBs, closed cell foam, injection foam, open cell foam, and temp site heating.",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "NCI has been installing spray foam insulation throughout Northern Minnesota for the past 15+ years.",
        logo: "assets/NCI-logo-white.png",
        saved: false
    },
    {
        name: "Northland Drywall Solutions",
        specialty: "Drywall",
        services: "Drywall hanging, finishing, and mudding, along with interior and exterial painting services.",
        area: "Serves the Grand Rapids and Duluth areas",
        licensed: true,
        bio: "Our experienced team serves the greater Grand Rapids area with 15 years of expertise in drywall texture, edges, and painting for a clean, finished renovation.",
        logo: "assets/northland_logo.png",
        saved: false
    },
    {
        name: "B Jahn Builders",
        specialty: "General Contractor",
        services: "New home construction, siding, roofing, decks, garages, patios, remodeling, and reconovations",
        area: "Serves Grand Rapids area",
        licensed: true,
        bio: "For 18 years we have specialized in building residential custom homes, and renovating and remodeling homes and businesses for our friends and neighbors.",
        logo: "assets/bjahn_logo.png",
        saved: false
    }
]
const savedNames = JSON.parse(localStorage.getItem('savedNames')) || [];
contractors.forEach(c => { if (savedNames.includes(c.name)) c.saved = true; });
savedContractorList = contractors.filter(c => c.saved);

const container = document.getElementById('contractor_list')

function renderCards(list) {
    container.innerHTML = '' //clears cards from page
    list.forEach(function(contractor) { //new for loop - takes an array + argument
        container.innerHTML += ` 
            <div class="card_outer">
            <p class="top_card_text">${contractor.specialty}</p>
                    <div class="card_inner">
                        <div class="card_top">
                            <div class="card_top_left">
                            <img src="${contractor.logo}" class="logo">
                                <p class="biz_name">${contractor.name}</p>
                            </div>
                            <button class="save_btn ${contractor.saved ? 'is-clicked' : ''}" data-name="${contractor.name}"></button>
                        </div>
                        <p style="text-align: left; font-size:medium;">${contractor.bio}</p>
                        <hr class="card_line">
                        <div class="card_bottom">
                            <div class="card_row">
                                <svg class="icons" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#696969"><path d="M748-144 531-361l68-68 217 217-68 68Zm-536 0-68-68 268-268-64-64-38 38-52-52v70l-26 26-112-112 26-26h70l-36-37 144-144q17-17 38.5-26t45.5-9q24 0 45.5 9t38.5 26l-87 86 47 47-36 36 64 64 83-83q-5-13-8-26t-3-27q0-55 38.5-93.5T684-816q14 0 27 3t26 8l-87 87 68 68 87-87q6 12 8.5 25.5T816-684q0 55-38.5 93T684-553q-14 0-27-2.5t-26-8.5L212-144Z"/></svg>
                                <p class="info_text">${contractor.services} </p>
                            </div>
                            <div class="card_row">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#696969"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S13.1,12,12,12z M18,10.2C18,6.57,15.35,4,12,4s-6,2.57-6,6.2 c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8 c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z"/></g></svg>
                                <p class="info_text_spacing">${contractor.area} </p>
                            </div>
                            ${contractor.licensed ? ` 
                                    <div>
                                        <div class="card_row">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#076585"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"/></svg>
                                            <p class="info_text_special">Licensed & insured</p>
                                        </div>
                                    </div>
                                ` : ""}
                        </div>
                        <button class="card_btn">Read more</button>
                    </div>
            </div>
        `;
    });
}
renderCards(contractors)


//* search input
const search = document.getElementById('searchInput')
search.addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase()
    const filtered = contractors.filter(function(contractor) {
        return contractor.services.toLowerCase().includes(value)
        || contractor.name.toLowerCase().includes(value)
    })
    renderCards(filtered)
})


var bookmarkBtn = document.getElementsByClassName("bookmark_btn")[0];
var slider = document.getElementsByClassName('slider_parent')[0];
document.addEventListener("click", function(e) {
    if (!slider.classList.contains("active")) return;

    if (slider.contains(e.target) || bookmarkBtn.contains(e.target)) return;

    slider.classList.remove("active");
}
);

bookmarkBtn.addEventListener( "click" , function(){
    slider.classList.toggle("active");
});



/* ------------------------------------ bookmark populates  ----------------------------------- */

const bookmarkPanel = document.getElementById('bookmark_panel')

bookmarkPanel.addEventListener('click', function(e) { 
    const btn = e.target.closest('.save_btn');
    if (!btn) return;
    const contractor = contractors.find(c => c.name === btn.dataset.name);

    document.querySelector(`[data-name="${contractor.name}"]`).classList.remove("is-clicked");


    if (contractor) { //change saved state
            contractor.saved = !contractor.saved;
        } 
    if (contractor) { //not saved  
        savedContractorList = savedContractorList.filter(c => c.saved ) //rewrite contractor list to keep only true
    }
    renderBookmarkPanel()
    });

    


container.addEventListener('click', function(e) { 
    const btn = e.target.closest('.save_btn'); //e target = exact element that gets clicked
    if (!btn) return; //do nothing if the save_btn isn't clicked
    btn.classList.toggle('is-clicked'); ///btn has been clicked, so turns on the class
    
    const contractor = contractors.find(c => c.name === btn.dataset.name); //find matching card

    if (contractor) { //change saved state
        contractor.saved = !contractor.saved;
    } 
    
    if (contractor.saved) { //check new state - add to list if on, remove from list if off 
        if (!savedContractorList.includes(contractor)) { //check for duplicates 
             savedContractorList.push(contractor); 
        }
    }
    
    if (contractor) { //not saved  
        savedContractorList = savedContractorList.filter(c => c.saved ) //rewrite contractor list to keep only true
    }

    renderBookmarkPanel()
});


//show saved state cards on panel 
function renderBookmarkPanel() {
    bookmarkPanel.innerHTML = ""
    savedContractorList.forEach(function(contractor) { 
        bookmarkPanel.innerHTML += ` 
        <div class="slider_container"> 
        <img src="${contractor.logo}" class="logo_bookmark">
            <div class="bookmark_content">
                <p class="biz_name_bookmark">${contractor.name}</p>
                <p class="service">${contractor.specialty}</p>
                <div class="card_row">
                        <svg class="icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20px" viewBox="0 0 20 20" width="20px" fill="#000000"><g><rect fill="none" height="20" width="20" x="0"/></g><g><g><rect height="5.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.3383 13.8538)" width="2" x="13.05" y="10.62"/><path d="M14.23,8.98c1.38,0,2.5-1.12,2.5-2.5c0-0.51-0.15-0.98-0.42-1.38l-2.08,2.08l-0.71-0.71l2.08-2.08 c-0.4-0.26-0.87-0.42-1.38-0.42c-1.38,0-2.5,1.12-2.5,2.5c0,0.32,0.07,0.63,0.18,0.91L10.69,8.6L9.64,7.54l0.71-0.71L8.93,5.42 L10.34,4C9.56,3.22,8.29,3.22,7.51,4L4.69,6.83l1.06,1.06l-2.13,0L3.27,8.24l2.83,2.83l0.35-0.35L6.46,8.6l1.06,1.06l0.71-0.71 l1.06,1.06l-4.6,4.6l1.41,1.41l7.22-7.22C13.6,8.91,13.91,8.98,14.23,8.98z"/></g></g></svg>
                    <p class="info_text">${contractor.services}</p>
                </div>
            </div>
            <div>
                <button class="save_btn ${contractor.saved ? 'is-clicked' : ''}" data-name="${contractor.name}"></button>
                </div>
            </div>
            <div class="slider_line">`
        localStorage.setItem('savedNames', JSON.stringify(savedContractorList.map(c => c.name)));
    });
}

console.log(savedContractorList);
renderBookmarkPanel()