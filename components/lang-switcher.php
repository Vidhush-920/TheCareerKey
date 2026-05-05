<div class="top_menu">
    <div class="dropdown">
        <button class="btn btn-secondary" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="lang-active">
                <img class="lang-select-flag" id="langFlag" src="assets/images/flags/gb.png" alt="Language Flag" />
                <span id="langLabel">English</span>
            </div>
            <div class="toggle-icon">
                <i class="fas fa-angle-down"></i>
            </div>
        </button>
        <ul class="dropdown-menu" aria-labelledby="langDropdown">
            <li><a class="dropdown-item" id="langSelect-en" href="javascript:;" onclick='changeLanguage("en")'>
                <div class="lang-select">
                    <img class="lang-select-flag" src="assets/images/flags/gb.png" alt="English Flag" />
                    <span>English</span>
                </div>
            </a></li>
            <li><a class="dropdown-item" id="langSelect-tm" href="javascript:;" onclick='changeLanguage("tm")'>
                <div class="lang-select">
                    <img class="lang-select-flag" src="assets/images/flags/in.png" alt="Tamil Flag" />
                    <span>தமிழ்</span>
                </div>  
            </a></li>
            <li><a class="dropdown-item" id="langSelect-sn" href="javascript:;" onclick='changeLanguage("sn")'>
                <div class="lang-select">
                    <img class="lang-select-flag" src="assets/images/flags/lk.png" alt="Sinhala Flag" />
                    <span>සිංහල</span>
                </div>
            </a></li>
        </ul>
    </div>
</div>