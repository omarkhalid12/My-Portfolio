import { LuGithub, LuFacebook, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { cva } from 'class-variance-authority';
import variantData from '../data';
import onlineStore from '../assets/projects/product-builder.png';
import vSCodeClone from '../assets/projects/vscode.png';
import todoApp from '../assets/projects/todo.png';
import crudSystem from '../assets/projects/crud.png';
import template from '../assets/projects/t-page.png';
import mentor from '../assets/projects/mentor.png';
import kasper from '../assets/projects/kasper.png';

import html from '../assets/language-logos/html.svg';
import css from '../assets/language-logos/css.png';
import javascript from '../assets/language-logos/javascript.svg';
import typescript from '../assets/language-logos/typescript.svg';
import sass from '../assets/language-logos/sass.svg';
import git from '../assets/language-logos/git.png';
import github from '../assets/language-logos/github.svg';
import bootstrap from '../assets/language-logos/bootstrap.svg';
import vite from '../assets/language-logos/vite.svg';
import react from '../assets/language-logos/react.png';
import next from '../assets/language-logos/next.svg';
import vercel from '../assets/language-logos/vercel.svg';
import npm from '../assets/language-logos/npm.png';
import yarn from '../assets/language-logos/yarn.jpg';
import tailwind from '../assets/language-logos/tailwind.png';
import mui from '../assets/language-logos/mui.png';
import chakraui from '../assets/language-logos/chakraUI.png';
import webpack from '../assets/language-logos/webpack.png';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      100: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});

const outlineButtonVariants = cva('btn-outline', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      100: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    border: {
      false: 'border-0',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});
const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/omarkhalid12',
    name: 'Github',
    icon: <LuGithub size={20} />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/omar-khalid-350787258',
    name: 'Linkedin',
    icon: <LuLinkedin size={20} />,
  },
  {
    id: 3,
    href: 'https://www.facebook.com/share/wEH7tX7ExehGPPSj/?mibextid=qi2Omg',
    name: 'Facebook',
    icon: <LuFacebook size={20} />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/omer_khalid77?igsh=MWY5NjYxdDBpMWQ0cQ==',
    name: 'Instagram',
    icon: <LuInstagram size={20} />,
  },
];
const projects = [
  {
    id: 1,
    image: todoApp,
    title: 'todo App',
    link: {
      live: 'todo-app-full-stack-gamma.vercel.app',
      github: 'https://github.com/omarkhalid12/todo-app',
    },
    direction: '-100',
  },
  {
    id: 2,
    image: vSCodeClone,
    title: 'vsCode Clone',
    link: {
      live: 'vs-code-clone-eta.vercel.app',
      github: 'https://github.com/omarkhalid12/VS-code-Clone',
    },
    direction: '100',
  },
  {
    id: 3,
    image: onlineStore,
    title: 'Online Store',
    link: {
      live: 'online-store-three-iota.vercel.app/',
      github: 'https://github.com/omarkhalid12/Online-Store',
    },
    direction: '-100',
  },
  {
    id: 4,
    image: crudSystem,
    title: 'CRUD System',
    link: {
      live: 'omarkhalid12.github.io/CRUD/',
      github: 'https://github.com/omarkhalid12/CRUD',
    },
    direction: '100',
  },
  {
    id: 5,
    image: template,
    title: 'Omar Template',
    link: {
      live: 'omarkhalid12.github.io/Template2/',
      github: 'https://github.com/omarkhalid12/Template2',
    },
    direction: '-100',
  },
  {
    id: 6,
    image: mentor,
    title: 'Mentor',
    link: {
      live: 'omarkhalid12.github.io/Mentor/',
      github: 'https://github.com/omarkhalid12/Mentor',
    },
    direction: '100',
  },
  {
    id: 7,
    image: kasper,
    title: 'Kasper Template',
    link: {
      live: 'omarkhalid12.github.io/Kasper-Template/',
      github: 'https://github.com/omarkhalid12/Kasper-Template',
    },
    direction: '-100',
  },
];
const skills = [
  {
    id: 1,
    skill: 'HTML',
    icon: <img className="img-fluid" src={html} alt="html" />,
    direction: '100',
  },
  {
    id: 2,
    skill: 'Css',
    icon: <img className="img-fluid" src={css} alt="css" />,
    direction: '-100',
  },
  {
    id: 3,
    skill: 'Javascript',
    icon: <img className="img-fluid" src={javascript} alt="javascript" />,
    direction: '100',
  },
  {
    id: 4,
    skill: 'Typescript',
    icon: <img className="img-fluid" src={typescript} alt="typescript" />,
    direction: '-100',
  },
  {
    id: 5,
    skill: 'React.js',
    icon: <img className="img-fluid" src={react} alt="react" />,
    direction: '100',
  },
  {
    id: 6,
    skill: 'Next.js',
    icon: <img className="img-fluid" src={next} alt="next" />,
    direction: '-100',
  },
  {
    id: 8,
    skill: 'Bootstrap',
    icon: <img className="img-fluid" src={bootstrap} alt="bootstrap" />,
    direction: '-100',
  },
  {
    id: 9,
    skill: 'Sass',
    icon: <img className="img-fluid" src={sass} alt="sass" />,
    direction: '100',
  },
  {
    id: 10,
    skill: 'Tailwind Css',
    icon: <img className="img-fluid" src={tailwind} alt="tailwind" />,
    direction: '-100',
  },
  {
    id: 11,
    skill: 'MUI',
    icon: <img className="img-fluid" src={mui} alt="mui" />,
    direction: '100',
  },
  {
    id: 11,
    skill: 'ChakraUI',
    icon: <img className="img-fluid" src={chakraui} alt="mui" />,
    direction: '-100',
  },
  {
    id: 12,
    skill: 'NPM',
    icon: <img className="img-fluid" src={npm} alt="npm" />,
    direction: '100',
  },
  {
    id: 12,
    skill: 'Yarn',
    icon: <img className="img-fluid" src={yarn} alt="npm" />,
    direction: '-100',
  },
  {
    id: 13,
    skill: 'Vite',
    icon: <img className="img-fluid" src={vite} alt="vite" />,
    direction: '100',
  },
  {
    id: 14,
    skill: 'Webpack',
    icon: <img className="img-fluid" src={webpack} alt="webpack" />,
    direction: '-100',
  },
  {
    id: 15,
    skill: 'Git',
    icon: <img className="img-fluid" src={git} alt="git" />,
    direction: '100',
  },
  {
    id: 16,
    skill: 'Github',
    icon: <img className="img-fluid" src={github} alt="github" />,
    direction: '-100',
  },
  {
    id: 17,
    skill: 'vercel',
    icon: <img className="img-fluid" src={vercel} alt="vercel" />,
    direction: '100',
  },
];

export { buttonVariants, outlineButtonVariants, socialLinks, projects, skills };
