import type { Metadata } from 'next';
import SupportClient from './SupportClient';

export const metadata: Metadata = {
  title: 'Support — Haplos',
  description: 'Get help with the Haplos iOS app.',
};

export default function SupportPage() {
  return <SupportClient />;
}
