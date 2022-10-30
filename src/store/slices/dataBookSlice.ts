import { createSlice } from '@reduxjs/toolkit'


export const DataBook = createSlice({
  name: 'dataBook',
  initialState :{
    data: [
        {
          id: "0",
          image: 'https://kbimages1-a.akamaihd.net/34c5bfd3-a8d0-4500-a321-a1533c3af3f7/353/569/90/False/moby-dick-118.jpg',
          nameBook: 'Моби Дик',
          authorBook: 'Герман Мелвилл',
          url: 'https://knigogo.net/wp-content/uploads/2021/12/mobi-dik-ili-belyj-kit-128141.epub'

        },
        {
          id: "1",
          image: 'https://knigavpodarok.com.ua/wa-data/public/shop/products/95/10/11095/images/21167/21167.750x0.jpg',
          nameBook: 'Самый богатый человек в Вавилоне',
          authorBook: 'Джордж Самюэль Клейсон',
          url: 'https://knigogo.net/wp-content/uploads/2022/06/samyj-bogatyj-chelovek-v-vavilone-23593618.epub'
        },
        {
          id: "2",
          image: 'https://knigogo.net/wp-content/uploads/2019/02/V-metre-drug-ot-druga-237x339.jpg',
          nameBook: 'В метре друг от друга',
          authorBook: 'Липпинкотт Рейчел',
          url: 'https://knigogo.net/wp-content/uploads/2020/04/v-metre-drug-ot-druga-49826632.epub'

        },
        {
          id: "3",
          image: 'https://knigogo.net/wp-content/uploads/2019/05/zhertva-42129314-237x335.jpg',
          nameBook: 'Жертва',
          authorBook: 'Дженна Кеннет',
          url: 'https://knigogo.net/wp-content/uploads/2019/05/zhertva-42129314.epub'
        },
        {
          id: "4",
          image: 'https://knigogo.net/wp-content/uploads/2018/09/Idi-tuda-gde-strashno.-Imenno-tam-ty-obretesh-silu-237x340.jpg',
          nameBook: 'Иди туда, где страшно. Именно там ты обретешь силу',
          authorBook: 'Джим Лоулесс',
          url: 'https://knigogo.net/wp-content/uploads/2021/12/idi-tuda-gde-strashno-imenno-tam-ty-obretesh-silu-36301085.epub'

        },
        {
          id: "5",
          image: 'https://knigogo.net/wp-content/uploads/2018/02/tajnaya-opora-privyazannost-v-zhizni-rebenka-8742586-237x339.jpg',
          nameBook: 'Тайная опора. Привязанность в жизни ребенка',
          authorBook: 'Людмила Владимировна Петрановская',
          url: 'https://knigogo.net/wp-content/uploads/2018/02/tajnaya-opora-privyazannost-v-zhizni-rebenka-8742586.epub'
        },
        {
          id: "6",
          image: 'https://knigogo.net/wp-content/uploads/2018/01/kogda-ona-ushla-23300315-237x354.jpg',
          nameBook: 'Когда она ушла',
          authorBook: 'Блейк Пирс',
          url: 'https://knigogo.net/wp-content/uploads/2021/02/kogda-ona-ushla-23300315.epub'
        },
        {
          id: "7",
          image: 'https://knigogo.net/wp-content/uploads/2018/02/psihologiya-vliyaniya-6994167-237x338.jpg',
          nameBook: 'Психология влияния',
          authorBook: 'Роберт Б. Чалдини',
          url: 'https://knigogo.net/wp-content/uploads/2018/02/psihologiya-vliyaniya-6994167.epub'
        },
        {
          id: "8",
          image: 'https://knigogo.net/wp-content/uploads/2019/01/NE-NOJ.-Tolko-tot-kto-perestal-setovat-na-sudbu-mozhet-stat-bogatym-237x348.jpg',
          nameBook: 'НЕ НОЙ. Только тот, кто перестал сетовать на судьбу, может стать богатым',
          authorBook: 'Джен Синсеро',
          url: 'https://knigogo.net/wp-content/uploads/2021/07/ne-noj-tolko-tot-kto-perestal-setovat-na-sudbu-mozhet-stat-bogatym-40277846.epub'
        },
    ],
    currencyUrl: null,
    currencyBook: null,
    counterPages: 0,
    loadingBook: false,
    modalVisible: true,
  },
  reducers: {
    setCurrencyUrl: (state, actions) => {
        state.currencyUrl = actions.payload
    },
    setCurrencyBook: (state, actions) => {
      state.currencyBook = actions.payload
    },
    setCounterPages: (state, actions) => {
      state.counterPages = actions.payload
    },
    setLoadingBook: (state, actions) => {
      state.loadingBook = actions.payload
    },
    setModalVisible: (state, actions) => {
      state.modalVisible = actions.payload
    },
  },
})

export const { 
  setCurrencyUrl,
  setCurrencyBook,
  setCounterPages, 
  setLoadingBook,
  setModalVisible, } = DataBook.actions

export default DataBook.reducer