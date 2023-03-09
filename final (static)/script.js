async function getToursData() {
  try {
    console.log("fetching");
    const data = await axios.get(
      "https://natours-8l3p.onrender.com/api/v1/tours"
    );
    console.log(data);
    console.log("fetch successful");
  } catch (err) {
    console.error(err);
  }
}

getToursData();
