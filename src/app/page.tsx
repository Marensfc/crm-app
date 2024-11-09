import StatusLabel from './components/status-label';
import AddCompanyButton from './components/add-company-button';
import { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toLocaleString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
