import type { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
  navbarVariant?: "light" | "dark" | "pink";
}

export default function MainLayout({
  children,
  navbarVariant = "light",
}: MainLayoutProps) {
  return (
    <div className={styles.mainLayout}>
      <Navbar variant={navbarVariant} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
