import React from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function TelaInicial() {
  const navigation = useNavigation();

  const handleButtonPress = async () => {
    await Notifications.requestPermissionsAsync();

    const content = {
      title: 'Notificação',
      body: 'Mantenha-se sempre informado sobre PCgamer',
      data: { data: 'Acesse nossa loja para dar um upgrade em seu pc' },
    };

    const trigger = null;

    await Notifications.scheduleNotificationAsync({ content, trigger });

    navigation.navigate('Pecas');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.heading}>Montagem Pc Gamer</Text>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.title}>Pc Gamer</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Pecas')}>
              <Image style={styles.image} source={require('./src/imagem/gabinete.jpg')} />
            </TouchableOpacity>
            <View>
              <Text>Bem-vindo à tela inicial!</Text>
              <Button title="Ir para Peças" onPress={handleButtonPress} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Pecas({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.heading}>Montagem Pc Gamer</Text>
          </View>
         
          <View style={styles.inicenterContainer}>
            <Text style={styles.title}>Principais Peças</Text>
            
            <View style={styles.ApieceContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Processador')}>
                <Text style={styles.pieceText}>Processador</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PlacaMae')}>
                <Text style={styles.pieceText}>Placa-Mãe</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PlacadeVideo')}>
                <Text style={styles.pieceText}>Placa de Vídeo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MemoriaRam')}>
                <Text style={styles.pieceText}>Memória Ram</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Armazenamento')}>
                <Text style={styles.pieceText}>Armazenamento (SSD)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Fonte')}>
                <Text style={styles.pieceText}>Fonte de Alimentação</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Gabinete')}>
                <Text style={styles.pieceText}>Gabinete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.pieceText}>Mais Informações</Text>
              </TouchableOpacity>
          
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
function Processador() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.heading}>Processador</Text>
        <View style={styles.centerContainer}>
          <Image style={{ width: 300, height: 200 }} source={require('./src/imagem/Layer6.png')}></Image>
          <View>
            <Text>
              O processador, também conhecido como CPU, é um dos componentes mais importantes do seu computador, principalmente quando falamos de desempenho e performance, por isso é extremamente importante que você esteja muito atento na hora da compra e se atente aos diferentes modelos.

              Atualmente, os processadores mais comuns do mercado são os da linha Intel Core e AMD Ryzen, que são fabricados por empresas diferentes e possuem algumas características únicas quando falamos de tecnologia, recursos e desempenho para tarefas específicas.
              Caso você não tenha um orçamento muito robusto e precise utilizar o dinheiro da melhor forma possível, o ideal é investir em modelo de entrada, como um Core i3 ou um Ryzen 3, que trabalha com quatro núcleos e oferece um desempenho satisfatório para jogos mais leves.

              Para montar um computador gamer que consiga entregar mais desempenho e que tenha uma vida útil mais prolongada, será necessário investir nos modelos de médio desempenho, como por exemplo a linha Core i5 da Intel e a linha Ryzen 5 da AMD, que trabalham com valores maior, mas entregam uma performance mais estável.

              Agora, se o seu objetivo for máximo desempenho e o seu orçamento permitir, os processadores top de linha como: i7, i9 e Ryzen 7 com certeza são a melhor alternativa, pois conseguem executar até os jogos mais pesados com tranquilidade e vão durar por muito tempo.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function PlacaMae() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'blue', }}>Placa-Mãe</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ width: 300, height: 200 }} source={require('./src/imagem/placa.png')}></Image>
          <View>
            <Text style={{ fontSize: 20, textAlign: 'justify' }}>
              A placa-mãe, junto com o processador, é uma das peças mais importantes quando estamos falando sobre como montar um PC gamer, afinal, é nela que todas as outras peças como a memória RAM, placa de vídeo, HDs, etc serão conectadas.
              Esteja bastante atento e anote o nome e o modelo que você escolheu, afinal, os outros componentes de hardware que você comprar devem ser compatíveis com a placa-mãe, caso contrário, o computador não irá funcionar ou irá apresentar diversos problemas de performance.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function PlacadeVideo() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'blue', }}>Placa de Vídeo</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ width: 300, height: 200 }} source={require('./src/imagem/placavideo.jpg')}></Image>
          <View>
            <Text style={{ fontSize: 20, textAlign: 'justify' }}>
              Para conseguir um bom desempenho nos games, é fundamental investir em uma placa de vídeo dedicada, pois ela será a responsável por obter as informações e processar todos os gráficos que estão na tela, influenciando na qualidade das texturas, na resolução e em diversos outros elementos visuais.
              Uma excelente recomendação é que você dedique boa parte do seu orçamento para a GPU e que não escolha um modelo que seja muito mais potente que a sua CPU, pois isso pode acabar ocasionando o que chamamos de gargalo, que é quando o processador não consegue enviar as informações rápido o suficiente para sua placa de vídeo devido.s
              A melhor forma de entender o desempenho de uma GPU é verificar as informações técnicas como velocidade do clock, arquitetura, quantidade de VRAM e se possível, consultar  “Benchmarks” no YouTube, procurando o nome e o modelo da placa escolhida.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function MemoriaRam() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'blue', }}>Memoria Ram</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ width: 300, height: 200 }} source={require('./src/imagem/memoriaram.jpg')}></Image>
          <View>
            <Text style={{ fontSize: 20, textAlign: 'justify' }}>
              Depois de selecionar placa-mãe, GPU e CPU, é hora de escolher a memória RAM, que irá trabalhar em conjunto com o seu processador e vai afetar diretamente o desempenho dos seus jogos, além da quantidade de programas que você será capaz de executar ao mesmo tempo.
              A seguir, você confere a quantidade ideal de RAM para cada situação:

              4GB: Essa é a quantidade mínima que um computador gamer precisa para conseguir executar o sistema operacional em uma versão mais antiga e rodar alguns jogos mais leves.
              8GB: Para a maioria dos gamers 8GB de memória RAM já é o suficiente, pois vai garantir uma boa usabilidade e irá suportar a maioria dos jogos do mercado.
              16GB: Ideal para quem quer trazer fluidez e longevidade para o seu setup gamer, além de conseguir jogar todos os games do mercado sem ter que se preocupar com desempenho.
              32GB: Essa quantidade só é recomendada para pessoas que além de jogar, irão utilizar o computador para trabalhar ou para quem pretende se tornar um streamer.
              Uma dica muito importante é que você sempre opte sempre por instalar dois pentes de memória ao invés de um só, desta forma você irá conseguir ativar a função Dual-Channel da sua placa-mãe (caso ela suporte), o que garante um melhor desempenho para todas as aplicações do seu computador.

              Caso você vá utilizar 8GB de memória RAM, por exemplo, compre um par de pentes que tenham 4GB cada um e trabalhem com a mesma frequência, ao invés de investir em apenas um único pente de 8GB.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function Armazenamento() {
  return (
    <ScrollView>

      <View style={{ backgroundColor: '#cf8386', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'blue', }}>Armazenamento SSD ou HD ?</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ width: 300, height: 200 }} source={require('./src/imagem/ssd.jpg')}></Image>
          <View>
            <Text style={{ fontSize: 20, textAlign: 'justify' }}>
              As diferenças entre os dois sistemas são bem visíveis, principalmente quando falamos de velocidades, taxas de transferência e da tecnologia utilizada para gravar, ler e transferir todas as informações que estão sendo armazenadas.
              Os HD’s tem como proposta oferecer uma maior capacidade de armazenamento aos consumidores, que pode variar de 500GB e chegar até  aproximadamente 10TB. Para acessar as informações, o HD utiliza um braço mecânico que se move fisicamente até o local do disco magnético e encontra o que foi gravado.

              Já o SSD e o NVMe utilizam um sistema de memória 3D Flash Nand que são capazes de acessar todas as informações que foram ali gravadas de forma quase que instantânea, o que ajuda a reduzir consideravelmente o tempo de inicialização do sistema, agilizar transferências de arquivos e deixar o tempo de carregamento do seus jogos bem menor.

              Atualmente, muitas pessoas estão optando por utilizar um sistema de armazenamento híbrido, instalando um HD com 1TB para arquivar programas mais pesados e um SSD para trazer velocidade ao computador.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function Fonte() {
  return (
    <ScrollView>

      <View style={{ backgroundColor: '#cf8386', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'blue', }}>Fonte de Alimentação</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ width: 350, height: 300 }} source={require('./src/imagem/fonte.jpg')}></Image>
          <View>
            <Text style={{ fontSize: 20, textAlign: 'justify' }}>
              Após escolher todos os componentes para montar o seu PC gamer, é necessário escolher uma fonte de alimentação adequada, que forneça a energia necessária para todo seu setup e que tenha uma construção de qualidade, capaz de lidar com a demanda de energia de forma segura.
              Recomendamos que você opte por uma fonte de alimentação de marcas confiáveis como Corsair, Thermaltake, EVGA, etc e que ela carregue o certificado 80+ Bronze ou superior, tudo isso irá garantir uma melhor eficiência, um menor consumo de energia e muito mais segurança para todos os outros componentes.
            </Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}
