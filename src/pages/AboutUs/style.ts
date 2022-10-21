import styled, { css } from "styled-components";

export const MainBackground = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.MainBackground}
  `}
`;

export const FolhasImg = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.Folhas}
  `}
`;

export const TitleSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: -5rem;
`;

export const TitleProducts = styled.span`
  ${({ theme }) => css`
    ${theme.mixins.titleLogoHeader}
  `}
`;

export const Divisors = styled.div`
  width: 550px;
  border-radius: 1rem;
  /* height: .1px; */
  border: 2px solid #014034;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.mixins.Footer}
  `}
`;
export const TitleLogoFooter = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.TitleLogoFooter}
  `}
`;
export const LogoFooter = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoFooter}
  `}
`;
export const TituloAboutUs = styled.h2`
    ${({ theme }) => css`
        ${theme.mixins.TituloAboutUs}
    `}
`;
export const TextoAboutUs = styled.p`
    ${({ theme }) => css`
        ${theme.mixins.TextoAboutUs}
    `}
`;
export const TimeAboutUs = styled.div`
    ${({ theme }) => css`
        ${theme.mixins.TimeAboutUs}
    `}
`
export const FotoDev = styled.img`
${({ theme }) => css`
        ${theme.mixins.FotoDev}
    `}
`
export const TituloAboutUsDev = styled.h3`
    ${({ theme }) => css`
        ${theme.mixins.TituloAboutUsDev}
    `}
`;
export const TextoAboutUsDev = styled.p`
    ${({ theme }) => css`
        ${theme.mixins.TextoAboutUsDev}
    `}
`;
export const LinksDevs = styled.a`
    ${({ theme }) => css`
        ${theme.mixins.LinksDevs}
    `}
`;
export const IconRedes = styled.img`
    ${({ theme }) => css`
        ${theme.mixins.IconRedes}
    `}
`;