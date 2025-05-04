import { useEffect } from 'react';

const SocialMedia = () => {
  useEffect(() => {
    // Twitter Integration
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.onload = function() {
      // @ts-ignore
      window.twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'ncbc_india'
        },
        document.getElementById('twitter-container'),
        {
          height: 400,
          chrome: 'nofooter noscrollbar'
        }
      );
    };
    document.body.appendChild(script);

    // Instagram Integration
    const instaScript = document.createElement('script');
    instaScript.src = 'https://www.instagram.com/embed.js';
    instaScript.onload = function() {
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(instaScript);

    // Facebook Integration
    const fbScript = document.createElement('script');
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
    fbScript.id = 'facebook-jssdk';
    document.body.appendChild(fbScript);

    // Initialize Facebook
    window.fbAsyncInit = function() {
      // @ts-ignore
      FB.init({
        appId: 'YOUR_FACEBOOK_APP_ID',
        version: 'v12.0'
      });
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(instaScript);
      document.body.removeChild(fbScript);
    };
  }, []);

  return (
    <div className="so-container">
      <h1 className="underline">Social Media</h1>
      <div className="container">
        <div className="social-grid">
          {/* Twitter Feed */}
          <div className="social-card">
            <div className="socialimages">
              <svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_120_82" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="62">
                  <path d="M70 0H0V61.9604H70V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_120_82)">
                  <path d="M61.7969 0H8.20312C3.67266 0 0 3.25086 0 7.26099V54.6994C0 58.7096 3.67266 61.9604 8.20312 61.9604H61.7969C66.3273 61.9604 70 58.7096 70 54.6994V7.26099C70 3.25086 66.3273 0 61.7969 0Z" fill="black" />
                  <path d="M48.6587 12.1018H55.895L40.0859 28.0953L58.684 49.8589H44.1218L32.7162 36.6594L19.6656 49.8589H12.425L29.3343 32.7521L11.4932 12.1018H26.425L36.7347 24.1667L48.6587 12.1018ZM46.119 46.0251H50.1287L24.2462 15.7342H19.9434L46.119 46.0251Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="social-container" id="twitter-container" />
          </div>

          {/* Instagram Feed */}
          <div className="social-card">
            <div className="socialimages">
              <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="paint0_radial_120_91" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.7513 46.2238) scale(67.1623)">
                    <stop stopColor="#FED576" />
                    <stop offset="0.2634" stopColor="#F47133" />
                    <stop offset="0.6091" stopColor="#BC3081" />
                    <stop offset="1" stopColor="#4C63D2" />
                  </radialGradient>
                </defs>
                <path d="M15.9754 63.7735C13.5386 63.7459 11.1248 63.2919 8.83976 62.4314C7.17116 61.8048 5.66148 60.8073 4.42112 59.5119C3.14245 58.2543 2.1591 56.7203 1.54412 55.0237C0.697789 52.7025 0.251495 50.2505 0.224824 47.7754C0.0376765 43.6606 0 42.4264 0 32C0 21.5737 0.0413824 20.3438 0.222971 16.2259C0.252879 13.7517 0.699721 11.301 1.54412 8.98008C2.16209 7.28471 3.14405 5.75046 4.41865 4.48878C5.65748 3.19098 7.16786 2.19296 8.83791 1.56863C11.1229 0.708152 13.5368 0.254135 15.9736 0.22651C20.0254 0.0382745 21.2421 0 31.5 0C41.7579 0 42.974 0.0420392 47.0276 0.22651C49.4638 0.256678 51.8768 0.710617 54.1621 1.56863C55.8314 2.19378 57.3414 3.19146 58.5807 4.48816C59.8576 5.7476 60.8401 7.28194 61.4559 8.9782C62.3031 11.2994 62.7503 13.7516 62.7776 16.2271C62.9629 20.3451 63.0006 21.578 63.0006 32.0013C63.0006 42.4245 62.9629 43.6574 62.7776 47.7754C62.7482 50.2505 62.3012 52.7021 61.4559 55.0237C60.8165 56.7072 59.8372 58.2361 58.581 59.512C57.3248 60.7878 55.8195 61.7823 54.1621 62.4314C51.8771 63.2921 49.4632 63.7463 47.0264 63.7741C42.9765 63.9624 41.7591 64.0006 31.4988 64.0006C21.2384 64.0006 20.0247 63.9642 15.9748 63.7741" fill="url(#paint0_radial_120_91)" />
                <path d="M31.5 15.6364C22.5795 15.6364 15.3409 22.8749 15.3409 31.7955C15.3409 40.716 22.5795 47.9545 31.5 47.9545C40.4205 47.9545 47.6591 40.716 47.6591 31.7955C47.6591 22.8749 40.4205 15.6364 31.5 15.6364ZM31.5 42.2727C25.7182 42.2727 21.0227 37.5773 21.0227 31.7955C21.0227 26.0136 25.7182 21.3182 31.5 21.3182C37.2818 21.3182 41.9773 26.0136 41.9773 31.7955C41.9773 37.5773 37.2818 42.2727 31.5 42.2727Z" fill="white"/>
                <path d="M48.2045 11.1818C46.0909 11.1818 44.3864 12.8864 44.3864 15C44.3864 17.1136 46.0909 18.8182 48.2045 18.8182C50.3182 18.8182 52.0227 17.1136 52.0227 15C52.0227 12.8864 50.3182 11.1818 48.2045 11.1818Z" fill="white"/>
              </svg>
            </div>
            <div className="social-container" id="instagram-container">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/ncbc_india/"
                data-instgrm-version="14" 
                style={{ width: '100%', height: '400px' }}
              />
            </div>
          </div>

          {/* Facebook Feed */}
          <div className="social-card">
            <div className="socialimages">
              <svg width="70" height="66" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_101_312)">
                  <path d="M35 66C54.33 66 70 51.2254 70 33C70 14.7746 54.33 0 35 0C15.67 0 0 14.7746 0 33C0 51.2254 15.67 66 35 66Z" fill="#1977F3" />
                  <path d="M48.6239 42.5413L50.1743 33H40.4683V26.8093C40.4683 24.2012 41.8218 21.6535 46.1728 21.6535H50.5878V13.5323C50.5878 13.5323 46.5813 12.8872 42.752 12.8872C34.7588 12.8872 29.5317 17.4537 29.5317 25.728V33H20.6426V42.5413H29.5317V65.6009C31.3134 65.8654 33.1395 66 35 66C36.8605 66 38.6865 65.8608 40.4683 65.6009V42.5413H48.6239Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_101_312">
                    <rect width="70" height="66" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="social-container" id="facebook-container">
              <blockquote 
                className="fb-page"
                data-href="https://m.facebook.com/ncbc.india/"
                data-tabs="timeline"
                style={{ width: '100%', height: '400px' }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;