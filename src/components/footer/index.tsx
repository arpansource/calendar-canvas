import React from "react";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.brand}>
              <img
                src="img/logo.png"
                alt="Calendar Canvas Logo"
                className={styles.logo}
              />
              <h3 className={styles.brandTitle}>Calendar Canvas</h3>
            </div>
            <p>
              A lightweight and customizable calendar library for React
              applications.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Documentation</h4>
            <ul>
              <li>
                <a href="/docs/intro">Getting Started</a>
              </li>
              <li>
                <a href="/docs/types">API Reference</a>
              </li>
              <li>
                <a href="/docs/category/examples">Examples</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://github.com/arpansource/calendar-canvas">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/arpansource/calendar-canvas/issues">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/calendar-canvas">npm</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Author</h4>
            <ul>
              <li>
                <a href="https://abhishekprajapati1.com">Website</a>
              </li>
              <li>
                <a href="mailto:ap0661236@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://github.com/abhishekprajapati1">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Calendar Canvas. Built with ❤️ by{" "}
            <a href="https://github.com/arpansource">ArpanSource</a>
          </div>
          <div className={styles.links}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="https://github.com/arpansource/calendar-canvas/blob/main/LICENSE">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
