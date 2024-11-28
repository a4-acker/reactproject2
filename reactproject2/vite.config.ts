import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 配置 GitHub Pages 的基礎路徑
const repositoryName = 'reactproject1'; // 替換為你的 repository 名稱

export default defineConfig({
    plugins: [react()],
    base: `/${repositoryName}/`, // GitHub Pages 的基礎路徑
});
