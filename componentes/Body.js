import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import styleExterno from '../styles.js';

const Body = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row',flexWrap:'wrap', padding:30 }}>
            <Image
                style={{ width: 90, height: 90 }}
                source={{ uri: 'https://reactnative.dev/img//tiny_logo.png' }}
            />
            <Text style={styleExterno.textLorem}>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</Text>
        </View>
    )
}

export default Body;