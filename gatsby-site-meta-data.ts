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
      bachelorDegree: 'Myongji Univ. Computer Engineering (2019.03-2025.07)',
    },
    social: {
      github: `https://github.com/youminki`,
      linkedIn: `https://www.instagram.com/you_minki`,
      resume: `dbalsrl7648@gmail.com`,
    },
    dropdown: {
      tistory: 'https://dbalsrl7648.tistory.com/',
      velog: '',
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
      date: '2024.07.05 - now',
      en: 'Me1pik.',
      kr: 'LieftComma',
      info: '`멜픽` 서비스에서 프론트엔드 개발 담당 (관리자, 사용자 페이지)',
      link: 'https://me1pik.com/landing',
    },

    {
      category: 'Activity',
      date: '2025. 01 ~ 2025. 03',
      en: 'MJSEC',
      kr: '동아리',
      info: 'CTF 해킹 문제풀이 및 관리자를 위한 웹사이트 제작',
      link: 'https://github.com/MJSEC-MJU/MSG_CTF_WEB',
    },

    {
      category: 'Activity',
      date: '2024. 03 ~ 2024. 12',
      en: '멋쟁이사자 12기 프론트엔드 ',
      kr: '동아리',
      info: 'ADHD를 치료하고 감정을 기록하기 위한 웹사이트 제작',
      link: 'https://github.com/mju-likelion/12th-hackathon-team2-web',
    },
    {
      category: 'Activity',
      date: '2024. 03 ~ 2024. 12',
      en: 'Clover',
      kr: '동아리',
      info: '클로버의 전시회를 위한 초대장, 전시회 웹사이트를 제작',
      link: 'https://github.com/2024Clover-website/Clover-Client',
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
