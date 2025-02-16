import React from 'react';
import Layout from '@theme/Layout';
import styles from './style.module.css';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy | Calendar Canvas">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>Overview</h2>
            <p>
              Calendar Canvas is an open-source library and this privacy policy explains our approach 
              to data collection and usage.
            </p>
          </section>

          <section>
            <h2>Data Collection</h2>
            <p>
              As an open-source library, Calendar Canvas itself:
            </p>
            <ul>
              <li>Does not collect any personal information</li>
              <li>Does not track user behavior</li>
              <li>Does not use cookies</li>
              <li>Does not store any user data</li>
            </ul>
          </section>

          <section>
            <h2>Usage Data</h2>
            <p>
              While the library itself doesn't collect data, we use the following third-party services 
              for documentation and distribution:
            </p>
            <ul>
              <li>
                <strong>GitHub:</strong> Hosts our source code and documentation. Subject to{' '}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                  GitHub's Privacy Policy
                </a>
              </li>
              <li>
                <strong>npm:</strong> Distributes our package. Subject to{' '}
                <a href="https://docs.npmjs.com/policies/privacy">
                  npm's Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Website Analytics</h2>
            <p>
              This documentation website may use basic analytics to understand user interaction. 
              This is limited to anonymous usage statistics and helps us improve the documentation.
            </p>
          </section>

          <section>
            <h2>Third-Party Integration</h2>
            <p>
              When you integrate Calendar Canvas into your application:
            </p>
            <ul>
              <li>Your application's privacy policy governs data handling</li>
              <li>Calendar Canvas has no access to your application's data</li>
              <li>All data processing happens locally in your application</li>
            </ul>
          </section>

          <section>
            <h2>Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy as needed. We will notify users of any material 
              changes by updating the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For questions about this privacy policy, please contact:
            </p>
            <ul>
              <li>Email: <a href="mailto:ap0661236@gmail.com">ap0661236@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/abhishekprajapati1">@abhishekprajapati1</a></li>
              <li>Website: <a href="https://abhishekprajapati1.com">abhishekprajapati1.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}