function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

addStyleString(`body {
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;
}

.tw-font-size-1 {
	font-size: 4rem!important
}

.tw-font-size-2 {
	font-size: 2.8rem!important
}

.tw-font-size-3 {
	font-size: 2.4rem!important
}

.tw-font-size-4 {
	font-size: 1.6rem!important
}

.tw-font-size-5 {
	font-size: 1.4rem!important
}

.tw-font-size-6 {
	font-size: 1.2rem!important
}

.tw-font-size-7 {
	font-size: 1.1rem!important
}

.tw-font-size-8 {
	font-size: 1rem!important
}

.top-nav__menu {
	background: rgb(100, 65, 164) !important;
}

.top-nav__menu .tw-core-button-icon--large {
	width: 2.5rem !important;
}

.navigation-link {
	color: hsla(0,0%,100%,.7) !important;
}

.navigation-link.active,
.navigation-link:hover,
.top-nav__external-link {
	color: white !important;
}

.navigation-link.active > div {
	margin-bottom: -2px !important;
}

.navigation-link__active-indicator {
	display: none !important;
}

.navigation-link.active {
	border-bottom: solid 2px white !important;
}

.tw-input {
	background: #fff !important;
	color: black !important;
	border: solid 2px hsla(218, 216, 222);
}

.top-nav__menu .tw-input--large,
.top-nav__menu .tw-core-button--large {
	height: 3.25rem !important;
}


.top-nav__menu .tw-core-button--secondary.tw-core-button--disabled,
.top-nav__menu .tw-core-button--secondary	{
	background: rgba(0, 0, 0, 0.2) !important;
	color: white !important;
	opacity: 1 !important;
}

.top-nav__menu .tw-core-button--secondary.tw-core-button--disabled {
	color: hsla(0,0%,100%,.7) !important;
}

.top-nav__menu .tw-core-button--secondary:hover:not(.tw-core-button--disabled) {
	background: rgba(0, 0, 0, 0.35) !important;
}

.top-nav__menu button.tw-interactive .tw-c-background-base {
	background: transparent !important;
}

.top-nav__menu .tw-button-icon__icon,
.side-nav .tw-button-icon__icon {
	color: white !important;
}

.side-nav,
.side-nav__overlay-wrapper {
	background: #19171c !important;
}

.side-nav .tw-c-text-alt {
	color: hsla(0, 0%, 100%, 0.8) !important;
}

.side-nav .tw-c-text-alt-2 {
	color: #6e6779 !important;
}

.side-nav-card__title > .tw-semibold {
	font-weight: 400 !important;
}

.side-nav-header {
	color: white !important;
}

.side-nav-card__link:hover {
	background: #2f2f37 !important;
}

.side-nav-header > .tw-upcase {
	font-weight: 400 !important;
}

.side-nav .tw-border-t {
	border-top: 1px solid hsla(0, 0%, 100%, 0.15) !important;
}

.tw-input::-webkit-input-placeholder {
	color: rgba(0, 0, 0, .7) !important;
}

.tw-input:-ms-input-placeholder {
	color: rgba(0, 0, 0, .7) !important;
}

.tw-input::-ms-input-placeholder {
	color: rgba(0, 0, 0, .7) !important;
}

.tw-input::placeholder {
	color: rgba(0, 0, 0, .7) !important;
}

h1 {
  font-size: 4rem !important;
}

h2 {
  font-size: 2.8rem !important;
}

h3 {
  font-size: 2.4rem !important;
}

h4 {
  font-size: 1.6rem !important;
}

h5 {
  font-size: 1.4rem !important;
}

h6,
p {
  font-size: 1.2rem !important;
}`);
