const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
const main4 = document.getElementById("main4");
const main5 = document.getElementById("main5");

const nextButton1 = document.getElementById("step1-btn");
const nextButton2 = document.getElementById("step2-btn");
const nextButton3 = document.getElementById("step3-btn");
const nextButton4 = document.getElementById("step4-btn");

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const phoneNumber = document.getElementById("number");

const toggleBtn = document.getElementById("toggleButton");

const backButton2 = document.getElementById("back2");
const backButton3 = document.getElementById("back3");
const backButton4 = document.getElementById("back4");

const plansList1 = document.querySelector(".list1");
const plansList2 = document.querySelector(".list2");
const plansList3 = document.querySelector(".list3");

const myForm = document.getElementById("myForm");
const nameErrMsg = document.getElementById("nameErrMsg");
const emailErrMsg = document.getElementById("emailErrMsg");
const numberErrMsg = document.getElementById("numberErrMsg");

const yearlyPlansList1 = document.querySelector(".annual-price1");
const yearlyPlansList2 = document.querySelector(".annual-price2");
const yearlyPlansList3 = document.querySelector(".annual-price3");

const monthlyPriceContainer = document.querySelector(
  ".monthly-plans-container"
);

// Personal Info Active State Start

userName.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsg.textContent = "This field is required *";
    userName.style.border = "1px solid red";
  } else {
    nameErrMsg.textContent = "";
  }
});

userEmail.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsg.textContent = "This field is required *";
    userEmail.style.border = "1px solid red";
  } else {
    emailErrMsg.textContent = "";
  }
});

phoneNumber.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    numberErrMsg.textContent = "This field is required *";
    phoneNumber.style.border = "1px solid red";
  } else {
    numberErrMsg.textContent = "";
  }
});

nextButton1.addEventListener("click", function () {
  if (userName.value && userEmail.value && phoneNumber.value) {
    main1.style.display = "none";
    main2.style.display = "block";

    let step = document.querySelector(".step2");
    step.style.backgroundColor = "aliceBlue";
    step.style.color = "black";

    step = document.querySelector(".step1");
    step.style.backgroundColor = "transparent";
    step.style.color = "white";
  } else if (!userName.value && !userEmail.value && !phoneNumber.value) {
    nameErrMsg.textContent = "This field is required *";
    emailErrMsg.textContent = "This field is required *";
    numberErrMsg.textContent = "This field is required *";
  }
});

// Personal Info Active State End

// Select Your Plan Active State Start

function onClick(plansList, plansList2, plansList3) {
  plansList.addEventListener("click", function () {
    plansList.style.backgroundColor = "aliceblue";
    plansList.style.border = "1px solid blue";
    plansList2.style.border = "1px solid lightgrey";
    plansList2.style.backgroundColor = "white";
    plansList3.style.border = "1px solid lightgrey";
    plansList3.style.backgroundColor = "white";
  });
}

onClick(plansList1, plansList2, plansList3);
onClick(plansList2, plansList1, plansList3);
onClick(plansList3, plansList1, plansList2);

let yearly = true;

const checkPrice1 = document.querySelector(".checkPrice1");
const checkPrice2 = document.querySelector(".checkPrice2");
const checkPrice3 = document.querySelector(".checkPrice3");
const yearPara = document.querySelectorAll(".para");
const months = document.querySelectorAll(".month-price");
const price = document.querySelectorAll(".price");
monthlyPrices = [9, 12, 15];
yearlyPrices = [90, 120, 150];

toggleBtn.addEventListener("change", function () {
  if (yearly) {
    for (let index = 0; index < 3; index++) {
      yearPara[index].style.display = "block";
      price[index].textContent = yearlyPrices[index];
    }
    checkPrice1.textContent = 10;
    checkPrice2.textContent = 20;
    checkPrice3.textContent = 20;
    document.querySelectorAll(".year").forEach((element) => {
      element.textContent = "/yr";
    });
    document.querySelector(".monthly").style.color = "rgb(180, 180, 180)";
    document.querySelector(".yearly").style.color = "navy";
    yearly = false;
  } else {
    for (let index = 0; index < 3; index++) {
      yearPara[index].style.display = "none";
      months[index].textContent = monthlyPrices[index];
    }
    checkPrice1.textContent = 1;
    checkPrice2.textContent = 2;
    checkPrice3.textContent = 2;
    document.querySelectorAll(".year").forEach((element) => {
      element.textContent = "/mo";
    });
    document.querySelector(".yearly").style.color = "rgb(180, 180, 180)";
    document.querySelector(".monthly").style.color = "navy";
    yearly = true;
  }
});

