import Button from '../ui/button.tsx/button';
import styles from './about.module.css';
export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.about_description}>
        <h1>Whats different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor made for modern digital product teams.
        </p>
      </section>
      {/*  */}
      <section className={styles.list}>
        <div className={styles.number}>
          <Button
            title='01'
            style={{
              backgroundColor: 'var(--primary-red)',
              fontSize: 14,
              color: 'white',
            }}
          />
          <span>Track company-wide progress</span>
        </div>
        <div className={styles.text}>
          See how your day to day tasks fit into the wider vision. Go from tracking progress at the
          milestone level all the way down to the smallest of details. Never lose sight to the
          bigger picture again.
        </div>
        <div className={styles.number}>
          <Button
            title='01'
            style={{
              backgroundColor: 'var(--primary-red)',
              fontSize: 14,
              color: 'white',
            }}
          />
          <span>Advanced built in reports</span>
        </div>
        <div className={styles.text}>
          Set internal delivery estimates and track progress toward company goals. Our customisable
          dashboard helps you build out the reports you need to keep key stakeholders informed.
        </div>
        <div className={styles.number}>
          <Button
            title='01'
            style={{
              backgroundColor: 'var(--primary-red)',
              fontSize: 14,
              color: 'white',
            }}
          />
          <span>Everything you need in one place</span>
        </div>
        <div className={styles.text}>
          Stop jumping from one service to another to communicate, store files, track tasks and
          share documents. Manage offers all in one team productivity solution.
        </div>
      </section>
    </div>
  );
}
