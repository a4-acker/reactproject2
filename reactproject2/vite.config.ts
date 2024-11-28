import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// �t�m GitHub Pages ����¦���|
const repositoryName = 'reactproject1'; // �������A�� repository �W��

export default defineConfig({
    plugins: [react()],
    base: `/${repositoryName}/`, // GitHub Pages ����¦���|
});
