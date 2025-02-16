import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Terms() {
  return (
    <Layout title="Terms of Use | Calendar Canvas">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Terms of Use</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Calendar Canvas ("the Library"), you agree to these terms of use. If you 
              disagree with any part of these terms, you may not use the Library.
            </p>
          </section>

          <section>
            <h2>2. License</h2>
            <p>
              Calendar Canvas is licensed under the MIT License. This means:
            </p>
            <ul>
              <li>You are free to use, copy, modify, and distribute the Library</li>
              <li>You can use the Library for commercial purposes</li>
              <li>You don't have to provide the source code of your application</li>
              <li>The Library comes with no warranty</li>
            </ul>
            <p>
              For the complete license terms, see our{' '}
              <a href="https://github.com/yourusername/calendar-canvas/blob/main/LICENSE">
                LICENSE
              </a>{' '}
              file.
            </p>
          </section>

          <section>
            <h2>3. Usage Guidelines</h2>
            <p>When using Calendar Canvas, you agree to:</p>
            <ul>
              <li>Use the Library in compliance with all applicable laws and regulations</li>
              <li>Not use the Library for any harmful or malicious purposes</li>
              <li>Not misrepresent the Library's origin or ownership</li>
              <li>Retain all copyright and license notices in the source code</li>
            </ul>
          </section>

          <section>
            <h2>4. Contributions</h2>
            <p>
              If you contribute to Calendar Canvas, you agree that:
            </p>
            <ul>
              <li>Your contributions will be licensed under the same MIT License</li>
              <li>You have the right to license your contribution</li>
              <li>You grant us permission to use and distribute your contribution</li>
              <li>Your contribution may be modified or rejected</li>
            </ul>
          </section>

          <section>
            <h2>5. Disclaimer of Warranty</h2>
            <p>
              The Library is provided "as is", without warranty of any kind, express or implied. 
              We make no warranties about:
            </p>
            <ul>
              <li>The completeness or accuracy of the Library</li>
              <li>The suitability for any specific purpose</li>
              <li>The availability or continuity of the Library</li>
              <li>The absence of errors or bugs</li>
            </ul>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall the authors or copyright holders be liable for any claim, damages, 
              or other liability arising from the use or distribution of the Library.
            </p>
          </section>

          <section>
            <h2>7. Documentation and Website</h2>
            <p>
              The documentation website and associated materials:
            </p>
            <ul>
              <li>Are provided for informational purposes only</li>
              <li>May be updated or changed without notice</li>
              <li>May contain technical inaccuracies or typographical errors</li>
            </ul>
          </section>

          <section>
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes by updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>
              For questions about these terms, please contact:
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