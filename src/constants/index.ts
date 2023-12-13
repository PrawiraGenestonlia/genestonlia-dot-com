export const navigationItems: {
  title: string
  href: string
  description: string
  children?: { title: string; href: string; description: string }[]
}[] = [
  {
    title: 'Home',
    href: '/',
    description: 'The homepage.',
  },
  {
    title: 'Projects',
    href: '/projects/',
    description:
      'A list of projects I have worked on, and am currently working on.',
    children: [
      {
        title: 'Dev Experience Platform',
        href: '/projects/dev-experience-platform',
        description:
          'A platform for developers to build and deploy their applications.',
      },
      {
        title: 'Decentralised Identity',
        href: '/projects/decentralised-identity',
        description: '',
      },
      {
        title: 'National Identity Provider',
        href: '/projects/identity-provider',
        description: '',
      },
    ],
  },
  {
    title: 'Profile',
    href: '/projects/profile',
    description: '',
  },
  {
    title: 'Blog',
    href: '/projects/blog',
    description: '',
  },
]
