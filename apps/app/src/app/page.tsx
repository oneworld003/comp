import { redirect } from 'next/navigation';

export default async function RootPage() {
  // Default redirect to your desired public page
  return redirect('/demo'); // ← Change this to your default accessible route
}
