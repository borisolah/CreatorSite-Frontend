export const customGallery = {
  id: "section-gallery",
  label: "Gallery",
  category: "Sections",
  attributes: {
    class: "fa fa-th",
  },
  content: `<section id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="display-4 my-4 text-uppercase">Lightbox images & videos</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/400" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/400" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/401" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/401" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://biati-digital.github.io/glightbox/demo/pexels-video-1550080.mp4" class="glightbox" data-title="My title" data-description="description here" data-type="video" data-effect="fade"><img src="https://picsum.photos/402" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/403" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/403" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/399" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/399" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://www.youtube-nocookie.com/embed/pF37tPGkWio" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="video" data-effect="fade"><img src="https://picsum.photos/398" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/397" class="glightbox" data-title="My title" data-description="description here" data-type="image" data-effect="fade"><img src="https://picsum.photos/397" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/396" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/396" alt="" class="img-fluid"></a>
          </div>
        </div>
      </div>
    </div>
  </section><style>.image-wrap{
    height:250px;
  }
  .image-wrap img{
    transition:all ease 0.4s;
    width:100%;
    height:100%;
    object-fit:cover;
    cursor:zoom-in;
  }
  
  .image-wrap img:hover{
      transform:scale(0.99);
  }</style>`,
};
