import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Haplos',
  description: 'Privacy policy for the Haplos iOS app.',
};

export default function Privacy() {
  return (
    <main className="page">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: March 14, 2026</p>

      <p>
        Haplos is committed to protecting your privacy. This policy explains
        what information we collect, how we use it, and your rights regarding
        your data.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Haplos is designed with privacy in mind. We collect the minimum amount
        of information needed to provide the app&apos;s features:
      </p>
      <ul>
        <li>
          <strong>List data:</strong> Your grocery lists and items are stored
          locally on your device and synced through Apple&apos;s iCloud service.
          We do not have access to this data.
        </li>
        <li>
          <strong>Sharing:</strong> When you share a list with another user,
          the shared data is transmitted through Apple&apos;s CloudKit
          infrastructure.
        </li>
        <li>
          <strong>Siri data:</strong> Siri interactions are handled entirely
          by Apple. We do not receive or store any Siri voice data.
        </li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        All your data is stored on your device and optionally synced via
        iCloud. We do not operate our own servers for storing user data. Your
        lists, preferences, and settings remain under your control.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Haplos does not use third-party analytics, advertising networks, or
        tracking services. We do not sell, trade, or share your personal
        information with third parties.
      </p>

      <h2>Data Retention</h2>
      <p>
        Since your data is stored locally and through iCloud, you have full
        control over its retention. Deleting the app or removing data from
        iCloud will remove all associated information.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Haplos does not knowingly collect personal information from children
        under 13. If you believe your child has provided personal information,
        please contact us so we can take appropriate action.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will
        be posted on this page with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this privacy policy, please visit
        our <a href="/support">support page</a> to get in touch.
      </p>
    </main>
  );
}
