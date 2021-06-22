import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <hr />
      <a
        className='footer__link'
        href='https://github.com/tvu20/pokesearch'
        // target='_blank'
        title='PokeSearch on Github'
        // rel='noreferrer'
        // rel='noreferrer'
      >
        <span
          className='iconify'
          data-icon='ion-social-github'
          data-inline='false'
        ></span>
      </a>
    </footer>
  );
};

export default Footer;
