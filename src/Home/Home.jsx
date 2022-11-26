import React from 'react'
 
import HomeStyle from './Home.module.css'

import SEOFriendlyImg from '../image/macbook-preview-flexible.png'
import PortfolioSectionImg from '../image/flexible-portfolio.png'
import LimitlessImg from '../image/photo-1440557653082-e8e186733eeb-1.jpg'

import Project15 from '../image/photo-1443890484047-5eaa67d1d630-1 - Copy.jpg'
import Project14 from '../image/photo-1422568374078-27d3842ba676-1.jpg'
import Project13 from '../image/photo-1447834353189-91c48abf20e1-1-1 - Copy.jpg'
import Project12 from '../image/photo-1447877085163-3cce903855cd-1 - Copy.jpg'
import Project11 from '../image/photo-1447958374760-1ce70cf11ee3-1-1 - Copy.jpg'
import Project10 from '../image/photo-1430329429612-babb42f88673-1-1.jpg'
import Project9 from '../image/photo-1449057528837-7ca097b3520c-1-1 - Copy.jpg'
import Project8 from '../image/photo-1449168013943-3a15804bb41c-1-1 - Copy.jpg'
import Project7 from '../image/photo-1451186859696-371d9477be93-1-1 - Copy.jpg'
import Project6 from '../image/photo-1448518184296-a22facb4446f-1-1 - Copy.jpg'

import JohnDoeImg from '../image/mike-muller-150x150.jpg'
import AigarsSilkalnsImg from '../image/Aigars-Silkalns-150x150.jpg'



export default function Home() {
  return (
    <>
      <header className='vh-100 d-flex align-items-center justify-content-center text-center'>
        <div>
          <h1 className='mt-5 '>We Change Everything WordPress</h1>
          <span>This is the only WordPress theme you will ever want to use.</span>
          <div className='mt-3 '>
          <a className={`btn-1 btn-lg px-5 py-4 mx-1 rounded-0 text-decoration-none fw-bolder ${HomeStyle.btnFilled}`} href="#">READ MORE</a> 
          <a id='btn-Download' className=  'btn btn-1 text-light border border-3 px-4 py-0 mx-1 fw-bolder rounded-0 text-decoration-none' href="#">DOWNLOAD NOW </a>
          </div>
        
      </header>

      {/* =========================== SEO Friendly  ======================== */}

      <section className='pt-3'>
        <div className='container w-100 py-5 my-5 '>
          <div className='row '>
            <div className='col-md-6 offset-1'>
              <img className='w-100 mt-5' src={SEOFriendlyImg} alt="" />
            </div>
            <div className='col-md-4 offset-1 ps-5 d-flex align-items-center'>
              <div>
                <h3 className=''>SEO Friendly</h3>
                <p className='text-muted my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
                <a className={`btn-1 btn-lg px-5 py-3 mx-1 rounded-0 text-decoration-none fw-bolder ${HomeStyle.btnFilled}`} href="#">READ MORE</a> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============  Portfolio Section ============== */}

      <section id='SectionPortfolio' className='pt-5 mb-0 '>
        <div className='container w-100 py-5 my-1 '>
          <div className='row '>
            <div className='col-md-4 offset-1 ps-5 m-1  d-flex align-items-center'>
              <div>
                <h1 className=' fs-2'>Portfolio Section</h1>
                <p className='text-muted my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.</p>
                <a className={`btn-1 btn-lg px-5 py-3 mx-1 rounded-0 text-decoration-none fw-bolder ${HomeStyle.btnFilled}`} href="#">SEE IT IN ACTION</a> 
              </div>
            </div>

            <div className='col-md-6 offset-1 '>
              <img className='w-100 mt-5' src={PortfolioSectionImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================== Small Parallax Section  ================= */}

      <section id='Parallax Section' className=' d-flex justify-content-center align-items-center '>
        <div className='w-75 text-center px-5 bg-transparent'>
          <div className='px-3'>
          <h1>Small Parallax Section</h1>
          <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.</p>
          <a className={`btn-1 btn-lg px-5 py-3 mx-1 rounded-0 text-decoration-none fw-bolder ${HomeStyle.btnFilled}`} href="#">MORE INFO</a> 
          </div>
        </div>
      </section>

      {/* ==================== Limitless Options ===================== */}

      <section id='OptionsLimitless' className='text-center  pt-5'>
        <div className='w-75 mx-3 d-flex text-cenr mx-auto justify-content-center'>
          <div className=' mx-5 px-5'>
            <h2 className='mt-5'>Limitless Options</h2>
            <p className='text-muted'>Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante</p>
            <a className={`btn-1 btn-lg px-5 py-3 mx-1 rounded-0 text-decoration-none fw-bolder ${HomeStyle.btnFilled}`} href="#">Download Now</a> 
          </div>
        </div>
        <div className='w-100 px-3'>
          <img className='w- mt-4' src={LimitlessImg} alt="" />
        </div>
      </section>

      {/* ======================  Our Latest Projects ========================= */}

      <section className='bg-black text-center text-white pt-5'>
        <div className='my-'>
          <h2 className='py-4'>Our Latest Projects</h2>
          <p>Here is our latest projects. You'll love them!</p>
        </div>
        <div className='container-fluid'>
          <div className='row g-0 px-0'>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project15} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project14} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project13} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project12} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project11} alt="" />
                </a>
              </div>
            </div><div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project10} alt="" />
                </a>
              </div>
            </div><div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project9} alt="" />
                </a>
              </div>
            </div><div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project8} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project7} alt="" />
                </a>
              </div>
            </div>
            <div className='col-md-3 ms-0'>
              <div>
                <a href="">
                  <img className='w-100' src={Project6} alt="" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================   Our Customers Say ===================== */}

      <section id='Our Customers' className=' py-5 text-white'>
        <div className='text-center '>
          <h2>What Our Customers Say</h2>

          <div id="carouselExampleDark" className="carousel carousel-dark slide  w-75 mx-auto " data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className='d-flex flex-column '>
                <div class="carousel-caption mb-5 pt-5 pb-0  d-none d-md-block text-white">
                  <p>Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.</p>
                </div>

                <div id='JohnDoeImg' className=' bg-danger w-75 mx-auto mt-5 '>
                  <img  src={JohnDoeImg} className="d-bloc  rounded-circle mb-4 " alt="..."/>
                  <h5>John Doe</h5>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="2000">
              <div className="carousel-caption mb-5 pt-5 pb-0 d-none d-md-block text-white">
                <p>Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.</p>
              </div>
              <div  id='JohnDoeImg' className=' mt-5 mx-auto'>
                <img src={AigarsSilkalnsImg} className="rounded-circle mb-4" alt="..."/>
                <h5>Aigars Silkalns</h5>
              </div>

            </div>
          
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