function Gabinete() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.heading}>Montagem Pc Gamer</Text>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.title}>Gabinete</Text>
            <Image style={{ width: 350, height: 300 }} source={require('./src/imagem/gabinete.jpg')}></Image>
            
            <Text>Agora você deverá encontrar um gabinete que tenha um design que te agrade e espaço interno suficiente para acomodar todos os componentes que listamos, principalmente a GPU.

              Os gabinetes no padrão ATX e MATX são capazes de acomodar praticamente todos os modelos de placa de vídeo, inclusive a mais nova linha da RTX. Já os gabinetes MITX e ITX são consideravelmente menores e nem sempre oferecem o espaço necessário para componentes mais robustos.
              Também é muito importante verificar a quantidade de entradas USB e conectores P2 que o gabinete possui em sua estrutura, o número de ventoinhas que podem ser instaladas na parte interna e se ele é compatível com water coolers.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.heading}>Montagem Pc Gamer</Text>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.title}>Mais Informações</Text>
            <Text>Aqui você encontra mais informações sobre montagem de PCs gamers.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function StackNavigator() {
  return (
   
      <Stack.Navigator initialRouteName="Pecas">
        <Stack.Screen name="Pecas" component={Pecas} options={{ title: 'Peças' }}  />
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Processador" component={Processador} options={{ title: 'Processador' }} />
        <Stack.Screen name="PlacaMae" component={PlacaMae} options={{ title: 'Placa Mãe' }} />
        <Stack.Screen name="PlacadeVideo" component={PlacadeVideo} options={{ title: 'Placa de Video' }} />
        <Stack.Screen name="MemoriaRam" component={MemoriaRam} options={{ title: 'Memória Ram' }} />
        <Stack.Screen name="Armazenamento" component={Armazenamento} options={{ title: 'Armazenamento' }} />
        <Stack.Screen name="Fonte" component={Fonte} options={{ title: 'Fonte' }} />
        <Stack.Screen name="Gabinete" component={Gabinete} options={{ title: 'Gabinete' }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Mais Informações' }} />
      </Stack.Navigator>
  
  );

}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        
        <Tab.Screen name="PC GAMER" component={TelaInicial} />
        <Tab.Screen name="Pecas" component={StackNavigator} />
        <Tab.Screen name="Sobre" component={Sobre} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf8386',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inicenterContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  centerContainer: {
    alignItems: 'center',
  },
  pieceText:{
    fontSize: 25,
    margin: 10,
    

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  link: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});