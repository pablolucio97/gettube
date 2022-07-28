import React from 'react';
import { useRouter } from 'next/router'
import { Container, Main } from './styles';
import { Header } from '../components/Elements/Header'
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { AuthenticationManager } from '../components/Elements/AuthenticationManager';
import * as ptBr from '../languages/ptBr'
import * as enUS from '../languages/enUS'
import { useLanguage } from '../hooks/useLanguage'
import { Title } from '../components/Typography/Title';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {

    const { language } = useLanguage()
    return (
        <Container>
            <Header>
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.svg'
                    />
                    <Title
                        content='GetTube'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Home'
                        url='/'
                    />
                    <HeaderLink
                        content='Watch Later'
                        url='/watchlater'
                    />
                    <HeaderLink
                        content='MyProfile'
                        url='/profile'
                    />
                </HeaderLinksContainer>
                <HeaderAuthenticationContainer>
                    <AuthenticationManager
                        signInButtonTitle={
                            language === 'portuguese' ?
                                ptBr.ptBr.AuthenticationManager.signInText :
                                enUS.enUS.AuthenticationManager.signInText
                        }
                        signOutButtonTitle={
                            language === 'portuguese' ?
                                ptBr.ptBr.AuthenticationManager.signOutText :
                                enUS.enUS.AuthenticationManager.signOutText
                        }
                        showsUserPhoto signIn={() => { }}
                        signOut={() => { }}
                    />
                </HeaderAuthenticationContainer>
            </Header>
            <Main>
                {children}
            </Main>
        </Container>
    )
}