nextButton2.addEventListener("click", function () {
  main2.style.display = "none";
  main3.style.display = "block";

  let step = document.querySelector(".step3");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step2");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

backButton2.addEventListener("click", function () {
  main2.style.display = "none";
  main1.style.display = "block";

  step = document.querySelector(".step1");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step2");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

// Select Your Plan Active State End

// Pick Add-Ons Active State Start

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");

const onlineService = document.querySelector(".online-service");
const storage = document.querySelector(".storage");
const profile = document.querySelector(".profile");

function checkBoxSelection(check1, onlineService) {
  check1.addEventListener("change", function () {
    if (check1.checked) {
      onlineService.style.border = "1px solid blue";
    } else {
      onlineService.style.border = "1px solid lightgrey";
    }
  });
}

checkBoxSelection(check1, onlineService);
checkBoxSelection(check2, storage);
checkBoxSelection(check3, profile);

nextButton3.addEventListener("click", function () {
  main3.style.display = "none";
  main4.style.display = "block";

  let step = document.querySelector(".step4");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step3");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

backButton3.addEventListener("click", function () {
  main3.style.display = "none";
  main2.style.display = "block";

  step = document.querySelector(".step2");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step3");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

nextButton3.addEventListener("click", function () {
  main3.style.display = "none";
  main4.style.display = "block";

  let step = document.querySelector(".step4");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step3");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

backButton3.addEventListener("click", function () {
  main3.style.display = "none";
  main2.style.display = "block";

  step = document.querySelector(".step2");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step3");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

// Pick Add-Ons Active State End

// Finishing Up Active State Start

nextButton4.addEventListener("click", function () {
  main4.style.display = "none";
  main5.style.display = "block";
});

backButton4.addEventListener("click", function () {
  main4.style.display = "none";
  main3.style.display = "block";

  step = document.querySelector(".step3");
  step.style.backgroundColor = "aliceBlue";
  step.style.color = "black";

  step = document.querySelector(".step4");
  step.style.backgroundColor = "transparent";
  step.style.color = "white";
});

// Finishing Up Active State End

let selectedPlan = undefined;

const allPlansList = document.querySelectorAll(".plans-list");
const allAddOns = document.querySelectorAll(".checkBox");

function updateSelectedPlanView() {
  const selectedPlanView = document.querySelector(".selected-plan");
  const selectedPriceView = document.querySelector(".selected-price");

  if (selectedPlan) {
    const planType = selectedPlan.querySelector(".planType").textContent;
    const planPrice = selectedPlan.querySelector(".price").textContent;
    selectedPlanView.textContent = `Selected Plan: ${planType}`;
    selectedPriceView.textContent = `Price: ${planPrice}`;
  } else {
    selectedPlanView.textContent = "No Plan Selected";
    selectedPriceView.textContent = "";
  }
}

function updateSelectedAddOns() {
  let totalPrice = 0;

  if (selectedPlan) {
    const planPriceElement = selectedPlan.querySelector(".price").textContent;
    const planPrice = parseInt(planPriceElement);
    totalPrice += planPrice;
  }

  allAddOns.forEach((eachAddOn) => {
    if (eachAddOn.checked) {
      const container = eachAddOn.closest(".check-box");
      const addOnPrice = container.querySelector(".price").textContent;
      totalPrice += parseInt(addOnPrice);
    }
  });

  const totalPriceHeading = document.querySelector(".total-price-heading");
  const totalPriceCalc = document.querySelector(".total-price-calc");

  totalPriceHeading.textContent = "Total Price:";
  totalPriceCalc.textContent = totalPrice;
}

allPlansList.forEach((eachPlan) => {
  eachPlan.addEventListener("click", () => {
    allPlansList.forEach((item) => {
      item.classList.remove("select");
    });
    eachPlan.classList.add("select");

    selectedPlan = eachPlan;

    updateSelectedPlanView();
    updateSelectedAddOns();
  });
});

allAddOns.forEach((eachAddOn) => {
  eachAddOn.addEventListener("change", () => {
    updateSelectedAddOns();
  });
});

function updateFinishingUpContainer() {
  const selectedPlanView = document.querySelector(".selected-plan");
  const selectedPriceView = document.querySelector(".selected-price");
  const selectedAddOnsView = document.getElementById("selected-addons");

  // Clear previous content
  selectedPlanView.textContent = "";
  selectedPriceView.textContent = "";
  selectedAddOnsView.innerHTML = "";

  // Update selected plan
  if (selectedPlan) {
    const planType = selectedPlan.querySelector(".planType").textContent;
    const planPrice = selectedPlan.querySelector(".price").textContent;
    selectedPlanView.textContent = `Selected Plan: ${planType}`;
    selectedPriceView.textContent = `Price: ${planPrice}`;
  } else {
    selectedPlanView.textContent = "No Plan Selected";
  }

  // Update selected add-ons
  allAddOns.forEach((eachAddOn) => {
    if (eachAddOn.checked) {
      const container = eachAddOn.closest(".check-box");
      const addOnName = container.querySelector(".addon-name").textContent;
      const addOnPrice = container.querySelector(".price").textContent;

      const addOnItem = document.createElement("div");
      addOnItem.textContent = `${addOnName}: ${addOnPrice}`;
      selectedAddOnsView.appendChild(addOnItem);
    }
  });
}

allPlansList.forEach((eachPlan) => {
  eachPlan.addEventListener("click", () => {
    allPlansList.forEach((item) => {
      item.classList.remove("select");
    });
    eachPlan.classList.add("select");

    selectedPlan = eachPlan;

    updateFinishingUpContainer();
  });
});

allAddOns.forEach((eachAddOn) => {
  eachAddOn.addEventListener("change", () => {
    updateFinishingUpContainer();
  });
});
