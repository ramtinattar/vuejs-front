<template>
  <div class="Left-side-nav-profil2">
    <p class="pre-title">Vérification de votre compte</p>
    <h1 class="title">Vos informations</h1>
    <form action="">
      <div>
        <input type="radio" id="Monsieur" name="choose1" value="Monsieur" />
        <label for="Monsieur">Monsieur</label>
        <input type="radio" id="Madame" name="choose1" value="Madame" />
        <label for="Madame">Madame</label>
      </div>
      <div>
        <label for="Prenom"
          >Prenom*
          <input type="text" id="Prenom" name="Prenom" placeholder="John" />
        </label>
        <label for="Nom"
          >Nom*
          <input type="text" id="Nom" name="Nom" placeholder="Doe" />
        </label>
      </div>
      <div>
        <div class="select_box">
          Nationalité*
          <select name="Nationalité" id="Nationalité">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antartica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegowina"
              >Bosnia and Herzegowina</option
            >
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory"
              >British Indian Ocean Territory</option
            >
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic"
              >Central African Republic</option
            >
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
            <option value="Croatia">Croatia (Hrvatska)</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands"
              >Falkland Islands (Malvinas)</option
            >
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France" selected>France</option>
            <option value="France Metropolitan">France, Metropolitan</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories"
              >French Southern Territories</option
            >
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard and McDonald Islands"
              >Heard and Mc Donald Islands</option
            >
            <option value="Holy See">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran (Islamic Republic of)</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Democratic People's Republic of Korea"
              >Korea, Democratic People's Republic of</option
            >
            <option value="Korea">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya"
              >Libyan Arab Jamahiriya</option
            >
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia"
              >Macedonia, The Former Yugoslav Republic of</option
            >
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia, Federated States of</option>
            <option value="Moldova">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands"
              >Northern Mariana Islands</option
            >
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint LUCIA">Saint LUCIA</option>
            <option value="Saint Vincent"
              >Saint Vincent and the Grenadines</option
            >
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia (Slovak Republic)</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia"
              >South Georgia and the South Sandwich Islands</option
            >
            <option value="Span">Spain</option>
            <option value="SriLanka">Sri Lanka</option>
            <option value="St. Helena">St. Helena</option>
            <option value="St. Pierre and Miguelon"
              >St. Pierre and Miquelon</option
            >
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan, Province of China</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands"
              >United States Minor Outlying Islands</option
            >
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Viet Nam</option>
            <option value="Virgin Islands (British)"
              >Virgin Islands (British)</option
            >
            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
            <option value="Wallis and Futana Islands"
              >Wallis and Futuna Islands</option
            >
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Serbia">Serbia</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <label for="Numéro de téléphone"
          >Numéro de téléphone*
          <input
            type="text"
            id="Numéro de téléphone"
            name="Numéro de téléphone"
            placeholder="0601020304"
          />
        </label>
      </div>
      <div>
        <label for="Date"
          >Date de création
          <input type="date" id="Date" name="Date" />
        </label>
        <div class="select_box2">
          Pays de naissance*
          <select name="naissance" id="naissance">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antartica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegowina"
              >Bosnia and Herzegowina</option
            >
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory"
              >British Indian Ocean Territory</option
            >
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic"
              >Central African Republic</option
            >
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
            <option value="Croatia">Croatia (Hrvatska)</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands"
              >Falkland Islands (Malvinas)</option
            >
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France" selected>France</option>
            <option value="France Metropolitan">France, Metropolitan</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories"
              >French Southern Territories</option
            >
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard and McDonald Islands"
              >Heard and Mc Donald Islands</option
            >
            <option value="Holy See">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran (Islamic Republic of)</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Democratic People's Republic of Korea"
              >Korea, Democratic People's Republic of</option
            >
            <option value="Korea">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya"
              >Libyan Arab Jamahiriya</option
            >
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia"
              >Macedonia, The Former Yugoslav Republic of</option
            >
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia, Federated States of</option>
            <option value="Moldova">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands"
              >Northern Mariana Islands</option
            >
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint LUCIA">Saint LUCIA</option>
            <option value="Saint Vincent"
              >Saint Vincent and the Grenadines</option
            >
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia (Slovak Republic)</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia"
              >South Georgia and the South Sandwich Islands</option
            >
            <option value="Span">Spain</option>
            <option value="SriLanka">Sri Lanka</option>
            <option value="St. Helena">St. Helena</option>
            <option value="St. Pierre and Miguelon"
              >St. Pierre and Miquelon</option
            >
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan, Province of China</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands"
              >United States Minor Outlying Islands</option
            >
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Viet Nam</option>
            <option value="Virgin Islands (British)"
              >Virgin Islands (British)</option
            >
            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
            <option value="Wallis and Futana Islands"
              >Wallis and Futuna Islands</option
            >
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Serbia">Serbia</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <label for="Ville"
          >Ville de naissance*
          <input type="text" id="Ville" name="Ville" placeholder="Paris" />
        </label>
      </div>
      <div>
        <label for="img">
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.5113 4.90979L24.7026 18.4507C24.6139 18.8646 24.2592 19.1602 23.8452 19.1602C23.7861 19.1602 23.727 19.1602 23.6678 19.1307C23.1948 19.042 22.8696 18.5689 22.9878 18.0959L25.6192 5.44196L8.64872 1.98283L8.23481 3.87501C8.11655 4.34805 7.6435 4.6437 7.17046 4.55501C6.69742 4.43675 6.40176 3.9637 6.49046 3.49066L7.11133 0.741095C7.22959 0.268052 7.67307 -0.0276006 8.14611 0.0610951L26.8313 3.84544C27.0678 3.90457 27.2748 4.02283 27.3931 4.22979C27.5113 4.43675 27.5409 4.67327 27.5113 4.90979ZM21.9826 21.0524C21.9826 21.7028 21.4505 22.235 20.8 22.235H1.58263C0.932198 22.235 0.400024 21.7028 0.400024 21.0524V6.56544C0.400024 5.91501 0.932198 5.38283 1.58263 5.38283H20.8C21.4505 5.38283 21.9826 5.91501 21.9826 6.56544V21.0524ZM2.76524 15.0507V7.74805H19.2922V14.9915L18.3165 13.9863C17.9322 13.6611 17.4887 13.6611 17.1044 13.9863L14.7687 15.9967L9.15133 11.0298C8.76698 10.675 8.14611 10.675 7.76176 11.0002L2.76524 15.0507ZM19.3218 19.8698V17.7115L17.6661 16.1446L15.4192 18.155C15.0348 18.4802 14.4731 18.4802 14.0887 18.155L8.38263 13.1585L2.76524 17.7411V19.8698H19.3218ZM16.2174 10.7637C16.2174 11.7689 15.4192 12.5672 14.4139 12.5672C13.4087 12.5672 12.5809 11.7394 12.6105 10.7637C12.6105 9.75849 13.4087 8.96023 14.4139 8.96023C15.3896 8.96023 16.2174 9.75849 16.2174 10.7637Z"
              fill="#000033"
            />
          </svg>
          Uploader une pièce d’identité
          <span> PDF, JPG, JPEG2000, PNG <br />max 1mo </span>
        </label>
        <input type="file" id="img" name="img" accept="image/*" />
        <p>Votre pièce d’identité doit être valide et en couleur</p>
      </div>
      <div class="cta-buttons">
        <a @click="Profile3()">Continuer plus tard</a>
        <input type="submit" value="Confirmer" @click="Profile3()" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    Profile3() {
      this.$router.push("/Profile3");
    },
  },
};
</script>

