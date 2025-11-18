import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavbarProps {
  variant?: "light" | "dark" | "pink";
}

export default function Navbar({ variant = "light" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu ao navegar e bloqueia o scroll do body quando aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    // Implementar lógica de logout aqui
    // localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <nav className={`${styles.navbar} ${styles[variant]}`}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          {/* Logo Bubble */}
          <Link to="/" className={styles.logoBubble}>
            <div className={styles.bubbleShape}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1126_2188)">
                  <rect
                    width="72"
                    height="72"
                    rx="36"
                    fill="black"
                    fillOpacity="0.01"
                  />
                  <path
                    d="M118.823 -75C118.823 -75 141.61 -7.75258 99.6504 54.8027C111.594 87.8911 114.895 120.486 114.188 144.685C114.188 144.849 114.108 145.179 114.108 145.179H114.188L112.145 170.365L66.1768 162.875C66.1933 162.801 76.0649 118.73 60.5986 85.916C57.7699 87.8091 44.6469 89.7843 41.3467 90.0312C31.2892 90.8542 21.5459 89.1261 12.667 85.5869V161.312H-30V-67.0977H12.667V-28.4951C36.7898 -32.5281 63.3487 -14.7489 77.8066 9.20312C91.4558 -32.0465 79.0274 -66.9797 78.9854 -67.0977L118.823 -75ZM37.0801 -7.52441C16.1403 -7.52439 -0.834961 9.45081 -0.834961 30.3906V34.3047C-0.83474 55.2443 16.1404 72.2187 37.0801 72.2188C58.0198 72.2188 74.9949 55.2443 74.9951 34.3047V30.3906C74.9951 9.4508 58.0199 -7.52441 37.0801 -7.52441ZM18.874 15.9521C33.1749 8.46198 55.2552 32.5791 59.9697 50.1934C52.1121 53.1565 26.9679 49.617 18.7959 43.6084C11.2526 38.0937 6.93053 22.29 18.874 15.9521Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1126_2188">
                    <rect width="72" height="72" rx="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Logo Mobile dentro do menu */}
          <div className={styles.mobileLogoHeader}>
            <span className={styles.logoContainer}>
              <div className={styles.bubbleShape}>
                {/* Logo TheKa (Atualizada) */}
                <svg
                  viewBox="0 0 226 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_296_519)">
                    <path
                      d="M183.126 0L172.481 1.99665C172.481 1.99665 175.82 10.836 172.167 21.2768C168.303 15.2244 161.207 10.732 154.761 11.7511V1.99665H143.36V59.7122H154.761V40.5777C157.133 41.472 159.737 41.9088 162.424 41.7008C163.306 41.6384 166.813 41.1392 167.568 40.6609C171.705 48.9594 169.059 60.1073 169.059 60.1073L181.342 62L181.888 55.6357H181.867C181.867 55.6357 181.888 55.5525 181.888 55.5109C182.077 49.3962 181.195 41.16 178.003 32.7991C189.215 16.9923 183.126 0 183.126 0ZM156.399 29.9705C154.383 28.577 153.228 24.5837 156.42 22.9822C160.241 21.0896 166.141 27.1835 167.4 31.6344C165.301 32.3831 158.582 31.4888 156.399 29.9705Z"
                      fill="currentColor"
                    />
                    <path
                      d="M58.7675 1.89267V19.6129C88.7077 -2.91176 91.857 42.2 87.133 62.0208L75.7952 60.1282C77.0759 52.4952 78.3567 34.2966 73.7166 28.681C66.9769 20.5072 58.7465 31.8424 58.7465 37.9779V60.1282H47.2407V1.89267H58.7465H58.7675Z"
                      fill="currentColor"
                    />
                    <path
                      d="M226 62L225.958 54.4918L224.467 24.0013C224.383 22.6286 224.131 21.2559 223.585 19.9872C221.822 15.9108 218.735 14.954 217.224 14.3509C210.4 11.6055 204.626 13.8725 197.928 15.5572L200.49 25.062C203.555 23.523 204.122 23.2942 205.949 22.795H206.012C209.581 21.8175 213.276 24.0429 213.948 27.6618C213.948 27.6826 213.948 27.7242 213.969 27.745C199.587 29.8665 179.62 36.8755 186.486 52.7239C191.168 63.5599 207.607 62.6239 213.843 53.535C213.822 54.263 213.822 54.9077 213.864 55.4693L213.78 60.1073L226 62ZM212.164 41.7216C202.862 62.0208 191.315 47.2539 210.064 38.789C211.219 38.2482 212.437 37.9155 213.591 37.5827C213.276 38.9762 212.793 40.3489 212.164 41.7216Z"
                      fill="currentColor"
                    />
                    <path
                      d="M44.8053 4.40927V14.5381H29.4783V60.1074H16.6918C17.3636 44.8205 18.4974 29.8249 16.6918 14.5381L-0.0209961 14.4549V4.40927H44.7843H44.8053Z"
                      fill="currentColor"
                    />
                    <path
                      d="M136.515 47.5451C133.093 49.9993 129.146 50.4985 129.146 50.4985C119.992 51.8504 106.596 53.2855 108.297 39.7873C113.231 41.1808 117.409 41.8048 120.958 41.8048C138.384 41.8048 139.854 27.0171 135.046 20.0704C126.395 7.54982 104.728 16.3059 99.0378 28.889L91.1643 26.8507L92.4661 35.9604L96.7492 37.1667C96.5183 38.9138 96.4763 40.744 96.5813 42.6367C97.694 60.7313 123.372 64.1214 136.956 59.0882C137.733 58.7971 137.397 58.9426 137.67 58.7971C137.691 58.7971 138.258 58.5475 138.279 58.5267L141.114 57.1332L136.515 47.5451ZM117.787 25.3948C121.146 22.4831 127.151 20.2992 128.516 23.107C128.894 23.8766 129.188 24.9789 127.907 26.7675C126.731 28.577 122.616 31.0312 116.8 31.5928C114.911 31.7799 113.84 31.7799 111.74 31.5928C113.735 28.6394 114.911 27.8906 117.787 25.3948Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_296_519">
                      <rect width="226" height="62" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span className={isMenuOpen ? styles.open : ""}></span>
            <span className={isMenuOpen ? styles.open : ""}></span>
            <span className={isMenuOpen ? styles.open : ""}></span>
          </button>

          {/* Navigation Bubble */}
          <div
            className={`${styles.navBubble} ${
              isMenuOpen ? styles.navBubbleOpen : ""
            }`}
            id="primary-navigation"
            role="navigation"
            aria-label="Principal"
          >
            <div className={styles.bubbleShape}>
              {/* Links de Navegação */}
              <ul className={styles.navList}>
                <li>
                  <Link
                    to="/"
                    className={`${styles.navLink} ${
                      isActive("/") ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/acervo"
                    className={`${styles.navLink} ${
                      isActive("/acervo") ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Acervo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SobreNos"
                    className={`${styles.navLink} ${
                      isActive("/SobreNos") ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className={`${styles.navLink} ${
                      isActive("/contato") ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
              </ul>

              {/* Botão Sair */}
              <button
                className={styles.logoutButton}
                onClick={handleLogout}
                aria-label="Sair"
              >
                <svg
                  className={styles.logoutIcon}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 12C18.5 13.0878 18.1774 14.1512 17.5731 15.0556C16.9687 15.9601 16.1098 16.6651 15.1048 17.0813C14.0998 17.4976 12.9939 17.6065 11.927 17.3943C10.8601 17.1821 9.88011 16.6583 9.11092 15.8891C8.34173 15.1199 7.8179 14.1399 7.60569 13.073C7.39347 12.0061 7.50239 10.9002 7.91867 9.89524C8.33495 8.89025 9.0399 8.03126 9.94437 7.42692C10.8488 6.82257 11.9122 6.5 13 6.5C14.4582 6.50165 15.8562 7.08165 16.8873 8.11274C17.9184 9.14383 18.4984 10.5418 18.5 12ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3806 22.3602 20.3503 24.0265 17.9749 25.0104C15.5994 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02511C1.97351 5.64967 3.63975 3.61935 5.77759 2.19089C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C23.9984 11.5194 23.6982 10.0544 23.1174 8.69245C22.5366 7.33054 21.6871 6.09974 20.6198 5.07367C19.5524 4.04759 18.289 3.24732 16.9053 2.7207C15.5215 2.19408 14.0457 1.95194 12.5663 2.00875C6.67875 2.23625 1.98376 7.14 2.00001 13.0312C2.00565 15.7132 2.99478 18.2998 4.78001 20.3012C5.50703 19.2468 6.43055 18.3423 7.5 17.6375C7.59119 17.5773 7.69958 17.5486 7.80862 17.5558C7.91765 17.563 8.02132 17.6058 8.10375 17.6775C9.46273 18.8529 11.1995 19.4998 12.9963 19.4998C14.793 19.4998 16.5298 18.8529 17.8888 17.6775C17.9712 17.6058 18.0749 17.563 18.1839 17.5558C18.2929 17.5486 18.4013 17.5773 18.4925 17.6375C19.5633 18.342 20.4881 19.2464 21.2163 20.3012C23.0103 18.2925 24.0013 15.6932 24 13Z"
                    fill="currentColor"
                  />
                </svg>
                <span className={styles.logoutText}>Sair</span>
              </button>
            </div>
          </div>

          {/* Overlay para o menu mobile */}
          {isMenuOpen && (
            <div
              className={styles.backdrop}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden
            />
          )}
        </div>
      </div>
    </nav>
  );
}
