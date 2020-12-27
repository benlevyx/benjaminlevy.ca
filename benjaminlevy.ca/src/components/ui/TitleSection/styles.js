import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4`
  ${tw`text-xs text-blue-400 w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-gray-400 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-blue-400 h-6 w-px absolute ml-1`};
  }
`;
