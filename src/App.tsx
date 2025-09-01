import { MantineProvider, AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './assets/css/App.css';
import { theme } from './theme/theme';
import { Routes, Route } from 'react-router-dom';
import Header from './component/common/Header';
import Navbar from './component/common/Navbar';
import { routes } from './routes/route';
import Dashboard from './pages/Dashboard';
function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Header opened={opened} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar p="md" className="bg-gray-100">
          <Navbar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
export default App;
