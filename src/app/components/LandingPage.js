import React from 'react';
import Image from 'next/image';

import img from '../images/mobile.png';

import footer from '../images/footer.png';

const LandingPage = () => {
  return (
    <>
      <div className="first flex flex-col sm:flex-row pt-6 px-4 sm:px-0"> 
        <div className="left w-full sm:w-1/2 ml-0 sm:ml-[60px] md:ml-[60px] mt-5 sm:mt-[0px]">
          <div className="head font-bold text-3xl sm:text-5xl pt-10 mb-5 mt-[20px]">
            Make the best <br /> Financial Decisions
          </div>
          <div className="subhead">
            Cum Et Convallis Risus Placerat Aliquam, Nuna. Scelerisque Aliquot Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
          </div>
          <div className="buttons flex mt-10">
            <button className="getStarted-btn h-[50px] w-full mr-3 sm:w-[150px] bg-black text-white mb-3 sm:mb-0 sm:mr-3" style={{ borderRadius: "5px" }}>
              Get Started
            </button>
            <button className="watchVideos-btn h-[50px] w-full ml-3 sm:w-[150px] bg-black text-white  sm:mt-0 sm:ml-3" style={{ borderRadius: "5px" }}>
              Watch Videos
            </button>
          </div>
        </div>

        <div className="right relative flex flex-col sm:flex-row font-bold w-full sm:w-1/2 h-[700px] mt-10 sm:mt-0 sm:justify-center items-center justify-center"> {/* Adjust height as needed */}
          <div className="absolute z-20 top-0 left-0 sm:left-0">
            <Image src={img} alt="img1" height={350} width={350} />
          </div>

          <div className="absolute z-10 top-[70px] left-0 sm:top-0 sm:left-[40px]"> {/* Adjust top and left values as needed */}
            <Image src={img} alt="img2" height={350} width={350} />
          </div>

          <div className="absolute z-5 top-[140px] left-0 sm:top-0 sm:left-[80px]"> {/* Adjust top and left values as needed */}
            <Image src={img} alt="img3" height={350} width={350} />
          </div>
        </div>
      </div>


      <div className="second flex flex-col sm:flex-row  sm:px-0"> 
        <div className="left relative flex flex-col sm:flex-row justify-center  font-bold w-full sm:w-4/10 h-[700px] mt-1 sm:mt-0 sm:justify-center items-center justify-center"> {/* Adjust height as needed */}
          <div className=" z-20 top-0 left-0 sm:left-0 justify-center " style={{ transform: 'rotate(15deg)' }}>
            <Image src={img} alt="img1" height={350} width={350} />
          </div>
        </div>

        
        <div className="right w-full sm:w-6/10 ml-0 sm:ml-[60px] md:ml-[60px] mt-5 sm:mt-[0px] p-4">
            <div className="features text-orange-500 text-xl mt-8">FEATURES</div>
            <div className="head font-bold text-3xl sm:text-5xl mb-5 mt-[2px]">
              Uifry Premium
            </div>

            <div className="subhead">
              <h2 className='font-bold text-xl mb-2 mt-10 text-orange-500'>Budgetting Intervals</h2>
              Cum Et Convallis Risus Placerat Aliquam, Nuna. Scelerisque Aliquot Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
            </div>

            <div className="subhead">
              <h2 className='font-bold text-xl mb-2 mt-3 text-orange-500'>Budgetting Intervals</h2>
              Cum Et Convallis Risus Placerat Aliquam, Nuna. Scelerisque Aliquot Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
            </div>

            <div className="subhead">
              <h2 className='font-bold text-xl mb-2 mt-3 text-orange-500'>Budgetting Intervals</h2>
              Cum Et Convallis Risus Placerat Aliquam, Nuna. Scelerisque Aliquot Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
            </div>            
          
        </div>
      </div>      

      
      <div className='third footer-image flex justify-center m-10 p-10'>
        <Image src={footer} alt="img" height={3000} width={6000}/>
      </div>

      <div className='fourth footer flex flex-wrap justify-between px-4 sm:px-8 lg:px-20 py-10 bg-gray-100'>
        <div className="uifry w-full sm:w-1/2 lg:w-1/5 mb-8 sm:mb-0">
          <div className="head font-bold text-xl mb-4">Uifry</div>
          <div className="one flex items-center font-bold mb-2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8AAACIiIiDg4OUlJR5eXn8/PwEBAT5+fmbm5vw8PD19fWkpKTFxcVgYGAsLCza2tri4uIxMTGqqqpZWVnMzMxOTk5ra2vT09NycnLq6uonJyc9PT2ysrI2Nja/v79EREQREREbGxv5UK1zAAAE7klEQVR4nO2a6ZayMAyGi2jREcF93+//Ir+WJU2RpaXFzx95z5n5MQ7wmCZpUsIYiUQikUgkEolEIpFIJBKJROoW/98A9Zou4tHgihdTG6RZGnxF6cwMSyzdcv8dJKn90sxbVusgiL6DJB6zXpmY6m8r/vlbUOI52z8DqJnONAge3FQ+adbNNF9/a+1KvvW8E2qBr0hH4SAaXfFTFiarhzSxySTmirXF6F6/sW7dwx/j3hN85RljuwvEF0qNQtZcUzZNKuFjAhVVqI6eqQ7V8Da21CEM4Nqbzx16le9gkbj34WC5fBN+yg0lfzYeme5goP08tIVi7FZcLagm3anETIvC/OJnxNjEHkpSRfLyKAtCH3q8c4+VTLwfFFuuwSWvKw+ONSscIir8tBcUWz4hSJ7uQThTa3djfaFE1pQ5JVtEcaOHG9J8At5w2eV/6mcpQRUqd3cIQnGj02fm6wclbVxuhtI5+++E5yuk8ScETU8oSXUrk10QJH2ZVlvYKPZn+GtfKIm1TCEI91kQWsfhMoBUMEEX94eSVCoIL4aFvqbHBb5VyNHlDlDiLn8JUL3sg/BRrr4snTj3AyVUblNyCWyDEJWNN/0TNyiu1VkjGySuLowelZV3tJQMwldx6yA4me+E/ARMIj1VvNEJKr/X4g0VFgrrZhz563wApuuKVWPE0VKZlneVAI8GQcjZWYXttuZ7eIASz0gg37x2XVAiyo53YErmNf/vw1JCZWow2gmPb2AKa6tET1DZx1HnvbjMRo+XYqpfbF9QLH5BUTSZN7aEAmoDSFl6GhCKQ18vyZKm0l3Axqq527CGhtabpcSOr0IqXdZYQNRObF6mpywkmuQRSgZ6VARhWvdEVdEJXZqZfEKJ/flarGBDEJ73sHb7tuTv01JspA69qmcm0nnO6Mx023Yfn5ZSFUO2jCfs7qJg3l0CpKTFVB6hEFO+grhT5ZJJOzJtKaG9QWE7lYcNl2yvzePwFlTVbCtvUIpp8gR3vh/LijJWBuz2K1/JcwSPCnHgy05V9q5jOKl571RKb7KVJyhkJ+HSZacqIWKZRk9QcUW70mottvIChfwp+5yzjdpMQl62F4LrmVVPiKrWVl6gFFNY9srIrw8JHKrsizMaRZUMtSErf8qOP7JagB21F1652Q6QuZCtajZvD1A1dpISnWoU4BSvnfshW31SuUPhuNOUuVKkoPQOrI3KGUoxfZy9yE5V5aVYli5Im2YqV6gRGKLO28aqoag0wcL1VIdczVeOUC12yvSI8uO+2oqu0VZuUFrc1ZS2nC2y0iCtb7yabOUEpeKu+SxvtV3f6xpOVuTYkgrfwAVK2enUduW5pZdXttoiKgco5E/9j9Jrd+f+ULqdWrHaPkS2coZCe7DVsdSnlK1gd+4LheLO9TUIikHuAlWxkyPWh1/1g9JrOmchW037Qvnzp1IVW/WB0v3Jyytb3a/sofzbSc/tIgZtoULsTz4HE3C+soU6oTzuEYlpfmX7tv0NVZvnyRKO3tW9zKH0oaDQ/9hgrD3AYlgCmIaYwNGprKFkjzDAgGVsCaWiI3KqVdq1wa1G96jSAkG9hhnpEhrjFrZ7qEuNvw08LVg+xWT8rTooOKzkgwwGBX9zpPIXh0+/P6ZrOPP3cwPNBdbvjX5/UT86j08ikUgkEolEIpFIJBKJRCL9mP4B/Y44OlmfbdsAAAAASUVORK5CYII=" alt="Email Icon" height="25px" width="25px"/>
            <a className='ml-3' href="mailto:uifry23@gmail.com">UiFry</a>
          </div>
          <div className="two flex items-center font-bold">
            <img src="data:image/png;base64,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" alt="Phone Icon" height="25px" width="25px"/>
            <a className='ml-3' href="tel:+91 93859 67610">+91 93859 67610</a>
          </div>
        </div>

        <div className="about w-full sm:w-1/2 lg:w-1/5 mb-8 sm:mb-0">
          <div className="head font-bold text-xl mb-4">About</div>
          <div className="list leading-loose">
            <p className='mb-2'><a href="#">Company Overview</a></p>
            <p className='mb-2'><a href="#">Our Team</a></p>
            <p className='mb-2'><a href="#">Careers</a></p>
            <p><a href="#">Blog</a></p>
          </div>
        </div>

        <div className="policies w-full sm:w-1/2 lg:w-1/5 mb-8 sm:mb-0">
          <div className="head font-bold text-xl mb-4">Policies</div>
          <div className="list leading-loose">
            <p className='mb-2'><a href="#">Privacy Policy</a></p>
            <p className='mb-2'><a href="#">Terms & Conditions</a></p>
            <p className='mb-2'><a href="#">Return Policy</a></p>
            <p><a href="#">Shipping Policy</a></p>
          </div>
        </div>

        <div className="category w-full sm:w-1/2 lg:w-1/5 mb-8 sm:mb-0">
          <div className="head font-bold text-xl mb-4">Category</div>
          <div className="list leading-loose">
            <p className='mb-2'><a href="#">Graphics</a></p>
            <p className='mb-2'><a href="#">UI/UX</a></p>
            <p className='mb-2'><a href="#">Web Design</a></p>
            <p><a href="#">Development</a></p>
          </div>
        </div>

        <div className="contact w-full sm:w-1/2 lg:w-1/5">
          <div className="head font-bold text-xl mb-4">Contact</div>
          <div className="list leading-loose">
            <p className='mb-2'><a href="#">Contact Us</a></p>
            <p className='mb-2'><a href="#">FAQs</a></p>
            <p className='mb-2'><a href="#">Support</a></p>
            <p><a href="#">Feedback</a></p>
          </div>
        </div>
      </div>

      
      <div className='five'></div>
      <div className='six'></div>
      <div className='seven'></div>
      <div className='eight'></div>
      <div className='nine'></div>
    </>
  );
};

export default LandingPage;
