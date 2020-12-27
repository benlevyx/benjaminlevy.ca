import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Projects = styled.div`
  ${tw`flex flex-wrap -mx-3`};
`;

export const ProjectItem = styled.div`
  ${tw`w-full sm:w-1/2`};
`;

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`;

export const Project = styled.div`
  ${tw`w-full sm:w-1/2 p-3`}
`;

export const Content = styled.div`
  ${tw`p-4 text-white`}
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4 text-white`}
`;

export const Description = styled.p`
  ${tw`text-white`}
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-white border-white rounded-full px-2 py-1 mr-2`}
`;