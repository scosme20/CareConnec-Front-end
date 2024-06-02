import React from 'react';

function Overview() {
  return (
    <div>
      <h1>Overview Page</h1>
    </div>
  );
};

const Overview = () => {
  const carouselData = [
    { id: 1, imageUrl: image1, title: 'Slide 1' },
    { id: 2, imageUrl: image2, title: 'Slide 2' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    style: { marginBottom: '40px' }
  };

  return (
    <OverviewContainer>
      <CarouselContainer>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2>Overview</h2>
          <Slider {...settings}>
            {carouselData.map((slide) => (
              <div key={slide.id}>
                <img src={slide.imageUrl} alt={slide.title} style={{ width: '80%', height: 'auto', borderRadius: '8px', margin: '0 auto' }} />
                <h3 style={{ marginTop: '10px', fontSize: '18px', color: '#333' }}>{slide.title}</h3>
              </div>
            ))}
          </Slider>
        </motion.div>
      </CarouselContainer>
      
      <FeaturesSection>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2>Our Features</h2>
          <p>Discover the amazing features we offer...</p>
          <ul>
            <li>Feature 1: Detailed explanation</li>
            <li>Feature 2: Another detailed explanation</li>
            <li>Feature 3: More details</li>
          </ul>
        </motion.div>
      </FeaturesSection>
      
      <TestimonialsSection>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
          <h2>Testimonials</h2>
          <p>What our users say about us...</p>
          <blockquote>"This service is amazing!" - Happy Customer</blockquote>
          <blockquote>"Highly recommend to everyone." - Satisfied User</blockquote>
        </motion.div>
      </TestimonialsSection>
      
      <ContactSection>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us.</p>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Message:</label>
              <textarea name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </motion.div>
      </ContactSection>
    </OverviewContainer>
  );
};

export default Overview;


