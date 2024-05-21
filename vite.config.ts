import react from '@vitejs/plugin-react';
import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  // resolve: {
  //   alias: {
  //     '@medplum/core': path.resolve(__dirname, '../../packages/core/src'),
  //     '@medplum/react': path.resolve(__dirname, '../../packages/react/src'),
  //   },
  // },
});
