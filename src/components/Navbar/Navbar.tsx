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

  // Fecha o menu ao navegar e gerencia scroll do body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    setIsMenuOpen(false);

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
  }, [location.pathname, isMenuOpen]);

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
              {/* Logo Mobile dentro do menu */}
              <div className={styles.mobileLogoHeader}>
                <span className={styles.thekaText}>TheNa</span>
              </div>

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
                    to="/sobre-nos"
                    className={`${styles.navLink} ${
                      isActive("/sobre-nos") ? styles.active : ""
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