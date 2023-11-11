document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data from the API endpoint on your server
    fetch('/api/deployment')
        .then(response => response.json())
        .then(data => {
            // Access the parameters object in the JSON data
            const parameters = data.properties.parameters;

            // Update HTML content with specific parameter values
            document.getElementById('name').textContent = parameters.name.value;
            document.getElementById('location').textContent = parameters.location.value;
            document.getElementById('sku').textContent = parameters.sku.value;
            document.getElementById('resourceGroupName').textContent = parameters.resourceGroupName.value;
            // ... add more elements as needed

            // Create a list of tag values
            const tagValuesContainer = document.getElementById('tag-values');
            for (const key in parameters.tagValues.value) {
                const listItem = document.createElement('li');
                listItem.textContent = `${key}: ${parameters.tagValues.value[key]}`;
                tagValuesContainer.appendChild(listItem);
            }

            // Create a list of privateEndpoints
            const privateEndpointsContainer = document.getElementById('private-endpoints');
            parameters.privateEndpoints.value.forEach(endpoint => {
                const listItem = document.createElement('li');
                listItem.textContent = `Endpoint Name: ${endpoint.privateEndpoint.name}`;
                privateEndpointsContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
