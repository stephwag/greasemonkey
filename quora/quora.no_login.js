// ==UserScript==
// @name         Quora No Sign-in
// @namespace    http://stephwag.com/
// @version      0.1
// @description  Browse Quora question/answers without login/registration.
// @author       Stephanie Wagner
// @match        https://*.quora.com/*
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==
                      
$(document).ready(function () {
  $(".modal_signup_dialog").remove(); //a form
  $(".modal_signup_background").remove();
  $("body").removeClass("login_no_scroll");
});