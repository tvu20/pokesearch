import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a
        className='footer__link'
        href='https://github.com/palampinen/replayify'
        target='_blank'
        title='Replayify on Github'
        rel='noreferrer'
        // rel='noreferrer'
      >
        <span
          class='iconify'
          data-icon='ion-social-github'
          data-inline='false'
        ></span>
      </a>
    </footer>
  );
};

export default Footer;
