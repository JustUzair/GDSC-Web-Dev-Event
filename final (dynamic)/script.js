async function getToursDataAndPopulateContainer() {
  try {
    console.log("fetching");
    const data = await axios.get(
      "https://natours-8l3p.onrender.com/api/v1/tours"
    );
    console.log(data);

    const toursData = data.data.data.data;
    console.log(toursData);

    const tourContainer = document.querySelector(".tours-container");

    toursData.map(tour => {
      const card = `
        <div class="card">
            <div class="tour-image--container">
              <div class="backdrop-filter"></div>
              <img
                src="https://natours-8l3p.onrender.com/img/tours/${
                  tour.imageCover
                }"
                alt="tour-image-2"
              />
              <span class="tour-name"> ${tour.name} </span>
            </div>
            <div class="tour-info">
              <span class="tour-title">A ${tour.duration} day tour</span>
              <span class="description">
               ${tour.summary}
              </span>
            </div>
            <fieldset>
                <legend>Tour Summary</legend>
                <div class="tour-info-summary">
                  <span class="location">${
                    tour.startLocation.description
                  }</span>
                  <span class="date">${new Date(
                    tour.startDates[0]
                  ).toLocaleString("default", {
                    year: "numeric",
                    month: "long",
                  })}</span>
                  <span class="days">${tour.duration} Day Tour</span>
                  <span class="tour-size">${tour.maxGroupSize} People</span>
                </div>
              </fieldset>
            <div class="tour-summary">
              <div class="price-container">
                <span class="price">$${tour.price}</span>
                <span class="price-description"> per person </span>
              </div>
              <span class="tour-rating">Tour Rating : ${
                tour.ratingsAverage
              }</span>
            </div>
          </div>`;

      tourContainer?.insertAdjacentHTML("beforeend", card);
    });
    console.log("fetch successful");
  } catch (err) {
    console.error(err);
  }
}

getToursDataAndPopulateContainer();
