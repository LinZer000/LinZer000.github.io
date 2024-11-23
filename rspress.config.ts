import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'InfiniteDancing',
  icon: '/infinitedancing-icon.png',
  logo: {
    light: '/infinitedancing-light-logo.png',
    dark: '/infinitedancing-dark-logo.png',
  },
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
  },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      label: 'English',
    },
    {
      lang: 'zh',
      label: '简体中文',
    },
  ],
  themeConfig: {
    lastUpdated: true,
    locales: [
      {
        lang: 'en',
        label: 'English',
        outlineTitle: 'ON THIS Page',
        lastUpdatedText: 'Last Updated at',
        prevPageText: 'Previous Page',
        nextPageText: 'Next Page',
        searchPlaceholderText: 'Search Anywhere',
        searchNoResultsText: 'No results found',
        searchSuggestedQueryText: 'Please change the keyword and try again',
        overview: {
          filterNameText: 'Filter',
          filterPlaceholderText: 'Enter keyword',
          filterNoResultText: 'No matching content found',
        },
      },
      {
        lang: 'zh',
        label: '简体中文',
        outlineTitle: '大纲',
        lastUpdatedText: '最后更新于',
        prevPageText: '上一页',
        nextPageText: '下一页',
        searchPlaceholderText: '搜索全站',
        searchNoResultsText: '找不到结果',
        searchSuggestedQueryText: '请更换关键词重试',
        overview: {
          filterNameText: '搜索',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '没有找到结果',
        },
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/LinZer000',
      },
    ],
  },
});