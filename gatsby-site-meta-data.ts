export default {
  /**
   * basic Information
   */
  title: `you-minki.com`,
  description: `개발자 유민기`,
  language: `ko`,
  siteUrl: `https://youminki.netlify.app/`,
  ogImage: `/static/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `유민기`,
    nickname: `밍키`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `dbalsrl7648@gmail.com`,
      residence: 'Anyang, South Korea',
      bachelorDegree: 'MyongJi Univ. Computer Engineering (2019.03-2025.07)',
    },
    social: {
      github: `https://github.com/youminki`,
      // linkedIn: `https://www.linkedin.com/in/jeonming-lee/`,
      // resume: `https://www.figma.com/file/dㄴtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: 'https://dbalsrl7648.tistory.com/',
      // velog: 'https://velog.io/@danmin20',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '/static/og-image.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
