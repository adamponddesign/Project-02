# London Trains (Hackathon)
## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) General Assembly Project 2
### Timeframe
2 days


### Brief
The brief was to consume a publicly available API and deliver the data back in a React app.  
The project consumes data from [Transport API](https://www.transportapi.com).  
This was a pair-coding, hackathon project with [Lauren Winter](https://github.com/LaurenFWinter).
### Technologies used

* JavaScript (ES6)
* React
* Webpack
* Ajax
* HTML5
* SCSS
* Insomnia
* Git
* GitHub
* Bulma

### App Overview
The application allows users to view live arrival and departure times at several popular London train stations.


![London-trains Screenshot](https://user-images.githubusercontent.com/47188720/60045417-bd922380-96bc-11e9-90ce-7e1847f70c38.png)

You can find a hosted version here - https://adamponddesign.github.io/london-trains/


### Process
After a discussion we decided to make an app which displayed some transport information.  
With the 2 day timeframe in mind, we next researched which APIs could provide us with a key quickly.

Having received our API key from the **Transport API** we used the documentation and the **REST** client **Insomnia** to experiment and decipher how to attain the information we required.

In our code we initialised state with empty arrays for departures and arrivals and an empty string for station.

```
this.state = {
  departures: [],
  arrivals: [],
  station: ''
}
```
We then created two separate functions
* getDeparturesData
* getArrivalsData

Both contained an **axios** GET request which incorporated our key and chosen parameters, then set the data received back from the API on to **state**.

Here is an example from our code of mapping over the departures data in order to display the information for each individual train.

```
{this.state.departures.map((train, index) =>
  <div className="columns" key={index}>
    <div className="boardtext column is-three-fifths">{train.destination_name}
    </div>
    <div className="boardtext column has-text-centered">{train.platform}</div>
    <div className="boardtext column has-text-centered">{train.expected_departure_time}</div>
  </div>
)}
```

### Challenges
The short timeframe made it tricky to confidently set goals that were both challenging and achievable.  
The API documentation was at first tricky to understand and interpret.


### Wins
This project was a great introduction to React and I enjoyed learning how to incorporate information from an external API.  

Having initially only aimed to display departures information, it was big win to discover that the same API could also provide arrivals data.

We also needed to install **file-loader** and make some additions to our **webpack.config** file in order to display our imported font.
