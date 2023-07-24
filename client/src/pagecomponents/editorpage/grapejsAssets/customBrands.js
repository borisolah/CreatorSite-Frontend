import ggl from "../../../images/google.svg";
import ins from "../../../images/instagram.svg";
import fcb from "../../../images/facebook.svg";
import twt from "../../../images/twitter.svg";
import mcrs from "../../../images/microsoft.svg";
import app from "../../../images/apple.svg";
import lnk from "../../../images/linkedin.svg";

export const customBrands = {
  id: "section-brands",
  label: "Brands",
  category: "Sections",
  attributes: {
    class: "fa fa-ellipsis-h",
  },
  content: `<section id="brands" class="">
  <div class="container my-5">
  <div class="row justify-content-center text-center">
        <div class="col-lg-1 col-md-3">
          <img src="${ggl}" alt="Google" style="width: 70%;">
          <p class="text-muted mb-2">Google</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${fcb}" alt="Facebook" style="width: 70%;">
          <p class="text-muted mb-2">Facebook</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${lnk}" alt="LinkedIn" style="width: 70%;">
          <p class="text-muted mb-2">LinkedIn</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${ins}" alt="Instagram" style="width: 70%;">
          <p class="text-muted mb-2">Instagram</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${twt}" alt="Twitter" style="width: 70%;">
          <p class="text-muted mb-2">Twitter</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${app}" alt="Apple" style="width: 70%;">
          <p class="text-muted mb-2">Apple</p>
        </div>
        <div class="col-lg-1 col-md-3">
          <img src="${mcrs}" alt="Microsoft" style="width: 70%;">
          <p class="text-muted mb-2">Microsoft</p>
        </div>
      </div>
    </div>
  </section><style>#brands img{
    opacity:0.3;
  }</style>`,
};
