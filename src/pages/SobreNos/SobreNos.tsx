import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SobreNos.module.css';

const SobreNos: React.FC = () => {
  return (
    <main className={styles.sobreNosPage}>
      {/* Seção Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroArtwork}>
            <svg width="808" height="611" viewBox="0 0 808 611" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M577.696 406.001C577.696 406.001 470.751 405.326 394.778 349.982C486.504 300.584 554.963 177.337 459.258 89.536C357.379 -4.16927 216.749 97.0826 211.769 230.04C211.185 239.138 212.238 275.68 215.953 283.935C96.1621 309.352 41.729 279.027 41.729 279.027L-2.59907 403.36L57.4077 415.53L57.431 415.314C57.431 415.314 58.2 415.616 58.3981 415.637C116.623 423.906 196.045 423.346 279.002 399.392C336.996 456.061 423.402 487.232 498.16 503.836C498.533 504.094 498.929 504.137 499.127 504.158L580.061 519.249L577.696 406.001ZM330.188 191.385C344.233 170.875 385.043 153.046 396.945 187.49C410.721 228.682 364.154 247.852 320.363 256.197C315.567 233.864 317.32 210.278 330.188 191.385Z" fill="#F8C200"/>
              <path d="M78.2995 300.592C58.1787 326.687 47.2453 376.661 43.562 403.922C43.1938 406.646 40.7395 408.597 38.006 408.301L-3.23646 403.835C-3.81976 403.772 -4.40656 403.802 -4.96528 403.981C-10.6459 405.802 -22.4332 413.215 -30.3378 430.782C-57.2017 499.139 -94.2519 515.95 -109.419 515.811C-186.146 516.973 -159.794 409.056 -137.027 354.952C-122.97 311.182 -87.5856 221.496 -58.5006 212.918C-29.8079 204.456 22.0197 254.615 45.2956 281.796C45.9214 282.527 46.724 283.046 47.6448 283.326L75.7903 291.863C79.4147 292.962 80.6122 297.593 78.2995 300.592Z" stroke="#48001D" strokeWidth="20"/>
              <path d="M46.9678 282.128L75.7358 292.377C78.9369 293.518 80.0998 297.455 78.1978 300.271C60.9744 325.771 49.766 363.916 43.1864 404.061C42.754 406.7 40.3425 408.554 37.6847 408.266L-1.88185 403.981C-4.34305 403.715 -6.25118 401.692 -6.22806 399.217C-5.8682 360.681 18.188 299.832 30.2024 274.723C31.6775 271.64 35.7351 271.092 38.0896 273.57L45.0217 280.863C45.5622 281.431 46.2288 281.865 46.9678 282.128Z" fill="#48001D" stroke="#48001D"/>
              <path d="M540.137 511.987C560.258 485.892 571.191 435.918 574.875 408.657C575.243 405.933 577.697 403.982 580.431 404.278L621.673 408.744C622.256 408.808 622.843 408.777 623.402 408.598C629.082 406.777 640.87 399.364 648.774 381.797C675.638 313.44 712.688 296.629 727.856 296.768C804.582 295.606 778.23 403.523 755.464 457.627C741.407 501.397 706.022 591.084 676.937 599.661C648.244 608.123 596.417 557.965 573.141 530.783C572.515 530.052 571.712 529.533 570.792 529.254L542.646 520.716C539.022 519.617 537.824 514.987 540.137 511.987Z" stroke="#48001D" strokeWidth="20"/>
              <path d="M571.469 530.451L542.701 520.202C539.5 519.061 538.337 515.124 540.239 512.308C557.462 486.808 568.67 448.663 575.25 408.518C575.683 405.88 578.094 404.025 580.752 404.313L620.318 408.598C622.78 408.864 624.688 410.887 624.665 413.363C624.305 451.898 600.249 512.747 588.234 537.857C586.759 540.939 582.701 541.487 580.347 539.01L573.415 531.716C572.874 531.148 572.208 530.714 571.469 530.451Z" fill="#48001D" stroke="#48001D"/>
              <path d="M645.945 382.321L678.256 400.674C683.143 403.449 684.754 409.602 681.853 414.417C678.953 419.231 672.64 420.883 667.753 418.108L635.443 399.755L645.945 382.321Z" fill="#48001D"/>
              <path d="M659.345 354.187L691.655 372.54C696.542 375.316 698.153 381.469 695.253 386.283C692.352 391.097 686.04 392.75 681.153 389.974L648.842 371.621L659.345 354.187Z" fill="#48001D"/>
              <path d="M677.708 327.986L710.019 346.338C714.906 349.114 716.516 355.267 713.616 360.081C710.716 364.895 704.403 366.548 699.516 363.772L667.205 345.419L677.708 327.986Z" fill="#48001D"/>
            </svg>
          </div>
          
          <div className={styles.heroTextContainer}>
            <div className={styles.heroLogo}>
              <svg width="487" height="136" viewBox="0 0 487 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_494_1284)">
                  <path d="M394.613 0L371.674 4.34995C371.674 4.34995 378.868 23.6075 370.996 46.3541C362.671 33.1684 347.379 23.381 333.489 25.6013V4.34995H308.922V130.091H333.489V88.4036C338.602 90.3521 344.212 91.3036 350.003 90.8505C351.903 90.7146 359.459 89.6271 361.088 88.5849C370 106.664 364.3 130.952 364.3 130.952L390.767 135.075L391.944 121.21H391.898C391.898 121.21 391.944 121.028 391.944 120.938C392.351 107.616 390.45 89.6724 383.573 71.457C407.733 37.0199 394.613 0 394.613 0ZM337.018 65.2945C332.675 62.2586 330.186 53.5587 337.063 50.0697C345.298 45.9463 358.011 59.2227 360.726 68.9195C356.201 70.5507 341.723 68.6023 337.018 65.2945Z" fill="#F8C200"/>
                  <path d="M126.636 4.12344V42.7292C191.154 -6.34362 197.94 91.938 187.76 135.12L163.329 130.997C166.089 114.367 168.849 74.7195 158.85 62.4853C144.327 44.6777 126.591 69.3727 126.591 82.7397V130.997H101.798V4.12344H126.591H126.636Z" fill="#F8C200"/>
                  <path d="M486.999 135.075L486.909 118.717L483.697 52.29C483.516 49.2994 482.973 46.3088 481.796 43.5448C477.996 34.6636 471.345 32.5793 468.088 31.2652C453.383 25.284 440.942 30.223 426.509 33.8933L432.029 54.6009C438.634 51.2478 439.856 50.7494 443.792 49.6619H443.928C451.619 47.5322 459.582 52.3806 461.03 60.2649C461.03 60.3102 461.03 60.4008 461.075 60.4461C430.083 65.0679 387.057 80.3381 401.851 114.866C411.941 138.473 447.366 136.434 460.803 116.633C460.758 118.219 460.758 119.624 460.849 120.847L460.668 130.952L486.999 135.075ZM457.184 90.8958C437.141 135.12 412.257 102.949 452.66 84.5068C455.148 83.3287 457.772 82.6037 460.261 81.8787C459.582 84.9146 458.541 87.9052 457.184 90.8958Z" fill="#F8C200"/>
                  <path d="M96.5488 9.60623V31.6732H63.5211V130.952H35.9679C37.4156 97.6474 39.8588 64.9775 35.9679 31.6732L-0.0458984 31.4919V9.60623H96.5035H96.5488Z" fill="#F8C200"/>
                  <path d="M294.173 103.583C286.798 108.93 278.293 110.017 278.293 110.017C258.566 112.963 229.701 116.089 233.366 86.6818C243.998 89.7177 253.002 91.0771 260.648 91.0771C298.2 91.0771 301.367 58.8602 291.006 43.7261C272.366 16.4482 225.675 35.5246 213.414 62.9383L196.447 58.4978L199.252 78.3444L208.482 80.9725C207.984 84.7787 207.894 88.7661 208.12 92.8895C210.518 132.311 265.851 139.697 295.123 128.731C296.797 128.097 296.073 128.414 296.661 128.097C296.707 128.097 297.928 127.553 297.973 127.508L304.081 124.472L294.173 103.583ZM253.816 55.3259C261.055 48.9822 273.994 44.2245 276.935 50.3416C277.75 52.0181 278.383 54.4197 275.623 58.3165C273.09 62.2586 264.222 67.6055 251.689 68.8289C247.618 69.2367 245.31 69.2367 240.786 68.8289C245.084 62.3946 247.618 60.7634 253.816 55.3259Z" fill="#F8C200"/>
                </g>
                <defs>
                  <clipPath id="clip0_494_1284">
                    <rect width="487" height="135.075" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <p className={styles.heroText}>
              A Theka© é um espaço feito para conectar pessoas e histórias. Aqui você encontra livros para todos os gostos, 
              além de atividades que incentivam o conhecimento, a cultura e a troca de experiências. Mais do que estantes cheias, 
              somos um ponto de encontro para quem acredita no poder da leitura em transformar vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Tags */}
      <section className={styles.tagsSection}>
        <Container fluid>
          <div className={styles.tagsContainer}>
            <span className={styles.tagPill}>Encontros culturais</span>
            <span className={styles.tagPill}>Troca de experiências</span>
            <span className={styles.tagPill}>Comunidade</span>
            <span className={styles.tagPill}>Educação</span>
            <span className={styles.tagPill}>Aprendizado</span>
            <span className={styles.tagPill}>Acesso à informação</span>
            <span className={styles.tagPill}>Conhecimento</span>
          </div>
        </Container>
      </section>

      {/* Seção Nossa História */}
      <section className={styles.historySection}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className={styles.sectionTitle}>Nossa história</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className={styles.historyCard}>
                <div className={styles.historyContent}>
                  <p className={styles.historyText}>
                    No começo, era apenas uma pequena coleção de livros reunidos com carinho, mas, com o tempo, 
                    foi crescendo e conquistando cada vez mais leitores. Hoje, além de guardar histórias nas estantes, 
                    também faz parte da história de quem passa por aqui: estudantes, pesquisadores, curiosos e 
                    apaixonados por livros. Seguimos firmes na missão de ser um ponto de encontro, aprendizado e 
                    inspiração para todos.
                  </p>
                  <div className={styles.historyArtwork}>
                    <svg width="358" height="629" viewBox="0 0 358 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_494_1385)">
                        <path d="M-0.248023 211.929L11.2822 272.73C11.2822 272.73 62.3272 253.662 122.62 274.529C87.6696 296.595 61.7267 337.13 67.6119 373.946L11.2822 373.946L11.2822 439.065L344.576 439.065L344.576 373.946L234.079 373.946C239.243 360.395 241.766 345.524 240.565 330.174C240.204 325.137 237.322 305.11 234.559 300.792C282.482 277.167 346.858 292.278 346.858 292.278L357.788 222.122L321.036 219.004L321.036 219.124C321.036 219.124 320.555 219.004 320.315 219.004C285.004 217.925 237.442 222.962 189.159 241.19C97.8786 177.151 -0.248023 211.929 -0.248023 211.929ZM172.825 364.592C164.778 376.105 141.717 382.701 132.469 364.472C121.539 342.646 156.731 308.947 182.433 301.752C186.757 313.744 181.592 352.12 172.825 364.592Z" fill="#F78520"/>
                        <path d="M357.789 -31.3254L314.43 -31.0856L138.355 -22.571C130.428 -22.0913 122.501 -20.6521 115.174 -17.5341C91.6336 -7.46043 86.1087 10.1684 82.6257 18.803C66.7717 57.7784 79.8632 90.7576 89.5918 129.013L144.48 114.383C135.592 96.8737 134.271 93.6357 131.389 83.2023L131.389 82.8425C125.744 62.4554 138.595 41.3487 159.494 37.5111C159.614 37.5111 159.854 37.5111 159.974 37.3912C172.225 119.539 212.701 233.587 304.221 194.372C366.797 167.629 361.392 73.7283 308.905 38.1108C313.109 38.2307 316.832 38.2307 320.075 37.9908L346.859 38.4705L357.789 -31.3254ZM240.685 47.7047C357.909 100.831 272.633 166.789 223.75 59.6971C220.627 53.1013 218.706 46.1456 216.784 39.5498C224.831 41.3487 232.758 44.1069 240.685 47.7047Z" fill="#F78520"/>
                        <path d="M25.2158 465.226L83.7075 465.226L83.7075 552.771L346.86 552.771L346.86 625.805C258.582 621.967 171.985 615.491 83.7075 625.805L83.2271 721.264L25.2159 721.264L25.2158 465.346L25.2158 465.226Z" fill="#F78520"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_494_1385">
                          <rect width="768.39" height="358" fill="white" transform="translate(3.35874e-05 721.39) rotate(-90)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção Nossos Valores */}
      <section className={styles.valuesSection}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className={styles.sectionTitlePink}>Nossos valores</h1>
            </Col>
          </Row>
          <Row className={styles.valuesGrid}>
            <Col xs={12} lg={4}>
              <div className={`${styles.valueCard} ${styles.valueCardYellow}`}>
                <div className={styles.valueArtwork}>
                  <svg width="387" height="266" viewBox="0 0 387 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_494_1725)">
                      <rect width="387" height="266" rx="20" fill="#F8C200"/>
                      <path d="M335.803 404.946C305.13 407.859 278.484 396.415 278.484 396.415C215.96 371.109 126.504 330.629 187.73 251.217C213.482 278.332 237.371 297.762 259.644 310.899C369.03 375.415 433.635 286.961 429.471 225.052C422.063 113.526 253.264 88.9059 170.425 147.738L128.637 105.647L102.692 168.309L125.06 191.826C117.067 202.064 109.949 213.53 103.52 225.936C42.7401 344.949 191.223 461.54 295.341 479.873C301.308 480.9 298.654 480.581 300.912 480.667C301.044 480.744 305.537 481.258 305.747 481.204L328.757 482.85L335.803 404.946ZM301.199 194.965C333.19 188.913 379.061 197.278 377.112 220.159C376.602 226.444 374.319 234.532 359.581 241.147C345.425 248.284 310.403 248.632 271.794 230.666C259.232 224.859 252.51 220.895 240.032 211.933C263.613 200.565 273.797 200.163 301.199 194.965Z" fill="#81013A"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_494_1725">
                        <rect width="387" height="266" rx="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Acesso para todos</h3>
              </div>
            </Col>
            
            <Col xs={12} lg={4}>
              <div className={`${styles.valueCard} ${styles.valueCardGreen}`}>
                <div className={styles.valueArtwork}>
                  <svg width="387" height="207" viewBox="0 0 387 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M439.092 1.0181L441.449 84.7649C441.449 84.7649 368.442 74.3203 294.769 119.366C347.365 138.433 393.399 184.532 396.276 234.925L470.75 218.623L489.602 304.742L48.9499 401.199L30.0986 315.08L176.189 283.101C165.437 266.674 157.798 247.738 154.942 227.09C153.96 220.324 151.974 193.004 154.376 186.495C84.1783 169.12 3.43934 207.734 3.43934 207.734L-31.3202 118.117L16.3679 103.357L16.4026 103.515C16.4026 103.515 17.0031 103.218 17.3207 103.148C63.6935 91.5016 128.034 84.398 197.146 94.5319C299.29 -16.5773 439.092 1.0181 439.092 1.0181ZM254.465 253.003C268.437 265.9 300.835 267.949 307.785 241.166C315.917 209.137 259.635 174.755 223.57 172.678C221.325 189.789 239.263 239.046 254.465 253.003Z" fill="#F78520"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitleOrange}>Amor pela leitura</h3>
              </div>
            </Col>
            
            <Col xs={12} lg={4}>
              <div className={`${styles.valueCard} ${styles.valueCardPink}`}>
                <div className={styles.valueArtwork}>
                  <svg width="387" height="266" viewBox="0 0 387 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_494_1727)">
                      <rect width="387" height="266" rx="20" fill="#BF0259"/>
                      <path d="M425 380L424.743 333.66L415.634 145.474C415.12 137.002 413.581 128.53 410.245 120.699C399.467 95.5396 380.605 89.6348 371.367 85.9121C329.667 68.9677 294.382 82.9597 253.452 93.3574L269.105 152.021C287.838 142.522 291.303 141.11 302.465 138.029H302.85C324.663 131.996 347.245 145.731 351.351 168.067C351.351 168.195 351.351 168.452 351.479 168.58C263.588 181.674 141.567 224.933 183.524 322.749C212.136 389.628 312.602 383.851 350.709 327.755C350.581 332.248 350.581 336.227 350.838 339.693L350.325 368.319L425 380ZM340.445 254.843C283.604 380.128 213.035 288.988 327.614 236.743C334.671 233.405 342.113 231.352 349.17 229.298C347.245 237.898 344.294 246.37 340.445 254.843Z" fill="#F78520"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_494_1727">
                        <rect width="387" height="266" rx="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className={styles.valueTitleOrange}>Comunidade e troca</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção Nossa Equipe */}
      <section className={styles.teamSection}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className={styles.sectionTitlePink}>Nossa equipe</h1>
            </Col>
          </Row>
          <Row className={styles.teamGrid}>
            <Col xs={6} lg={3}>
              <div className={`${styles.teamMember} ${styles.teamMemberOrange}`}>
                <div className={styles.teamImageWrapper}>
                  <img src="src/assets/member1.png" alt="Maria Marta" className={styles.teamImage} />
                </div>
                <div className={styles.teamNameBadge}>
                  <span>Maria Marta</span>
                </div>
              </div>
            </Col>
            
            <Col xs={6} lg={3}>
              <div className={`${styles.teamMember} ${styles.teamMemberGreen}`}>
                <div className={styles.teamImageWrapper}>
                  <img src="src/assets/member2.png" alt="Júlia Maria" className={styles.teamImage} />
                </div>
                <div className={styles.teamNameBadge}>
                  <span>Júlia Maria</span>
                </div>
              </div>
            </Col>
            
            <Col xs={6} lg={3}>
              <div className={`${styles.teamMember} ${styles.teamMemberPurple}`}>
                <div className={styles.teamImageWrapper}>
                  <img src="src/assets/member3.png" alt="Jeniffer Oliveira" className={styles.teamImage} />
                </div>
                <div className={styles.teamNameBadge}>
                  <span>Jeniffer Oliveira</span>
                </div>
              </div>
            </Col>
            
            <Col xs={6} lg={3}>
              <div className={`${styles.teamMember} ${styles.teamMemberTeal}`}>
                <div className={styles.teamImageWrapper}>
                  <img src="src/assets/member4.png" alt="Josivaldo Lopes" className={styles.teamImage} />
                </div>
                <div className={styles.teamNameBadge}>
                  <span>Josivaldo Lopes</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default SobreNos;