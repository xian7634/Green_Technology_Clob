$(document).ready(function () {
  // Open-Meteo RESTful API Endpoint (Kuala Lumpur, Malaysia)
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=3.1390&longitude=101.6869&current_weather=true";

  $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    success: function (data) {
      const weather = data.current_weather;
      const temp = weather.temperature;
      const windSpeed = weather.windspeed;
      const isDaytime = weather.is_day === 1 ? "Daytime (Solar Output High)" : "Nighttime (Grid Support Active)";

      // Vertical card list for the sidebar
      const apiHtml = `
        <div class="card border-0 shadow-sm p-3 bg-white rounded-3">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-temperature-high fa-2x text-danger me-3"></i>
            <div>
              <h6 class="text-muted small mb-0">Local Temperature</h6>
              <h4 class="fw-bold text-dark mb-0">${temp} °C</h4>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm p-3 bg-white rounded-3">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-wind fa-2x text-info me-3"></i>
            <div>
              <h6 class="text-muted small mb-0">Wind Velocity</h6>
              <h4 class="fw-bold text-dark mb-0">${windSpeed} km/h</h4>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm p-3 bg-white rounded-3">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-sun fa-2x text-warning me-3"></i>
            <div>
              <h6 class="text-muted small mb-0">Solar Potential</h6>
              <h6 class="fw-bold text-dark mb-0">${isDaytime}</h6>
            </div>
          </div>
        </div>
      `;

      $("#api-loader").hide();
      $("#api-data-container").html(apiHtml).hide().fadeIn(500);
    },
    error: function (xhr, status, error) {
      console.error("RESTful API Error:", error);
      $("#api-loader").hide();
      $("#api-data-container").html(`
        <div class="alert alert-danger mb-0" role="alert">
          <i class="fa-solid fa-triangle-exclamation me-2"></i>Unable to retrieve environmental data.
        </div>
      `).show();
    }
  });
});
