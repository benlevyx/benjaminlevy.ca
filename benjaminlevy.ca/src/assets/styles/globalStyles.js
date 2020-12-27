import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-black bg-white font-sans`};
  }

  a {
    ${tw`text-blue-400 hover:text-blue`};
  }

  body p {
    ${tw`mt-3 text-black`};
  }
`;
