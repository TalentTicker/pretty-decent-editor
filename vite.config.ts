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
        include: ['slate', 'slate-react'],
        entries: ['./src/**/*.tsx'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'PrettyDecentEditor',
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'styled-components',
                'react-icons',
                'slate',
                'slate-react',
                'framer-motion',
                '@tippyjs/react',
                'is-hotkey',
                'react-hot-toast',
                'react-image-file-resizer',
                'react-portal',
                'react-use',
                'slate-hyperscript',
                'uuid',
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    slate: 'BaseEditor',
                    'slate-react': 'ReactEditor',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    'react-icons': 'react-icons',
                    'framer-motion': 'motion',
                },
            },
        },
    },
});
