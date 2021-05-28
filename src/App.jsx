import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <main>
      <RepositoryList />
      <section>
        <h1>Content</h1>
      </section>
    </main>
  );
}