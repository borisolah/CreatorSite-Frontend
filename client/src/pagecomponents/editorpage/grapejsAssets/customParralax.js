export const customParralax = {
  id: "section-parralax",
  label: "Parralax",
  category: "Sections",
  attributes: {
    class: "fa fa-copy",
  },
  content: `<section id="parallax" class="parallax">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="parallax-content p-4 shadow bg-white rounded text-center">
              
           
            <h2>Title text</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus maiores enim dolore nesciunt!</p>
               </div>
          </div>
        </div>
      </div>
    </section><style>
    .parallax-content{
      height:200px;
     opacity:0.8;
     margin-top:150px;
   }
   
   .parallax {
     /* The image used */
     background-image: url("https://picsum.photos/1500");
   
     /* Set a specific height */
     min-height: 500px;
   
     /* Create the parallax scrolling effect */
     background-attachment: fixed;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
   }
    </style>`,
};
