// Oaksis Studio — site scripts

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileMenu = document.querySelector('[data-nav-mobile]');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('is-open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  var form = document.querySelector('[data-project-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.querySelector('[data-form-status]');
      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            if (status) {
              status.hidden = false;
              status.textContent = "Thanks — that's in. We'll get back to you within 2 business days.";
            }
          } else {
            if (status) {
              status.hidden = false;
              status.textContent = 'Something went wrong — please email us directly instead.';
            }
          }
        })
        .catch(function () {
          if (status) {
            status.hidden = false;
            status.textContent = 'Something went wrong — please email us directly instead.';
          }
        });
    });
  }
});
