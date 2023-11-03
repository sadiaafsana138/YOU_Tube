// Function to fetch all categories
const fetchAllCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    return data;
};

// Function to fetch video data by category ID
const fetchVideosByCategory = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const CardContainer = document.getElementById("Card-Container");
    CardContainer.innerHTML = "";

    if (data.data.length === 0) {
        CardContainer.innerHTML = `
       <div class="flex flex-col items-center justify-center px-auto h-96 w-screen">
           <img src="image/icon.png" alt="Icon" />
           <p class="text-black text-4xl mt-4">Oops!! Sorry, There is no content here</p>
       </div>`;
    } else {
        data.data.forEach((video) => {
            CardContainer.appendChild(createCardElement(video));
        });
    }
};

// Category Name tab
const HandleCategory = async () => {
    try {
        const data = await fetchAllCategories();
        console.log(data);

        if (data.status === true) {
            const TabContainer = document.getElementById("tab-container");

            data.data.forEach(category => {
                const button = document.createElement("button");
                button.className = "bg-gray-300 text-black p-2 rounded m-2 transition-colors category-button";
                button.dataset.categoryId = category.category_id;
                button.innerHTML = category.category;

                button.addEventListener('click', () => {
                    const buttons = document.querySelectorAll('.category-button');
                    buttons.forEach(btn => {
                        btn.classList.remove('active', 'bg-red-500', 'text-white');
                        btn.classList.add('bg-gray-300', 'text-black');
                    });
                    button.classList.add('active', 'bg-red-500', 'text-white');
                    fetchVideosByCategory(button.dataset.categoryId);
                });

                TabContainer.appendChild(button);

                // Activate the button with category ID "1000" by default
                if (category.category_id === "1000") {
                    button.click();
                }
            });
        } else {
            console.error('Failed to fetch categories.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

HandleCategory();

//creating Card
function createCardElement(video) {
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="px-4 mx-4 mb-4">
         <div class="card w-80 bg-base-100 shadow-xl gap-x-0.5 relative">
             <figure>
                 <img src="${video?.thumbnail}" alt="Video Thumbnail" class="p-4 rounded-2xl h-52 w-full" />
                
                 <p>
                     ${video?.others.posted_date > 0
            ? `
                             <div class="absolute right-6 bottom-40 bg-black bg-opacity-70 text-white p-2 rounded-tl rounded-bl">
                                 <p>${convertTimeToHoursAndMinutes(video?.others.posted_date)}</p>
                             </div>`
            : ''
        }
                 </p>
               
             </figure>

             <div class="card-body flex flex-row">
                 <div>
                     <img src="${video?.authors[0].profile_picture}" alt="Author's Profile Picture" class="rounded-full h-10 w-10" />
                 </div>
                 <div>
                     <h2 class="card-title">
                         ${video?.title}
                     </h2>
                     <div class="flex flex-row gap-2 items-center">
                         <div>
                             <p>
                                 ${video?.authors[0].profile_name}
                             </p>
                         </div>
                         <div class="rounded-full">
                             ${video?.authors[0].verified
            ? `<i class="fa-solid fa-certificate text-blue-500"></i>`
            : `<i class="fa-solid fa-certificate text-white"></i>`}
                         </div>
                     </div>
                     <div class="card-actions">
                         Views ${video?.others.views}
                     </div>
                 </div>
             </div>
         </div>
     </div>`;
    return div;
};

//Converting time
function convertTimeToHoursAndMinutes(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHours} hrs : ${formattedMinutes} min ago`;
};


//if sort needed category wise
//Sort video cards by views in descending order
function sortCardsByViewsDescending() {
    const cardContainer = document.getElementById("Card-Container");
    const cards = Array.from(cardContainer.getElementsByClassName("card"));

    cards.sort((a, b) => {
        const viewsA = parseInt(a.querySelector(".card-actions").textContent.match(/\d+/)[0]);
        const viewsB = parseInt(b.querySelector(".card-actions").textContent.match(/\d+/)[0]);
        return viewsB - viewsA;
    });

    cardContainer.innerHTML = "";
    cards.forEach((card) => {
        cardContainer.appendChild(card);
    });
};
//event listener
const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", () => {
    sortCardsByViewsDescending();
});




/*//if sort needed over all

//Function to fetch and display all video cards from all categories
const fetchAllVideos = async () => {
    const categoriesResponse = await fetch('https:openapi.programming-hero.com/api/videos/categories');
    const categoriesData = await categoriesResponse.json();
    const cardContainer = document.getElementById('Card-Container');
    cardContainer.innerHTML = '';

    if (categoriesData.status === true) {
        const allCategoryIds = categoriesData.data.map(category => category.category_id);

        const allVideoPromises = allCategoryIds.map(categoryId =>
            fetch(`https:openapi.programming-hero.com/api/videos/category/${categoryId}`)
                .then(response => response.json())
        );

        Promise.all(allVideoPromises)
            .then(videoDataArray => {
                const allVideos = videoDataArray.reduce((accumulator, current) => accumulator.concat(current.data), []);

                // Sort all videos by views in descending order
                allVideos.sort((a, b) => {
                    const viewsA = parseInt(a.others.views);
                    const viewsB = parseInt(b.others.views);
                    return viewsB - viewsA;
                });

                allVideos.forEach(video => {
                    cardContainer.appendChild(createCardElement(video));
                });
            })
            .catch(error => {
                console.error('Error fetching video data:', error);
            });
    } else {
        console.error('Failed to fetch categories.');
    }
};

//Add a click event listener to the "Sort by view" button to fetch and display all videos
const sortButton_All = document.getElementById('sort-button');
sortButton.addEventListener('click', () => {
    fetchAllVideos();
});

*/
