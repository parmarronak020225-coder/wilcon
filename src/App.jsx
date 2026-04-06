import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Services Section */}
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
        <div className="container">
          <div className="row no-gutters d-flex">

            <div className="col-lg-4 d-flex align-self-stretch">
              <div className="media block-6 services d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-engineer-1"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading mb-3">Quality Construction</h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex align-self-stretch">
              <div className="media block-6 services d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-worker-1"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading mb-3">Professional Liability</h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex align-self-stretch">
              <div className="media block-6 services d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-engineer"></span>
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading mb-3">Dedicated To Our Clients</h3>
                  <p>A small river named Duden flows by their place.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="ftco-section" id="about-section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="about-wrap img w-100">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-crane"></span>
                </div>
              </div>
            </div>

            <div className="col-md-6 py-5 pl-md-5">
              <h2>Wilcon A Construction Company</h2>
              <p>
                We're in this business since 1975 and provide the best industrial services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Example */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="blog-entry">
            <a
              href="#"
              className="block-20"
              style={{ backgroundImage: "url('images/image_1.jpg')" }}
            ></a>
            <div className="text d-block">
              <h3>Best for any industrial & business solution</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ftco-footer">
        <div className="container-fluid bg-primary">
          <div className="container">
            <p className="mb-0 text-white text-center py-3">
              © {currentYear} All rights reserved | Template by Colorlib
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <h3>Request Quote</h3>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="First Name"
            />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
            ></textarea>

            <button className="btn btn-primary">Request A Quote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;