<style scoped>
.Left-side-nav-profil2 {
  margin: auto;
  width: 692px;
  text-align: left;
}
.pre-title {
  color: #07d79c;
  font-weight: 500;
  font-size: 15px;
}
.title {
  margin-top: 5px;
}
.after-title {
  color: #a3a4a8;
  margin-top: 10px;
}

form {
  margin-top: 26px;
}
input[type="text"],
input[type="date"],
select {
  display: block;
  margin: 14px 0;
  text-align: left;
  width: -webkit-fill-available;
  height: 40px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding-left: 14px;
  outline: none;
  -moz-appearance: none;
  /* -webkit-appearance: none; */
  appearance: none;
}

/*form label:nth-child(2),
form label:nth-child(3),
form label:nth-child(4),
form label:nth-child(5) {
   width: 50%;
  display: inline-block; 
}*/
/* form label:nth-child(4) input {
  width: 91% !important;
  position: relative;
  z-index: 99;
  background: none;
} */

select[id="forme"] {
  width: 96% !important;
  position: relative;
  z-index: 99;
  background: none;
}

.select_box:after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #07d79c;
  position: absolute;
  margin-top: -36px;
  margin-left: 310px;
  content: "";
  z-index: 98;
}

.select_box2:after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #07d79c;
  position: absolute;
  margin-top: -36px;
  margin-left: 196px;
  content: "";
  z-index: 98;
}

input[type="date"] {
  padding-right: 10px;
}
input[type="submit"] {
  background: #07d79c;
  border: none;
  width: 99px;
  height: 36px;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}
.cta-buttons {
  position: absolute;
  right: 514px;
  bottom: 20px;
}

.cta-buttons a {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  color: #07d79c;
  text-decoration: none;
  cursor: pointer;
}

label[for="Monsieur"],
label[for="Madame"] {
  /* width: 100% !important;
  position: relative;
  top: -48px;
  padding: 30px 0 30px 45px;
  border: 1px solid #dfe1e6;
  border-radius: 20px; */
  margin-right: 12px;
  margin-left: 5px;
}
/* input[type="radio"] {
  margin-left: 20px;
} */
form div:nth-child(1) input {
  margin: 0;
}

form div:nth-child(2) {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
form div:nth-child(2) label {
  width: 48%;
}
form div:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.select_box {
  width: 48%;
}
form div:nth-child(3) label {
  width: 48%;
}
form div:nth-child(4) {
  display: flex;
  justify-content: space-between;
}
form div:nth-child(4) label:first-child,
form div:nth-child(4) label:nth-child(3) {
  width: 32%;
}
.select_box2 {
  display: block !important;
  margin-top: 0 !important;
  width: 32%;
}

input#img {
  /* display: inline-block;
  position: relative;
  z-index: 1;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  height: 138px;
  top: -138px; */
  position: relative;
  z-index: 1;
  width: 810px;
  /* opacity: 0; */
  cursor: pointer;
  padding-top: 148px;
  top: -142px;
  left: -119px;
}

form div:nth-child(5) {
  overflow: hidden;
  margin-top: 20px;
}

form div:nth-child(5) p {
  font-weight: 500;
  font-size: 15px;
  color: #a3a4a8;
  margin-top: -120px;
}

label[for="img"] {
  width: 99%;
  height: 138px;
  display: flex;
  flex-direction: column;
  border: 1px dashed #a3a4a8;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  color: #000033;
}

label[for="img"] span {
  color: #a3a4a8;
  display: block;
  margin-top: 9px;
  line-height: 150%;
}

label[for="img"] svg {
  margin: 19px auto 12px auto;
}
</style>
