// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CountDown from "../components/functions/CountDown";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Properties() {
  // Active on select a tab
  function active(e) {
    let act = document.querySelectorAll(".active");
    act[0].classList.remove("active");
    e.target.classList.add("active");
  }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles
          className="title mx-auto"
          title="Discover more properties"
        />
        {/* Start tabs */}
        <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                All
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className="ms-0 bg-black-100 border-0 active"
                onClick={active}
              >
                Cottage
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                Chalet
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                Manor
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                Penthouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                Farmhouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                Duplex
              </Button>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileHover={{ boxShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="rounded overflow-hidden"
              >
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2 properties-card">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                      />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">Cottage «Forrest 1»</h5>
                    <p className="gray-90">@Red Oak Realty</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={9} m={45} s={8} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      <div>
                        <h6 className="text-white">29.71 ETH</h6>
                        <span className="gray-90">Current Bid</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;