import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e3edff',
      100: '#c6dcfb',
      200: '#9cc0fa',
      300: '#639dff',
      400: '#2e79fb',
      500: '#0057ff',
      600: '#0048ca',
      700: '#003293',
      800: '#00276e',
      900: '#001e55',
      950: '#001230'
    }
  }
});
