import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-blue-400 text-white`};

  ${({ primary }) => (primary ? tw`bg-blue-400` : tw`text-blue-400`)};

  ${({ block }) => block && tw`w-full`};
`);
