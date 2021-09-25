import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av'

import LoveAnimation from '../assets/love-animation.json'
import CuteAnimation from '../assets/cute.json'
import CoracaoAnimation from '../assets/coracao.json'

import MeuSucessoVcAudio from '../assets/MeuSucessoVocê.mp3'

import { Container, Content, Header, Paragraph, Title, TitleHeader } from './styles';

export default function App() {

  async function playSound() {
    await Audio.Sound.createAsync(
        MeuSucessoVcAudio,
        { shouldPlay: true }
      );
  }

    useEffect(() => {
        playSound()
    },[])

  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <Header>
            <LottieView
              autoPlay
              source={LoveAnimation}
              loop
              resizeMode="contain"
              autoSize
            />
            
            <TitleHeader>Feliz Aniversario Meu Amor </TitleHeader>
            
          </Header>

          <Content>
            <Title>Parabens minha fofinha</Title>

            <LottieView
              autoPlay
              source={CuteAnimation}
              loop
              resizeMode="contain"
              autoSize
              style={{ width: 56, height: 56 }}
            />

              
          </Content>

            <Paragraph>
              Amor hoje você esta fazendo 17 aninhos oh meu Deus, com carinha de 15 kkk
              vc e tão fofinha amor ❤️, esse e nosso segundo aniversario juntos, passou tão rapido amor,
              esses dias eu tava pensando em como iria te entregar as alianças kkk tava escolhendo seu vestido kkk
              que ficou um pouquinho curto kkk e vc ontem ver vc usando ele nossa tava tão linda 🥺, amor esse e 
              so nosso segundo aniversario juntos de muito, então minha fofinha quero que vc continue do jeitinho que
              linda fofa esforçada, sincera, carinhosa, mulher de oração, nesse um ano passamos por tanta coisa amor juntos amor,
              tenho certeza que sem vc não iria conseguir fazer tudo que fiz amor, e apesar que hoje e seu aniversario o presente 
              meu kkk ter uma namorada alias muito mais que uma namorada, uma amiga, minha parceira, minha esposa 🥰, minha mulher
              minha amante kkk meu tudo, descupa ai amor mas o presente sem duvidas e meu 😍, e esse presente e melhor presente do mundo,
              nunca vou ser merecedor desse presente, mas Deus e tão bom amor ❤️, agradeço todos os dias a ele por ter me dado esse 
              presente maravilhoso na minha vida que e VOCÊ meu amor ❣️.
            </Paragraph>

            <Paragraph>
              Ah e hoje e nosso um mes ainda kkk vish amor 1 ano e 1 mes como o tempo passa rapido daqui a pouco a gente ja 
              casados kkk oh meu amor Eu te amooo tanto minha fofinha ❤️‍🔥, quero dizer que você e muito muito especial para mim amor ❤️
              oh minha princesa obg por tudo por sempre esta comigo, amor eu te amooo demais minha pretinha fofa 😻 daqui a pouco a sua mae 
              ta paciando e mimando nossos filhos kkk oh amor quero passar minha vida inteirinha com vc minha princesa 😘, e vou 🥺. PARA SEMPRE!
            </Paragraph>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}>
              <LottieView
                autoPlay
                source={CoracaoAnimation}
                loop
                resizeMode="contain"
                autoSize
              />
            </View>

          </ScrollView>
        
      </Container>
    </>
  );
}

