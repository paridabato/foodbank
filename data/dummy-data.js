import Shop from '../models/shop';

export const SHOPS = [
    new Shop(
        1,
        [1, 2, 3, 4],
        'Hiro sushi',
        'Sushis - Plats asiatiques',
        '39 rue de Sébastopol, Nouméa',
        {
            latitude: -22.272170,
            longitude:  166.443634
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '10:30-18:00',
            'sut': '11:00-16:00',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/Hirosushinc/',
        '',
        [
            {
                'name': 'Nos plateaux',
                'products': [
                    {
                        'name': 'Plateau assortiment sushi',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': 'Maki, nigiri et rolls',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos sushis',
                'products': [
                    {
                        'name': 'Nigiris au saumon avocat x 6 pcs',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Nigiris de crevettes x 8 pcs',
                        'discount': '20%',
                        'price': 1800,
                        'discountPrice': 1440,
                        'description': '',
                        'qty': 3
                    }
                ]
            },
            {
                'name': 'Nos plats',
                'products': [
                    {
                        'name': 'Poulet Cheesy Katsu',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Bœuf pimenté',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 4
                    },
                    {
                        'name': 'Curry de poulet',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 1
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/hiro_logo.png"),
        require("../assets/img/dummy-img/hiro.jpg")
    ),

    new Shop(
        2,
        [1, 2, 3, 4],
        'Lait délices',
        'Yaourts et Fromages blanc',
        '79, rue du 05 Mai',
        {
            latitude: -22.265834,
            longitude:  166.460155
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '10:30-18:00',
            'sut': '11:00-16:00',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/laitdelice.nc//',
        'https://www.laitdelice.nc',
       [
            {
                'name': 'Nos packs',
                'products': [
                    {
                        'name': 'Pack 20 yaourts',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': 'Yaourts, Yaourts à boire, fromage blanc',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos yaourts',
                'products': [
                    {
                        'name': 'Yaourts banane x 8 pcs',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Yaourts nature x 8 pcs',
                        'discount': '20%',
                        'price': 1800,
                        'discountPrice': 1440,
                        'description': '',
                        'qty': 3
                    }
                ]
            },
            {
                'name': 'Nos fromages blancs',
                'products': [
                    {
                        'name': 'Fromage blanc nature 1L',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Fromage blanc vanille 1L',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 4
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/lait_logo.jpg"),
        require("../assets/img/dummy-img/lait.jpg")
    ),

    new Shop(
        3,
        [1, 2, 3, 4],
        'Amorino Anse-Vata',
        'Glacier- Snacking',
        '113, promenade Roger Laroque Nouméa',
        {
            latitude: -22.302464,
            longitude:  166.443864
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '10:30-18:00',
            'sut': '11:00-16:00',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/AmorinoNoumeaAnseVata/',
        '',
       [
            {
                'name': 'Nos packs',
                'products': [
                    {
                        'name': 'Pack 20 vienoiseriess',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': 'Pain au chocolat, pain aux raisins, croissants en fonction des quantités restantes',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos glaces',
                'products': [
                    {
                        'name': 'Glace banane 1L',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Glace vanille 1L',
                        'discount': '20%',
                        'price': 1800,
                        'discountPrice': 1440,
                        'description': '',
                        'qty': 3
                    }
                ]
            },
            {
                'name': 'Nos snackings',
                'products': [
                    {
                        'name': 'Salade caesar',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Panini 4 fromages',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 4
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/amorino_logo.png"),
        require("../assets/img/dummy-img/amorino.jpg")
    ),

    new Shop(
        4,
        [1, 2, 3, 4],
        'Café caché',
        'Jus-Healthy Food',
        '27 Boulevard Extérieur Nouméa',
        {
            latitude: -22.278559,
            longitude:  166.448830
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '8:00-16:00',
            'sut': '8:00-13:00',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/cafecache.nc/',
        '',
       [
            {
                'name': 'Nos buddha bowls',
                'products': [
                    {
                        'name': 'Buddha bowls',
                        'discount': '20%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos jus',
                'products': [
                    {
                        'name': 'Jus detox 1L',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': 'Betteraves, basilic, citron',
                        'qty': 2
                    },
                    {
                        'name': 'Jus boost 1L',
                        'discount': '20%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': 'Citron, gingembre, miel',
                        'qty': 3
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/cache_logo.jpg"),
        require("../assets/img/dummy-img/cache.jpg")
    ),

    new Shop(
        5,
        [1, 2, 3, 4],
        'Au petit café',
        'Gastronomique-Healthy Food',
        '8 Avenue Carcopino Nouméa',
        {
            latitude: -22.280131,
            longitude:  166.442894
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '8:00-16:00',
            'sut': '8:00-13:00',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/auptitcafe.nc/',
        'http://auptitcafe.nc/',
       [
            {
                'name': 'Nos packs',
                'products': [
                    {
                        'name': 'Pack cookies',
                        'discount': '20%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos cheesecakes',
                'products': [
                    {
                        'name': 'Cheescake à la mangue 6pcs',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Cheescake à la pomme 6pcs',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': '',
                        'qty': 3
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/petit_logo.jpg"),
        require("../assets/img/dummy-img/petit.jpg")
    ),

    new Shop(
        6,
        [1, 2, 3, 4],
        'L’atelier groumand Anse-Vata',
        'Boulangerie- Sandwicherie',
        "141 route de l'Anse Vata",
        {
            latitude: -22.279159,
            longitude:  166.448624
        },
        4.5,
        20,
        '92-59-27',
        {
            'workdays': '5:00-19:00',
            'sut': 'Fermé',
            'sun': 'Fermé'
        },
        'https://www.facebook.com/groupegourmand/',
        'https://www.groupegourmand.com/',
       [
            {
                'name': 'Nos packs',
                'products': [
                    {
                        'name': 'Pack 20 vienoiseriess',
                        'discount': '20%',
                        'price': 4500,
                        'discountPrice': 3600,
                        'description': 'Pain au chocolat, pain aux raisins, croissants en fonction des quantités restantes',
                        'qty': 4
                    }
                ]
            },
            {
                'name': 'Nos salades',
                'products': [
                    {
                        'name': 'Salade caesar',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': '',
                        'qty': 2
                    },
                    {
                        'name': 'Salade du chef',
                        'discount': '30%',
                        'price': 1500,
                        'discountPrice': 1050,
                        'description': 'Jambon, œuf, croutons, lardonds',
                        'qty': 3
                    }
                ]
            },
            {
                'name': 'Nos sandwichs',
                'products': [
                    {
                        'name': 'Sandwich poulet',
                        'discount': '30%',
                        'price': 950,
                        'discountPrice': 665,
                        'description': 'Poulet, mayonnaise, tomates',
                        'qty': 2
                    },
                    {
                        'name': 'Sandwich oriental',
                        'discount': '30%',
                        'price': 950,
                        'discountPrice': 665,
                        'description': 'Poulet curry, coleslaw, raisins secs',
                        'qty': 3
                    }
                ]
            }
        ],
        require("../assets/img/dummy-img/atelier_logo.jpg"),
        require("../assets/img/dummy-img/atelier.jpg")
    )
]