import { Link } from 'react-router-dom';
import facebook from '../../../assets/images/footer/facebook.svg';
import linkedin from '../../../assets/images/footer/linkedin.svg';
import twitter from '../../../assets/images/footer/twitter.svg';
import './footer.scss';

const Footer = () => {
  return (
    <div className="bg-darkblue text-white py-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3">
            <h3 style={{ fontSize: 24, fontWeight: 800 }}>Consultondoor</h3>
            <p className="py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>@lorem.lk digital agency</p>
          </div>
          <div className="col-md-3">
            <div className="mb-4" style={{ fontWeight: 500 }}>
              About us
            </div>
            <div className="">
              <Link to="" className="text-light text-decoration-none">
                <div>Lorem.Ik</div>
              </Link>
              <Link to="" className="text-light text-decoration-none">
                <div>divortfolio</div>
              </Link>
              <Link to="" className="text-light text-decoration-none">
                <div>Careers</div>
              </Link>
              <Link to="" className="text-light text-decoration-none">
                <div>Contact us</div>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-4" style={{ fontWeight: 500 }}>
              Contact us
            </div>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+908 89097 890</p>
          </div>
          <div className="col-md-3 mt-4">
            <div
              className="d-flex justify-flex-start gap-4"
              style={{ width: 'fit-content', margin: '0 auto' }}
            >
              <div className="">
                <img src={twitter} alt="" width={32} />
              </div>
              <div className="">
                <img src={facebook} alt="" width={32} />
              </div>
              <div className="">
                <img src={linkedin} alt="" width={32} />
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            fontWeight: 300,
            textAlign: 'center',
            fontSize: 12,
            marginTop: 60,
          }}
        >
          © 2022. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
