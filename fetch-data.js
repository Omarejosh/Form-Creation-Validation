document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container
        const dataContainer = document.getElementById("api-data");

        try {
            // Fetch user data
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list element
            const userList = document.createElement("ul");

            // Loop through the users and create list items
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying a message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData when the DOM is fully loaded
    fetchUserData();
});
