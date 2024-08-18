"use strict";

document.getElementById('btnDown').addEventListener('click', function() {
    document.getElementById('targetElement').scrollIntoView({ behavior: 'smooth' });
});


