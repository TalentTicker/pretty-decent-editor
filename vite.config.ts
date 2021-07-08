import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        analyze({
            summaryOnly: true,
        }),
    ],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, './src/utils'),
            components: path.resolve(__dirname, './src/components'),
            hooks: path.resolve(__dirname, './src/hooks'),
            plugins: path.resolve(__dirname, './src/plugins'),
        },
    },
    json: {
        namedExports: true,
    },
    optimizeDeps: {
        entries: ['src/components/**/*', 'src/hooks/**/*', 'src/utils'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'PrettyDecentEditor',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'framer-motion', 'react-icons'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    'framer-motion': 'framer',
                    'react-icons': 'react-icons',
                },
            },
        },
    },
});
