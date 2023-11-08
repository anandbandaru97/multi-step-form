let Steps = document.querySelectorAll(".form-step"),
  FieldGroups = document.querySelectorAll(".step-container"),
  CurrentArea = 0,
  mainArea = document.querySelector("main"),
  nextBtn = document.querySelector("#nextBtn"),
  backBtn = document.querySelector("#backBtn"),
  confirmBtn = document.querySelector("#confirmBtn"),
  userName = document.querySelector('#namefield'),
  userEmail = document.querySelector('#emailfield'),
  phoneNumber = document.querySelector('#phonefield'),
  nameErrMsg = document.querySelector('.errMsg1'),
  emailErrMsg = document.querySelector('.errMsg2'),
  numberErrMsg = document.querySelector('.errMsg3');

function ChangeArea(n) {
  mainArea.setAttribute("area-current", n);
}

function navigateToCurrentArea(array) {
  for (i = 0; i < array.length; i++) {
    if (i == CurrentArea) {
      array[i].classList.add("active");
    } else {
      array[i].classList.remove("active");
    }
  }
}


function orderBtns() {
  if (CurrentArea == 0) {
    backBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    confirmBtn.style.display = "none";
  } else if (CurrentArea == 3) {
    backBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    confirmBtn.style.display = "inline-block";
  } else {
    backBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    confirmBtn.style.display = "none";
  }
}

function lastStepDisplay() {
  signUpForm.style.display = "none";
  backMsg.classList.add("active");
}

function Increase() {
  // Check if the required fields are filled
  if (userName.value === "" || userEmail.value === "" || phoneNumber.value === "") {
    // Display error messages or handle the validation as needed

    userName.addEventListener("blur", function (event) {
      if (event.target.value === "") {
        nameErrMsg.textContent = "This field is required *";
        userName.style.border = '1px solid red';
      } else {
        nameErrMsg.textContent = "";
      }
    });

    userEmail.addEventListener("blur", function (event) {
      if (event.target.value === "") {
        emailErrMsg.textContent = "This field is required *";
        userEmail.style.border = '1px solid red';
      } else {
        emailErrMsg.textContent = "";
      }
    });

    phoneNumber.addEventListener("blur", function (event) {
      if (event.target.value === "") {
        numberErrMsg.textContent = "This field is required *";
        phoneNumber.style.border = '1px solid red';
      } else {
        numberErrMsg.textContent = "";
      }
    });

    // return; // Do not proceed to the next step
    return;
  } else {
    //   // Clear any existing error messages and borders
    nameErrMsg.textContent = "";
    emailErrMsg.textContent = "";
    numberErrMsg.textContent = "";
    userName.style.border = '';
    userEmail.style.border = '';
    phoneNumber.style.border = '';
    if (CurrentArea < 4) CurrentArea++;
    if (CurrentArea == 3) displaySummary();
    OrderLayout();
  }
}

  function Decrease() {
    if (CurrentArea > 0) CurrentArea--;
    OrderLayout();
  }

  function OrderLayout() {
    ChangeArea(CurrentArea);
    navigateToCurrentArea(Steps);
    navigateToCurrentArea(FieldGroups);
    orderBtns();
  }

  window.onload = OrderLayout();

  nextBtn.addEventListener("click", Increase);
  backBtn.addEventListener("click", Decrease);
  confirmBtn.addEventListener("click", lastStepDisplay);

  ///////////////////////////////////////////////////////

  let planCards = document.querySelectorAll("input[name=plan-type]"),
    serviceCards = document.querySelectorAll("input[name=service-card]"),
    period = document.getElementById("plan-period"),
    summaryContainer = document.querySelector(".summary-container");

  function getMont(m) {
    if (period.checked) return +m * 10; else return +m;
  }

  function displaySummary() {
    let cost = 0, per = "mo", fullPer = "Monthly";

    if (period.checked) {
      per = "yr";
      fullPer = "Yearly"
    };

    planCards.forEach((e) => {
      if (e.checked) {
        cost += getMont(e.getAttribute("data-price"));
        summaryContainer.innerHTML = `<li><div>
        <h4>${e.value} (${fullPer})</h4>
        <a href="">Change</a> </div>
        <strong>+$${cost}/${per}</strong></li>`;
      }
    });

    serviceCards.forEach((e) => {
      if (e.checked) {
        summaryContainer.innerHTML +=
          `<li>${e.value} <strong>+$${getMont(e.getAttribute("data-price"))}/${per}</strong></li>`;
        cost += getMont(e.getAttribute("data-price"));
      }
    });

    summaryPeriod.innerText = ` ${fullPer.slice(0, -2)}`;
    totalCost.innerText = `+$${cost}/${per}`;
  }
