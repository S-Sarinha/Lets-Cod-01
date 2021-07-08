export const state = () => ({
  all: []
})

// const posts = [
//   {
//     id: 1,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 2,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 3,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 4,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 5,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 6,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 7,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
//   {
//     id: 8,
//     blog: 2,
//     categoria: 'Siconfi',
//     url: 'dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
//     titulo: 'Como Está a Qualidade dos Dados Contábeis, Orçamentários e Fiscais Enviados pelos Estados ao Tesouro Nacional?',
//     imagem_vert: 'tesouro1-700x840.jpg',
//     imagem_horiz: 'tesouro1-1200x683.jpg',
//     conteudo: '<p class="font-italic font-weight-medium">Fique atento à Portaria 642, que estabelece regras para o recebimento e disponibilização↵dos dados contábeis e fiscais dos entes da Federação no Siconfi, a partir do exercício de↵2020</p>↵<p>Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um↵Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o↵governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados↵à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é↵determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de↵Responsabilidade Fiscal (LRF).</p>↵<p>A finalidade do envio dos dados é proporcionar duas coisas: a consolidação das contas↵nacionais e a transparência dos dados da gestão financeira pública. Isso significa que o↵Brasil inteiro vai estar de olho nesses dados. Isso é bom para os brasileiros, mas é uma↵preocupação e responsabilidade a mais para esses entes.</p>↵<p>Os dados contábeis, orçamentários e fiscais devem ser enviados pelo Poder Executivo do↵Estado ou do Município englobando os dados dos outros poderes. No caso dos Estados, é↵necessários agregar aos dados do Poder Executivo, os da Assembleia Legislativa e do↵Tribunal de Justiça. No caso do município, os dados da Câmara Municipal. Se o Estado ou↵o Município possuir Regime Próprio de Previdência Social (RPPS), deve também agregar↵os dados desse regime.</p>↵<p>São vários os documentos que devem ser enviados, mas, a partir de 2019, a estrela de todos↵eles é a Matriz de Saldos Contábeis (MSC). Primeiro, porque ela tem periodicidade mensal↵e contém o balancete contábil e outros dados de cada um dos poderes do ente federado. Segundo, porque a partir dela podem ser gerados outros importantes relatórios exigidos↵pela Lei de Responsabilidade Fiscal.</p>↵<p>E não é só a MSC que deve ser enviada. Existem outras obrigações, como é o caso da↵Declaração de Contas Anuais (DCA), feita anualmente e composta por vários documentos,↵sendo sua periodicidade anual, como o próprio nome indica. O que deve conter tanto na↵DCA quanto na MSC é definido em portaria da Secretaria do Tesouro Nacional. A que↵regula o envio dos dados para o exercício de 2020 é a de número 642/2019.</p>↵<p><a href="https://siconfi.tesouro.gov.br/siconfi/pages/public/arquivo/conteudo/PORTARIA_N_642_DE_20_DE_SETEMBRO_DE_2019.pdf" target="_blank">Clique aqui para baixar a Portaria 642/2019</a></p>↵<p>Além de definir o conteúdo dos documentos que são enviados, ela define prazos,↵responsáveis pelo envio e as penalidades no caso de inadimplência. E a inadimplência↵redunda em prejuízos para toda a população, pois impede que o Estado ou o Município↵receba transferência de recursos voluntários da União como, por exemplo, para a↵construção ou para equipar um hospital público.</p>↵<p>O envio dos dados pelos entes federados ao governo federal não é coisa nova. Desde 2011,↵para cumprir a exigências da LRF, os entes passaram a enviar mensalmente os seus dados↵contábeis de forma bastante precária ao Tesouro por intermédio do Sistema de Coleta de↵Dados Contábeis (SISTN). Esse sistema não permitia controles adequados para garantir,↵tanto a frequência, quanto a qualidade dos dados enviados pelos entes.</p>',
//     ativo: '1'
//   },
// ]

export const actions = {
  async fetchAllPosts ({commit}, blog) {
    let posts = await this.$axios.$get(`getAll/?blog=${blog}`)
    // commit('setPosts', posts)

    //let posts = await this.$axios.$get('posts')
    commit('setPosts', posts)
    
    // commit('setPosts', posts.posts)
    //console.log('POSTS',posts)
    
  },

  async fetchPost ({commit}, id) {
    let post = await this.$axios.$get(`get/?url=${id}`)
    // commit('setPost', post)

    //let post = await this.$axios.$get(`posts/${id}`)
    commit('setPost', post)
  }
}

export const mutations = {
  setPost (state, post) {
    state.all.push(post)
  },
  setPosts (state, posts) {
    state.all = posts
  }
}





