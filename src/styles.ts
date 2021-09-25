import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding-left: 32px;
    padding-right: 32px;
`

export const Header = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TitleHeader = styled.Text`
    font-size: 32px;
    color: #7129c1;
    font-weight: bold;
    text-align: center;
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 24px;
    color: red;
    font-weight: bold;
`

export const Paragraph = styled.Text`
    font-size: 18px;
    color: #7159c1;
    margin-top: 8px;
    margin-bottom: 8px;
    letter-spacing: 0.3px;
    line-height: 25px;
    font-weight: bold;
    text-align: justify;
`
