let following = document.querySelector(".Following"); // The "Following" element
let left = document.querySelector(".left"); // The "For you" container
let blueLine = document.querySelector(".line"); // The blue line
let likeIcons = document.querySelectorAll(".heart");

following.addEventListener("click", () => {
  // Move the blue line to the position of "Following"
  blueLine.style.left = "143%"; // Adjust this value based on the header layout
  blueLine.style.transform = "translateX(-143%)";
  blueLine.style.width = "4.5rem"; // Optional: Change line color dynamically
  following.classList.remove("text-gray-500");
  following.classList.add("text-gray-300");
  left.classList.remove("text-gray-300");
  left.classList.add("text-gray-500");
  console.log("Following is clicked");
});

left.addEventListener("click", () => {
  // Move the blue line back to "For you"
  blueLine.style.left = "0";
  blueLine.style.transform = "translateX(0)";
  blueLine.style.width="3.5rem";
  following.classList.add("text-gray-500");
  following.classList.remove("text-gray-300");
  left.classList.remove("text-gray-500");
  left.classList.add("text-gray-300");

  console.log("For you is clicked");
});



likeIcons.forEach(likeIcon => {
    likeIcon.addEventListener("click", () => {
        // Change the icon color to red
        likeIcon.style.color = "#ff0000";  // Red color for the icon

        // Optionally, toggle the icon (like/unlike effect)
        if (likeIcon.textContent === "favorite_border") {
            likeIcon.textContent = "favorite";  // Change to filled heart
        } else {
            likeIcon.textContent = "favorite_border";  // Change to outlined heart
        }
    });
});


// // Select the boxes
const firstBox = document.querySelector(".first");
const secondBox = document.querySelector(".second");
const leftItems = document.querySelectorAll(".leftItems li");
const profileText = document.querySelector(".name");
const profilePic = document.querySelector(".name img");
const postButton = document.querySelector(".Pstbtn");
const threeDots = document.querySelector(".dots"); // Assuming three dots have this class
const main = document.querySelector(".main");

leftItems.forEach(item => {
    item.dataset.originalHTML = item.innerHTML; // Save the complete original HTML
});
 function handleResponsiveLayout() {
     const screenWidth = window.innerWidth;
     if (screenWidth < 640) {
         // Adjust box widths and margins
         main.style.width="100%"
         firstBox.style.width = "17%"; // Adjust width of the first box
         firstBox.style.marginLeft = "-7px"; // Remove empty space on the left
         secondBox.style.width = "85%"; // Adjust width of the second box

         leftItems.forEach(item => {
            const icon = item.querySelector(".material-icons-outlined");
            if (icon) {
                item.innerHTML = ""; // Clear the item content
                item.appendChild(icon); // Add back only the icon
            }
        });
        following.addEventListener("click", () => {
            // Move the blue line to the position of "Following"
            blueLine.style.left = "173%"; 
        })

         // Hide profile text and adjust profile picture
         profileText.style.display = "none";
         profilePic.style.width = "40px"; // Adjust profile picture size
         profilePic.style.height = "40px";

         // Replace the "Post" text with a bell icon and align it correctly
         const bellIcon = document.createElement('span');
         bellIcon.classList.add("material-icons-outlined");
         bellIcon.textContent = "notifications";
         postButton.innerHTML = ""; // Clear button content
         postButton.appendChild(bellIcon); // Add bell icon
         postButton.style.width = "50px"; // Adjust button width
         postButton.style.display = "flex";
         postButton.style.justifyContent = "center";
         postButton.style.alignItems = "center";

         // Place button beside the profile picture
         profilePic.parentElement.appendChild(postButton);

         // Replace three dots with profile picture
         if (threeDots) {
             threeDots.innerHTML = ""; // Clear existing content
             const smallProfilePic = profilePic.cloneNode(true); // Clone profile picture
             smallProfilePic.style.width = "30px"; // Adjust size
             smallProfilePic.style.height = "30px";
             threeDots.appendChild(smallProfilePic); // Replace with profile picture
         }
     } 
     else if (screenWidth >= 640 && screenWidth <= 1024) {
         // Tablet screens
         firstBox.style.width = "33.5%"; // First box takes ~33.5% width
         secondBox.style.width = "66.5%"; // Second box takes remaining width
         thirdBox.style.display = "none"; // Hide third box for tablets
         firstBox.style.marginLeft = "0"; // Reset margin

         // Adjust Post button to be round in the first box
         postButton.style.width = "40px";
         postButton.style.height = "40px";
         postButton.style.borderRadius = "50%";
         postButton.style.display = "flex";
         postButton.style.justifyContent = "center";
         postButton.style.alignItems = "center";

         // Ensure the three dots are replaced with the profile picture
         if (threeDots) {
             threeDots.innerHTML = "";
             const smallProfilePic = profilePic.cloneNode(true);
             smallProfilePic.style.width = "30px";
             smallProfilePic.style.height = "30px";
             threeDots.appendChild(smallProfilePic);
         }
     }
     else {
         // Reset box widths and margins
         main.classList.add("w-3/4");
         firstBox.style.width = "fit-content";
         secondBox.style.width = "45%";
         firstBox.style.marginLeft = ""; // Reset left margin

         // Restore menu items with text and icons
         leftItems.forEach(item => {
             item.innerHTML = item.dataset.originalHTML; // Restore saved original HTML
         });
         // Show profile text and reset profile picture size
         profileText.style.display = "flex";
         profilePic.style.width = "";
         profilePic.style.height = "";

         // Restore the "Post" button and reset size
         postButton.innerHTML = "Post"; // Restore button text
         postButton.style.width = ""; // Reset button width
         postButton.style.display = ""; // Reset display

         // Restore three dots content
         if (threeDots) {
             threeDots.innerHTML = "..."; // Restore original three dots
         }
     }
 }

 // Store original text for the items that will be changed

 // Attach event listeners for load and resize
 window.addEventListener("load", handleResponsiveLayout);
 window.addEventListener("resize", handleResponsiveLayout);


