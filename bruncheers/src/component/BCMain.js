import main from "../image/main.jpg";

function BCMain() {
  return (
    <>
      {/* 홈페이지 메인 이미지 시작 */}
      <div id="myCarousel" class="carousel slide mb-6 " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active text-center ">
            <img
              src="./image/main.jpg"
              class="d-block mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
              width="1500"
              height="700"
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p class="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./image/main.jpg"
              class="d-block mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
              width="1500"
              height="700"
            />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./image/main.jpg"
              class="d-block mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
              width="1500"
              height="700"
            />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* 홈페이지 메인 이미지 끝 */}
      {/* 동그라미 이미지 */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <div
          className="col-12 text-style"
          style={{ padding: "70px 0 0 0", textAlign: "center" }}
        >
          <h2 className="text-style">나에게 맞는 식사</h2>
          <p className="text-style">
            자유롭게 선택하세요. 원하는 때, 원하는 만큼 챙겨드릴게요
          </p>
        </div>
      </div>
      <div class="container marketing mt-3">
        {/* <!-- Three columns of text below the carousel --> */}
        <div class="row">
          <div class="col-lg-4 text-center mt-3">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            >
              <g class="image-container">
                <image
                  href="./image/salad.png"
                  x="0"
                  y="0"
                  height="140"
                  width="140"
                />
              </g>
            </svg>
            <h2 class="fw-normal mt-3">1일 1식</h2>
            <p>
              원하는 때에 하루 한 끼<br />
              건강함을 담은 식단을 받아보세요.{" "}
            </p>
          </div>
          <div class="col-lg-4 text-center mt-3">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            >
              <g class="image-container">
                <image
                  href="./image/lunchBox.jpg"
                  x="0"
                  y="0"
                  height="140"
                  width="140"
                />
              </g>
            </svg>
            <h2 class="fw-normal mt-3">1일 2식</h2>
            <p>
              하루 두 번 <br />
              든든함을 담아 배송해드려요.
            </p>
          </div>
          <div class="col-lg-4 text-center mt-3">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            >
              <g class="image-container">
                <image
                  href="./image/sandwich.jpg"
                  x="0"
                  y="0"
                  height="140"
                  width="140"
                />
              </g>
            </svg>
            <h2 class="fw-normal mt-3">1일 3식</h2>
            <p>
              바쁜 하루를 걱정없이
              <br />
              브랜치얼스와 함께.
            </p>
          </div>
        </div>
        {/* <!-- /.row --> */}
        {/* 동그라미 이미지 끝 */}

        {/* 카테고리 이미지 시작 */}

        <hr class="featurette-divider mt-5" />

        <div class="row featurette mt-5">
          <div class="col-md-7">
            <h1 class="featurette-heading fw-normal lh-1">
              {" "}
              <span class="text-body-secondary">도시락</span>
            </h1>
            <p class="lead" style={{ marginTop: "20px" }}>
              총 22종의 도시락을 다양하게 만나보세요!{" "}
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              role="img"
            >
              <image href="./image/lunchBox.jpg" width="500" height="500" />
              <text
                class="center-text"
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="24"
              >
                도시락 보러가기
              </text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider mt-5" />

        <div class="row featurette mt-5">
          <div class="col-md-7">
            <h1 class="featurette-heading fw-normal lh-1">
              {" "}
              <span class="text-body-secondary">샐러드</span>
            </h1>
            <p class="lead" style={{ marginTop: "20px" }}>
              총 30종의 샐러드를 다양하게 만나보세요!{" "}
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              role="img"
            >
              <image href="./image/salad.png" width="500" height="500" />
              <text
                class="center-text"
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="24"
              >
                샐러드 보러가기
              </text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider mt-5" />

        <div class="row featurette mt-5">
          <div class="col-md-7">
            <h1 class="featurette-heading fw-normal lh-1">
              {" "}
              <span class="text-body-secondary">샌드위치</span>
            </h1>
            <p class="lead" style={{ marginTop: "20px" }}>
              총 15종의 샌드위치를 다양하게 만나보세요!{" "}
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              role="img"
            >
              <image href="./image/sandwich.jpg" width="500" height="500" />
              <text
                class="center-text"
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="24"
              >
                샌드위치 보러가기
              </text>
            </svg>
          </div>
        </div>
        <hr class="featurette-divider mt-5" />
      </div>
      {/* 카테고리 이미지 끝 */}
    </>
  );
}
export { BCMain };
