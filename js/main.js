const container = document.querySelector('.container');
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');
const daily = document.querySelectorAll('.daily');

// Event listeners
dailyBtn.addEventListener('click', showDaily);
weeklyBtn.addEventListener('click', showWeekly);
monthlyBtn.addEventListener('click', showMonthly);

// Fetch using arrow functions

// Show daily as default on page loading
showDaily();

// Show daily stats
function showDaily() {
 fetch('data.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function (activity) {
        let activityTitle = activity.title.toLowerCase().replace(' ', '-');

        output += `
        <div class="${activityTitle} activity-card">
          <div class="${activityTitle}-bg card-icon">
            <img src="/images/icon-${activityTitle}.svg" alt="" />
          </div>
          <div class="card-info">
            <div class="title">
              <p class="activity">${activity.title}</p>
              <span class="more-details">...</span>
            </div>
            <!-- Daily -->
            <div class="daily">
              <div class="hours">${activity.timeframes.daily.current}hrs</div>
              <div class="previous">Previous - ${activity.timeframes.daily.previous}hrs</div>
            </div>
          </div>
        </div>
        `
      })
      document.getElementById('output').innerHTML = output;
      dailyBtn.classList.add('active-menu'); 
      weeklyBtn.classList.remove('active-menu');   
      monthlyBtn.classList.remove('active-menu');
    })
    .catch(err => console.log(err));
}

// Show weekly stats
function showWeekly() {
 fetch('data.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function (activity) {
        let activityTitle = activity.title.toLowerCase().replace(' ', '-');

        output += `
        <div class="${activityTitle} activity-card">
          <div class="${activityTitle}-bg card-icon">
            <img src="/images/icon-${activityTitle}.svg" alt="" />
          </div>
          <div class="card-info">
            <div class="title">
              <p class="activity">${activity.title}</p>
              <span class="more-details">...</span>
            </div>
            <!-- Daily -->
            <div class="daily">
              <div class="hours">${activity.timeframes.weekly.current}hrs</div>
              <div class="previous">Previous - ${activity.timeframes.weekly.previous}hrs</div>
            </div>
          </div>
        </div>
        `
      })
      document.getElementById('output').innerHTML = output;
      dailyBtn.classList.remove('active-menu'); 
      weeklyBtn.classList.add('active-menu');   
      monthlyBtn.classList.remove('active-menu');
    })
    .catch(err => console.log(err));
}

// Show monthly stats
function showMonthly() {
 fetch('data.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function (activity) {
        let activityTitle = activity.title.toLowerCase().replace(' ', '-');

        output += `
        <div class="${activityTitle} activity-card">
          <div class="${activityTitle}-bg card-icon">
            <img src="/images/icon-${activityTitle}.svg" alt="" />
          </div>
          <div class="card-info">
            <div class="title">
              <p class="activity">${activity.title}</p>
              <span class="more-details">...</span>
            </div>
            <!-- Daily -->
            <div class="daily">
              <div class="hours">${activity.timeframes.monthly.current}hrs</div>
              <div class="previous">Previous - ${activity.timeframes.monthly.previous}hrs</div>
            </div>
          </div>
        </div>
        `
      })
      document.getElementById('output').innerHTML = output;
      // Change active menu item color
       dailyBtn.classList.remove('active-menu'); 
       weeklyBtn.classList.remove('active-menu');   
       monthlyBtn.classList.add('active-menu');
    })
    .catch(err => console.log(err));
}