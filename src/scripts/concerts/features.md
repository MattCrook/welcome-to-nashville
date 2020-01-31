# Features of Concert Search

- This is a search for current music concerts in Nashville.
- User can type or select from dropdown to search genres available in the api.
    - The genres options are being dynamically populated with the API (If the API genres are updated the options will also be updated with the new changes).
- On submit, the search results are added to the Search Results section 10 results at a time.
- The search results are validated. If there aren't any results matching search, a message shows up telling the user there were no results found. (Ex. There are no concerts of the genre "random" at this time. Please select one of the suggestions.)
- The search input is cleared after submit, though the page shows text below showing what search the user just made (Ex. "Searching for concerts with "Alternative" as a genre").
- the search results show Concert Name, Venue, Address, link to buy tickets, and if available a note for the concert.
- User can access further pages using pagination at the top of the result window.
- Search results are scrollable.
- Save button adds the concert to the itinerary at the bottom of the page.
- While API is fetching the data, the text Loading... shows on dom so user knows that the pages is loading.
- if api is not working, an error alert will show where the error occurred in the code and the page will tell the user that the function is currently not working.
- Input is validated so user cannot submit empty fields.
- Search shows image for each concert.