// const posts = [
//     {
//         id: 1,
//         categoria: 'COMPLIANCE',
//         url: 'sua-empresa-tem-a-funcao-de-compliance',
//         imagem: '01.jpg',
//         imagemRet: '01-ret.jpg',
//         titulo: 'Sua empresa tem a função de compliance incorporada?',
//         post: 'Obediência estrita à CLT, adequação dos processos internos às normas técnicas recomendadas para certificação “ISO”, conformidade contábil segundo padrões internacionais, sintonia com obrigações fiscais, procedimentos em sinergia com marcos de responsabilidade ambiental….ufa! São dezenas as imposições regulatórias com as quais o empreendedor pode se preocupar. E basta uma pequena falha para que a empresa seja onerada com restrições legais, multas, punições judiciais, além, é claro, com a mácula em sua reputação (algo difícil de ser revertido). Foi para equilibrar todas essas variáveis que surgiu essa palavrinha em inglês que você entenderá melhor nas próximas linhas: compliance.'
//     },
//     {
//         id: 2,
//         categoria: 'GESTÃO DE RISCO',
//         url: 'a-importancia-da-gestao-de-risco-nas-organizacoes',
//         imagem: '02.jpg',
//         imagemRet: '02-ret.jpg',
//         titulo: 'A importância da gestão de risco nas organizações',
//         post: 'No contexto empresarial, o risco faz parte de toda atividade. Em muitos casos, ele pode ser previsto com base na experiência e no gerenciamento de processos que devem ajudar na tomada de decisões lá na frente.'
//     },
//     {
//         id: 3,
//         categoria: 'LICITAÇÕES',
//         url: 'licitantes-inidoneos',
//         imagem: '03.jpg',
//         imagemRet: '03-ret.jpg',
//         titulo: 'Licitantes Inidôneos',
//         post: 'O Tribunal mantém disponível para consulta ao usuário externo no Portal TCU a Lista de responsáveis declarados inidôneos para participar de licitação na administração pública federal, nos termos do art. 46 da Lei Orgânica do TCU, cuja inidoneidade encontre-se vigente.'
//     },
//     {
//         id: 4,
//         categoria: 'COMPLIANCE',
//         url: 'o-compliance-no-setor-publico',
//         imagem: '04.jpg',
//         imagemRet: '04-ret.jpg',
//         titulo: 'O Compliance no Setor Público',
//         post: ''
//     },
//     {
//         id: 5,
//         categoria: 'GESTÃO DE RISCO',
//         url: 'gerenciamento-de-risco-em-aquisicoes-publicas',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'Gerenciamento de Risco em Aquisições Públicas',
//         post: ''
//     },
//     {
//         id: 6,
//         categoria: 'GESTÃO DE RISCO',
//         url: '',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'Gestão de risco',
//         post: ''
//     },
//     {
//         id: 7,
//         categoria: 'CATEGORIA',
//         url: '',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'Responsabilização no Tribunal de Contas da União',
//         post: ''
//     },
//     {
//         id: 8,
//         categoria: 'CATEGORIA',
//         url: '',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'Sanções no Tribunal de Contas da União',
//         post: ''
//     },
//     {
//         id: 9,
//         categoria: 'CATEGORIA',
//         url: '',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'Contratação de Pessoal nos Serviços Sociais Autônomos',
//         post: ''
//     },
//     {
//         id: 10,
//         categoria: 'CATEGORIA',
//         url: '',
//         imagem: 'blog.jpg',
//         imagemRet: 'blog-ret.jpg',
//         titulo: 'O Referencial Básico de Combate à Fraude e à Corrupção do TCU',
//         post: ''
//     },
//     {
//         id: 11,
//         categoria: 'SICONFI',
//         url: 'como-esta-a-qualidade-dos-dados-contabeis-orcamentarios-e-fiscais',
//         imagem: '11.jpg',
//         imagemRet: '11-ret.jpg',
//         titulo: 'Como está a qualidade dos dados contábeis, orçamentários e fiscais enviados pelos Estados ao Tesouro Nacional?',
//         post: 'Se você trabalha na área financeira, orçamentária ou contábil de um Estado ou de um Município, ou é uma pessoa atenta a respeito das finanças públicas e se preocupa como o governo gasta o seu dinheiro, saiba que existe uma obrigatoriedade do envio desses dados à Secretaria do Tesouro Nacional (STN), do Ministério da Economia. Esse envio é determinado pela Lei Complementar nº 101/2000, também conhecida como Lei de Responsabilidade Fiscal (LRF).'
//     },
// ]

// export default {
  
//     getPosts(){
//         return posts
//         //c(posts)
//     },

//     getPostByUrl(url){
//         return posts.find(r => r.url == url)
//         //return posts.filter(r => r.url === url)
//         // console.log('TESTE', posts[0].url === url)
//         // console.log('URL PARAM', url)
//         // console.log('POSTS', posts)
//         // console.log('POST', post)
//         // return post
//         //c(posts)
//     },

//     getProdutos(c){
//         //c(produtos)
        
//         axios.get('/loja/produtos/')
//         .then(response => {
//     //        console.log('AXIOS response')
//     //        console.log(response.data.produtos)
//             c(response.data.produtos)
//         }
//         ).catch(e => {
//         console.log('axios catch')
//         this.errors.push(e)
//         })
//     }

// }