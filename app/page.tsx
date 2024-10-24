
export default function Home() {
  
  return (
    <>
      {/* for navbar */}
      <header id="top">
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"> </div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">PAKISTAN</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option value="">All</option>
            </select>
            <input placeholder="Search Amazon" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-singin border">
            <p>
              <span>Hello, SignIn</span>
            </p>
            <p className="nav-second">Account & Lists</p>
          </div>

          <div className="nav-return border">
            <p>
              <span>Return</span>
            </p>
            <p className="nav-second">& Orders</p>
          </div>

          <div className="nav-cart border">
            <i className="fa-solid fa-cart-plus"></i>
            Cart
          </div>
        </div>
        <div className="panel">
          <div className="panel-all border">
            <i className="fa-solid fa-bars"></i>
            All
          </div>
          <div className="panel-ops">
            <p className="border">Today's Deals</p>
            <p className="border">Customer Service</p>
            <p className="border">Registry</p>
            <p className="border">Gift Cards</p>
            <p className="border">Sell</p>
          </div>
          <div className="panel-deals border">Shop deals in Electronics</div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-mesg">
          <p>
            You on amazon.com. You can also shop on Amazon Pakistan for millions
            products with fast delivery.
            <a href="">Click here to go to amazon.in</a>
          </p>
        </div>
      </div>
      {/* for  hero section */}
      <div className="shop-section">
        <div className=" box">
          <div className="box-content">
            <h2>Gaming accessories</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box1.webp")' }}
            ></div>
            <a href="">See more</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Shop for your home essentials</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box2.webp")' }}
            ></div>
            <a href="">Discover more in Home</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>New home arrivals under $50</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box3.jpg")' }}
            ></div>
            <a href="">Shop the latest from Home</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Shop deal in Fashion</h2>
            <div
              className="box-img4"
              style={{ backgroundImage: 'url("/image/box4.jpg")' }}
            ></div>
            <a href="">See all deals</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Wireless Tech</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box5.jpg")' }}
            ></div>
            <a href="">Discover more</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Level up your beauty routine</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box6.jpg")' }}
            ></div>
            <a href="">See more</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Most-loved watches</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box7.jpg")' }}
            ></div>
            <a href="">Discover more</a>
          </div>
        </div>
        <div className=" box">
          <div className="box-content">
            <h2>Toys for all ages</h2>
            <div
              className="box-img"
              style={{ backgroundImage: 'url("/image/box8.jpg")' }}
            ></div>
            <a href="">See all</a>
          </div>
        </div>
      </div>
      {/* for footer */}
      <footer>
        <div className="foot-panel1">
         <a href="#top">Back to top</a>
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a href="">Careers</a>
            <a href="">Blog</a>
            <a href="">About Amazon</a>
            <a href="">Investor Relations</a>
            <a href="">Amazon Devices</a>
            <a href="">Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a href="">Sell products on Amazon</a>
            <a href="">Sell on Amazon Business</a>
            <a href="">Sell apps on Amazon</a>
            <a href="">Advertise Your Products</a>
            <a href="">Self-Publish with Us</a>
            <a href="">Host an Amazon Hub</a>
            <a href="">›See More Make Money with Us</a>
          </ul>
          <ul>
            <p>Amazon Payment Products</p>
          <a href="">Amazon Business Card</a>
          <a href="">Shop with Points</a>
          <a href="">Reload Your Balance</a>
          <a href="">Amazon Currency Converter
          </a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a href="">Amazon and COVID-19</a>
            <a href="">Your Account</a>
            <a href="">Your Orders</a>
            <a href="">Shipping Rates & Policies</a>
            <a href="">Returns & Replacements</a>
            <a href="">Manage Your Content and Devices</a>
            <a href="">Help</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo1"></div>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a href="">Conditions of Use</a>
            <a href="">Privacy Notice</a>
            <a href="">Consumer Health Data Privacy Disclosure</a>
          </div>
          <div className="copyright">
          © 1996-2024, Amazon.com,Clone made by MUHAMMAD QASIM
          </div>
        </div>
      </footer>
    </>
  );
}
