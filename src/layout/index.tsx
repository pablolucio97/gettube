import React from 'react';
import { useRouter } from 'next/router'
import { Container } from './styles';
import { Header } from '../components/Elements/Header'
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { AuthenticationManager } from '../components/Elements/AuthenticationManager';
import * as ptBr from '../languages/ptBr'
import * as enUS from '../languages/enUS'
import { useLanguage } from '../hooks/useLanguage'
import { Title } from '../components/Typography/Title';
import { HeaderSearchBarContainer } from '../components/Elements/Header/HeaderSearchBarContainer';
import { SearchInput } from '../components/Elements/SearchInput';

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {

    const { language } = useLanguage()
    const { asPath } = useRouter()

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
                {asPath === '/' &&
                    <HeaderSearchBarContainer>
                        <SearchInput
                            value=''
                            onChange={() => { }}
                            placeholder='Search'
                        />
                    </HeaderSearchBarContainer>
                }
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
            {children}
        </Container>
    )
}