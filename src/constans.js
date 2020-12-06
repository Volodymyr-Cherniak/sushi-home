export const address = {
  remote: 'https://sushi-server.netlify.app/.netlify/functions/api',
  localAddress: 'http://localhost:9000/.netlify/functions/api'
}

export const Generalstate = {
  language: {
    eng: {
      localization: {
        navbar: {
          logo: 'Sushi-Home',
          menuItems: 'Sushi',
          contact: 'Contact',
          cart: 'Cart',
          cart2: 'Cart',
        },
        buttons: {
          inCart: 'in Cart',
          backToHome: 'Back home page',
          clearCart: 'Clear cart',
          checkout: 'Checkout order for',
          checkoutOrder: 'Checkout order',
          cancel: 'Cancel',
          remove: 'Delete',
          language: 'ukr',
        },
        contactPage: {
          textGeneral: 'You can find us here:',
          myContactPhone: '+380973311444',
          workTime: 'we work: 24/7',
        },
        cartPage: {
          textGeneral: 'Cart is empty',
          textFinish: 'Thank you for your order, we will call you',
        },
        checkoutPage: {
          generalText: 'Checkout Page',
          name: 'Your name',
          namePlaceholder: 'What your name',
          phone: 'Phone number',
          phonePlaceholder: 'For example 0973366111',
          stick: 'Sushi sticks',
          stickPlaceholder: 'How much persons will be eating sushi',
          optional: 'Optional',
          optionalPlaceholder: 'What you need else? please write here',
        },
      },
      items: [
        {
          id: 1,
          name: "Smoked Fish",
          img: 'https://i.ibb.co/pr81cfz/20190919-115312.jpg',
          price: 112,
          currency: '₴',
          text: 'Rice, Nori, Cucumber, Sesame white, Mayonnaise, Smoked salmon',
          weight: '120g',
          active: false,
          count: 1,
        },
        {
          id: 2,
          name: "Philadelphia Green",
          img: 'https://i.ibb.co/jvzzKLs/20190919-115708.jpg',
          price: 127,
          currency: '₴',
          text: 'Rice, Nori, Cream cheese, Cucumber, Sesame white, Avocado, Oil fish',
          weight: '115g',
          active: false,
          count: 1,
        },
        {
          id: 3,
          name: "Set",
          img: 'https://i.ibb.co/7JjFz2Z/20200312-161001-1111.jpg',
          price: 238,
          currency: '₴',
          text: 'Rice, Nori, Cream cheese, Cucumber, Sesame white, Avocado, Oil fish',
          weight: '380g',
          active: false,
          count: 1,
        },
        {
          id: 4,
          name: "Oil Fish",
          img: 'https://i.ibb.co/D8WWHZQ/20190919-115733.jpg',
          price: 108,
          currency: '₴',
          text: 'Rice, Nori, Cream cheese, Cucumber, Sesame white, Avocado, Oil fish',
          weight: '120g',
          active: false,
          count: 1,
        },
        {
          id: 5,
          name: "Masago",
          img: 'https://i.ibb.co/M61hc1q/20190919-115057.jpg',
          price: 139.00,
          currency: '₴',
          text: 'Rice, Nori, Cream Cheese, Cucumber, Masago Caviar, Fresh Salmon',
          weight: '130g',
          count: 1,
        },
        {
          id: 6,
          name: "Hong Kong",
          img: 'https://i.ibb.co/pyGnj2n/20190919-114832.jpg',
          price: 134,
          currency: '₴',
          text: 'Rice, Nori, Cream cheese, Unagi sauce, Cucumber, Sesame white, Chives, Eel, Fresh salmon',
          weight: '160g',
          active: false,
          count: 1,
        },
        {
          id: 7,
          name: "California with tuna",
          img: 'https://i.ibb.co/JtNWXLy/image.jpg',
          price: 134.00,
          currency: '₴',
          text: 'Rice, Nori, Cucumber, Spice mayonnaise, Mayonnaise, Tobiko black caviar, Chives, Tuna, Tobiko red caviar',
          weight: '200g',
          active: false,
          count: 1,
        },
        {
          id: 8,
          name: "cheese roll",
          img: 'https://i.ibb.co/5vKZBND/image.jpg',
          price: 96.00,
          currency: '₴',
          text: 'Rice, Nori, Cream Cheese, Sesame White, Processed Cheese, Feta Cheese',
          weigh: '205g',
          active: false,
          count: 1,
        },
        {
          id: 9,
          name: "Filadelfia with oil fish",
          img: 'https://i.ibb.co/bmbtd7s/image.jpg',
          price: 89.00,
          currency: '₴',
          text: 'Rice, nori, cream cheese, cucumber, black sesame, oil fish',
          weigh: '215g',
          active: false,
          count: 1,
        },
        {
          id: 10,
          name: "Filadelfia",
          img: 'https://i.ibb.co/wQtshLL/image.jpg',
          price: 149.00,
          currency: '₴',
          text: 'Rice, Nori, Cream Cheese, Cucumber, Fresh Salmon',
          weigh: '215g',
          active: false,
          count: 1,
        },
        {
          id: 11,
          name: "Hosomaki with bake salmon",
          img: 'https://i.ibb.co/52c1KLh/image.jpg',
          price: 74.00,
          currency: '₴',
          text: 'Rice, Nori, Bake salmon',
          weigh: '110g',
          active: false,
          count: 1,
        },
        {
          id: 12,
          name: "Hosomaki with Smoked salmon",
          img: 'https://i.ibb.co/kc6tx2W/image.jpg',
          price: 99.00,
          currency: '₴',
          text: 'Rice, Nori, Smoked salmon',
          weigh: '110g',
          active: false,
          count: 1,
        },
      ]
    },

    ukr: {
      localization: {
        navbar: {
          logo: 'Sushi-Home',
          menuItems: 'Суші',
          contact: 'Контакти',
          cart: 'Корзина',
          cart2: '',
        },
        buttons: {
          inCart: 'в корзину',
          backToHome: 'На головну',
          clearCart: 'Очистити корзину',
          checkout: 'Зробити замовлення за',
          checkoutOrder: 'Зробити замовлення',
          cancel: 'Відінити',
          remove: 'X',
          language: 'eng',
        },
        contactPage: {
          textGeneral: 'Ви можете нас знайти тут',
          myContactPhone: '+380973311444',
          workTime: 'ми вам раді: 24/7',
        },
        cartPage: {
          textGeneral: 'Корзина пуста',
          textFinish: 'Дякуємо за замовлення, ми вам передзвонимо.'
        },
        checkoutPage: {
          generalText: 'Стіл замовлення',
          name: 'Ваше імя',
          namePlaceholder: 'Як вас звуть',
          phone: 'телефон',
          phonePlaceholder: 'Наприклад 0973366111',
          stick: 'Кількість паличок',
          stickPlaceholder: 'Скільки чоловік буде їсти суші',
          optional: 'Додатково',
          optionalPlaceholder: 'Якщо вам ще щось потрібно, напишіть тут',

        },
      },
      items: [
        {
          id: 1,
          name: "Копчений лосось",
          img: 'https://i.ibb.co/pr81cfz/20190919-115312.jpg',
          price: 112,
          currency: '₴',
          text: 'Рис, Норі, Огірок, Кунжут білий, Майонез, Лосось копчений',
          weight: '120г',
          active: false,
          count: 1,
        },
        {
          id: 2,
          name: "Філадельфія грін",
          img: 'https://i.ibb.co/jvzzKLs/20190919-115708.jpg',
          price: 127,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Кунжут білий, Авокадо, Масляна риба',
          weight: '115г',
          active: false,
          count: 1,
        },
        {
          id: 3,
          name: "Сет",
          img: 'https://i.ibb.co/7JjFz2Z/20200312-161001-1111.jpg',
          price: 238,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Кунжут білий, Авокадо, Масляна риба',
          weight: '380г',
          active: false,
          count: 1,
        },
        {
          id: 4,
          name: "Масляна риба",
          img: 'https://i.ibb.co/D8WWHZQ/20190919-115733.jpg',
          price: 108,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Кунжут білий, Авокадо, Масляна риба',
          weight: '120г',
          active: false,
          count: 1,
        },
        {
          id: 5,
          name: "Массаго",
          img: 'https://i.ibb.co/M61hc1q/20190919-115057.jpg',
          price: 139.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Ікра масаго, Лосось свіжий',
          weight: '130г',
          count: 1,
        },
        {
          id: 6,
          name: "Гонконг",
          img: 'https://i.ibb.co/pyGnj2n/20190919-114832.jpg',
          price: 134.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, соус Унагі, Огірок, Кунжут білий, Зелена цибуля, Вугор, Лосось свіжий',
          weight: '160г',
          active: false,
          count: 1,
        },
        {
          id: 7,
          name: "Каліфорнія з тунцем",
          img: 'https://i.ibb.co/JtNWXLy/image.jpg',
          price: 134.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, соус Унагі, Огірок, Кунжут білий, Зелена цибуля, Вугор, Лосось свіжий',
          weight: '200г',
          active: false,
          count: 1,
        },
        {
          id: 8,
          name: "Сирний рол",
          img: 'https://i.ibb.co/5vKZBND/image.jpg',
          price: 96.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Кунжут білий, Сир плавлений, Сир фета',
          weight: '205г',
          active: false,
          count: 1,
        },
        {
          id: 9,
          name: "Філадельфія з масляною рибою",
          img: 'https://i.ibb.co/bmbtd7s/image.jpg',
          price: 89.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Кунжут чорний, Масляна риба',
          weight: '215г',
          active: false,
          count: 1,
        },
        {
          id: 10,
          name: "Філадельфія",
          img: 'https://i.ibb.co/wQtshLL/image.jpg',
          price: 149.00,
          currency: '₴',
          text: 'Рис, Норі, Крем-сир, Огірок, Лосось свіжий',
          weight: '215г',
          active: false,
          count: 1,
        },
        {
          id: 11,
          name: "Хосомакі з запеченим лососем",
          img: 'https://i.ibb.co/52c1KLh/image.jpg',
          price: 74.00,
          currency: '₴',
          text: 'Рис, Норі, Лосось запечений',
          weight: '110г',
          active: false,
          count: 1,
        },
        {
          id: 12,
          name: "Хосомакі з копченим лососем",
          img: 'https://i.ibb.co/kc6tx2W/image.jpg',
          price: 99.00,
          currency: '₴',
          text: 'Рис, Норі, Лосось копчений',
          weight: '110г',
          active: false,
          count: 1,
        },
      ]
    }
  }
}
