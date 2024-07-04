import { ThemeProvider } from '@shadcn/ui';
import { createTheme } from '@shadcn/ui/theme';

const theme = createTheme({
  colors: {
    primary: '#ff4500', // Customize to your primary color
    secondary: '#f0f0f0',
    accent: '#ff0000',
  },
  fonts: {
    sans: ['Inter', 'sans-serif'],
  },
});

const ShadcnProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ShadcnProvider;
