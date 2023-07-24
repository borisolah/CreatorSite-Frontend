export const customContacts = {
  id: "section-contact",
  label: "Contact",
  category: "Sections",
  attributes: {
    class: "fa fa-envelope",
  },
  content: `<section id="contact" class="bg-white">
<div class="container shadow p-5">
  <div class="row">
    <div class="col-lg-6">
      <div class="address p-4 rounded shadow bg-primary text-white d-flex flex-column align-items-center justify-content-center">
           <h2 class="text-uppercase my-4">We love to hear from you</h2>
        <div class="mb-4 border border-1 border-top border-white" style="width:100px;"></div>
         <p>HUTCHINSON</p>
          <p>	4663 Sunny Day Drive</p>
        <p>714-778-6685</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="contact-form p-4">
        <form id="contactForm" action="#" novalidate>
          <div class="validate-message"></div>
          <div class="form-group is-invalid my-3">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" name="name" required>
<div class="invalid-feedback">Name is required</div>
          </div>
          <div class="form-group my-3">
             <label for="email">Email</label>
            <input type="email" id="email" class="form-control" name="email" required><div class="invalid-feedback">Email is required</div></div>
          <div class="form-group my-3">
            <label for="phone">Phone <small class="text-muted">- optional</small></label>
            <input type="text" id="phone" class="form-control" name="phone"></div>
          <div class="form-group my-3">
            <label for="message">Message</label>
            <textarea name="message" id="message" class="form-control" required></textarea><div class="invalid-feedback">Message is required</div></div>
          <div class="form-group my-3 d-flex justify-content-end">
            <button class="btn btn-primary btn-lg">
              <span class="fa fa-envelope me-2"></span>Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section><style>.address{
  height:500px;
}

.contact-form .form-group .form-control{
  border:0;
  padding:4px 0;
  border-bottom:1px solid #ddd;
  border-radius:0;
}

.contact-form .form-group .form-control:focus{
  outline:none;
  box-shadow:none;
  border-bottom:1px solid #0d6efd;
}

.contact-form .form-group textarea{
  min-height:120px;
}</style>`,
};
