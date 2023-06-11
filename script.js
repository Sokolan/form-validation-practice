/* eslint-disable no-param-reassign */
// Email, Country, Zip Code, Password and Password Confirmation fields.

const createForm = () => {
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  const createFormInput = (
    type,
    id,
    elementName,
    restrains = [],
    required = true
  ) => {
    const formElement = document.createElement(`input`);
    formElement.setAttribute("type", type);
    formElement.setAttribute("id", id);
    formElement.setAttribute("name", elementName);
    formElement.required = required;
    restrains.forEach((restrain) => {
      formElement.setAttribute(restrain[0], restrain[1]);
    });

    return formElement;
  };

  const createFormLabel = (forName, text) => {
    const label = document.createElement("label");
    label.setAttribute("for", forName);
    label.textContent = text;

    return label;
  };

  const createFormInputContainer = (formLabel, formInput) => {
    const formInputContainer = document.createElement("div");
    formInputContainer.className = "form-input-container";

    const error = document.createElement("span");
    error.className = "error";

    formInputContainer.appendChild(formLabel);
    formInputContainer.appendChild(formInput);
    formInputContainer.appendChild(error);

    return formInputContainer;
  };

  const createCountriesDropDown = () => {
    const container = document.createElement("select");
    container.setAttribute("id", "countries");
    container.setAttribute("form", "#form");

    countryList.forEach((country) => {
      const countryElement = document.createElement("option");
      countryElement.value = country;
      countryElement.textContent = country;
      container.appendChild(countryElement);
    });

    return container;
  };

  const checkMissing = (element, error, message) => {
    if (element.validity.valueMissing) {
      error.className = "error active";
      error.textContent = message;
      return false;
    }
    return true;
  };

  const checkTypeMismatch = (element, error, message) => {
    if (element.validity.typeMismatch) {
      error.className = "error active";
      error.textContent = message;
      return false;
    }
    return true;
  };

  const checkPattern = (element, error, message) => {
    if (element.validity.patternMismatch) {
      error.className = "error active";
      error.textContent = message;
      return false;
    }
    return true;
  };

  const checkMinLenght = (element, error, message) => {
    if (element.validity.tooShort) {
      error.className = "error active";
      error.textContent = message;
      return false;
    }
    return true;
  };

  const form = document.createElement("form");
  form.setAttribute("id", "form");

  // Create Email input element
  const emailLabel = createFormLabel("email", "Please enter email: ");
  const emailInput = createFormInput("email", "email", "email", [
    ["minlength", 8],
  ]);
  emailInput.addEventListener("input", (event) => {
    const emailContainer = event.target.parentElement.children;

    const email = emailContainer[1];
    const error = emailContainer[2];

    // const error
    if (email.validity.valid) {
      error.className = "error";
      error.textContent = "";
    } else if (!checkMissing(email, error, "Email can't be empty"));
    else if (
      !checkTypeMismatch(
        email,
        error,
        "Entered value needs to be an email address."
      )
    );
    else {
      const emailLen = email.value.length;
      checkMinLenght(
        email,
        error,
        `Too short, should be at least 8 characters, you've entered ${emailLen} charecters`
      );
    }
  });
  form.appendChild(createFormInputContainer(emailLabel, emailInput));

  // Create Countries dropdown element
  const countryLabel = createFormLabel("countries", "Choose a country: ");
  form.appendChild(
    createFormInputContainer(countryLabel, createCountriesDropDown())
  );

  // Create ZipCode input element
  const zipLabel = createFormLabel("zip", "Please enter your Zipcode: ");
  const zipInput = createFormInput("text", "zip", "zip", [
    ["minlength", 8],
    ["maxlength", 8],
    ["pattern", "^[0-9]*$"],
  ]);
  zipInput.addEventListener("input", (event) => {
    const zipContainer = event.target.parentElement.children;

    const zip = zipContainer[1];
    const error = zipContainer[2];

    if (zip.validity.valid) {
      error.className = "error";
      error.textContent = "";
    } else if (!checkMissing(zip, error, "Zipcode can't be empty"));
    else if (!checkPattern(zip, error, "Zipcode must contain only numbers."));
    else {
      const zipLen = zip.value.length;
      checkMinLenght(
        zip,
        error,
        `Zipcode must be exactly 8 charecters, yours is: ${zipLen}`
      );
    }
  });
  form.appendChild(createFormInputContainer(zipLabel, zipInput));

  const passwordLabel = createFormLabel("password", "Please enter password: ");
  const passwordInput = createFormInput("password", "password", "password", [
    ["minlength", 8],
    ["maxlength", 16],
    ["pattern", "/^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z]).*$/"],
  ]);
  passwordInput.addEventListener("input", (event) => {
    const passwordContainer = event.target.parentElement.children;

    const password = passwordContainer[1];
    const error = passwordContainer[2];
    const passwordLen = password.value.length;
    if (password.validity.valid) {
      error.className = "error";
      error.textContent = "";
    } else if (!checkMissing(password, error, "Password can't be empty"));
    else if (
      !checkMinLenght(
        password,
        error,
        `Password should be at-least 8 charecters long, yours is ${passwordLen}`
      )
    );
    else if (!checkPattern(password, error, "Password illegal,")) {
      if (!password.value.match("(?=.*[A-Z])")) {
        error.innerHTML += "<br>Must contain at-least 1 uppercase letter.";
      }
      if (!password.value.match("(?=.*[a-z])")) {
        error.innerHTML += "<br>Must contain at-least 1 lowercase letter.";
      }
      if (!password.value.match("(?=.*[0-9])")) {
        error.innerHTML += "<br>Must contain at-least 1 number.";
      }
    }
  });
  form.appendChild(createFormInputContainer(passwordLabel, passwordInput));

  const passwordConfirmLabel = createFormLabel("password-confirm", "Please re-enter the password");
  const passwordConfirmInput = createFormInput("password", "password-confirm", "password-confirm", []);
  passwordConfirmInput.addEventListener("input", (event) => {
    const passwordConfirmContainer = event.target.parentElement.children;

    const passwordConfirm = passwordConfirmContainer[1];
    const password = document.querySelector("#password").value;
    const error = passwordConfirmContainer[2];
    if (passwordConfirm.value !== password) {
      error.className = "error active";
      error.textContent = "Passwords don't match";
    }
    else {
      error.className = "error";
      error.textContent = "";
    }
  })
  form.appendChild(createFormInputContainer(passwordConfirmLabel, passwordConfirmInput));

  return form;
};

document.querySelector("#content").appendChild(createForm());
