import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { TodoList } from './components/TodoList';

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"]
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
//component