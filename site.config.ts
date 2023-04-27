export const siteConfig = {
  author: 'Chansee97',
  title: 'Chansee97-Blog',
  description: 'My blog site.',
  lang: 'zh-CN',
}

export const siteSources = {
  // github: {
  //   prefix: '/github', // Prefix for routes used to query contents
  //   driver: 'github', // Driver used to fetch contents (view unstorage documentation)
  //   repo: 'chansee97/blog-posts',
  //   branch: 'main',
  //   // dir: '', // Directory where contents are located. It could be a subdirectory of the repository.
  //   // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
  // },
}

export const navLinks = [
  {
    title: 'Blog',
    path: '/post',
    icon: 'i-icon-park-outline-align-text-right-one',
  },
  {
    title: 'Search',
    path: '/search',
    icon: 'i-icon-park-outline-search',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'i-icon-park-outline-grinning-face-with-open-mouth',
  },
  {
    title: 'Github',
    path: 'https://github.com/chansee97',
    icon: 'i-icon-park-outline-github',
  },
]
