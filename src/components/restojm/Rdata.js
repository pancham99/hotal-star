import React from 'react'
const Rdata=[
    { 
        id:1,
        sname:'Kiyan, The Roseate',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/close-up-smiley-friends-restaurant_23-2148965380.jpg?w=900&t=st=1678871241~exp=1678871841~hmac=66100e77b0ef3ebb3bae3d5724d0df8bfa7aaf1ebbf11f164d8187665ba153b6',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'562',
       
    },

    {
        id:2,
        sname:'the flying dutchman',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/group-friends-eating-restaurant_23-2148006646.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'320',
    },

    {
        id:3,
        sname:'sultan',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=900&t=st=1678997761~exp=1678998361~hmac=df72c9e10d2174fd37431ab455bbfc82aca51220e9d670be5c819222e35fad16',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'699',
        
    },
    {
        id:4,
        sname:'Bercos',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes_52137-30827.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'499',
    },

    {
        id:5,
        sname:'Barbeque nation',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?w=900&t=st=1678997399~exp=1678997999~hmac=ae604cd7c0b4915e172f59ac99e66ec10932ce69eb8b8d516637bd187279a640',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'432',
    },

    {
        id:6,
        sname:'Syrah',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?w=900&t=st=1678997344~exp=1678997944~hmac=d5325dab975598d66e06b0d724b27b07c74ae0b8d9e8f6aaa134b8a74e3e4b3b',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'646',
    },

    {  
        id:7,
        sname:'capers',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/young-woman-eating-croissants-cafe_1303-20408.jpg?w=900&t=st=1678993034~exp=1678993634~hmac=7fa57b63c8fe3b55c4af33772e359ac4c4a6f83e44c6cfa0eb21d2686c0ea3fb',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'752',
    },
    {
        id:8,
        sname:'Spice Art',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/friends-eating-restaurant_23-2148006623.jpg?w=900&t=st=1678997178~exp=1678997778~hmac=2a7c01878761d48a21917c998d75b4ecfcbb71f48722762b8b3e09f426ee39cd',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'522',
    },
    {
        id:9,
        sname:'Thyme',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/smiling-waiter-bringing-coffee-guest-restaurant_236854-17943.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'488',
    },
    {
        id:10,
        sname:'Hotel Taj Inn',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e9/b6/40/reception.jpg?w=500&h=-1&s=1',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'799',
    },
/// new add for fast food and out door resto Online delivery
    { 
        id:1,
        sname:'The Indian Gril',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/front-view-man-holding-tray-meat-burgers-with-red-onions-fries-with-sauces_141793-12182.jpg?w=900&t=st=1679130840~exp=1679131440~hmac=126c6f635b1283bfc5e840a5879c87377a84306bb9637586209b5a2b5e88cfcf',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'562',
        categry: 'Online delivery'
    },
    { 
        id:2,
        sname:'King of Spices',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/two-hungry-young-men-eating-hot-dogs-cafe-restaurant_179755-125.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'562',
        categry: 'Online delivery'
    },
    { 
        id:3,
        sname:'The Imperial Spice',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/basket-french-fries_160315-461.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'462',
        categry: 'Online delivery'
    },
    { 
        id:4,
        sname:'Great Indian Kitchen',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/asian-friends-couple-eating-pizza-during-party-pizzeria-happy-indian-people-having-fun-together-eating-italian-food-sitting-couch_627829-1247.jpg?w=900&t=st=1679215382~exp=1679215982~hmac=b1a45700e2d80203cdd8e2ca9eb353826b969462d6fbbc0d00b38ff4a7c627f5',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'562',
        categry: 'Fast food'
    },
    { 
        id:5,
        sname:'The Maharaja Club',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/friends-eating-pizza-drinking-coffee_1098-1072.jpg?w=900&t=st=1679130189~exp=1679130789~hmac=7c88f25e9afada1d3698445b90bcacae762172de62d6ed397a5f6562c6d09646',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'562',
        categry: 'Fast food'
    },
    { 
        id:6,
        sname:'The Maharaja Club',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/positive-lifestyle-portrait-happy-exited-pretty-woman-with-pink-hairs-having-dinner-vintage-american-cafe-eating-hot-dog-french-fries-mil-shake-junk-food-cheat-meal-pastel-colors_291049-357.jpg?w=900&t=st=1679130264~exp=1679130864~hmac=dbd0bb1ff9294183725af8f28f3bea64d92e7834fb989012280a17d31cf7b57d',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'372',
        categry: 'Fast food'
    },


    //Outdoor Seating Available
    { 
        id:1,
        sname:'Olive Beach',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/man-having-glass-wine_107420-65895.jpg?w=900&t=st=1679131177~exp=1679131777~hmac=2f786b6e382e315221bbec791848f156274025f60c6dfa858b8e2d1dd9ca38ae',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'699',
        categry: 'Outdoor  Service'
    },
    { 
        id:2,
        sname:'Indian Accent',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/tired-traveller-sitting-looking-away_23-2148258759.jpg?w=900&t=st=1679132240~exp=1679132840~hmac=15d0207c2cff8177ccde1dfd375c0ecdbeb8f5b3e6d7f880405542e6909f723f',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'799',
        categry: 'Outdoor  Service'
    },
    { 
        id:3,
        sname:'Olive Qutub',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/premium-photo/young-woman-sitting-street-cafe-table-browsing-her-cellphone-outdoors-warm-summer-evening-communication-mobile-connection-concept_127089-19824.jpg?w=900',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'799',
        categry: 'Outdoor  Service'
    },
    { 
        id:4,
        sname:'Artusi Ristorante',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/two-young-stylish-women-sitting-cafe_285396-3287.jpg?w=900&t=st=1679131323~exp=1679131923~hmac=4d2750ed7caaf29800de0df56dbad170748ac075fba911e35d331dc348950392',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'399',
        categry: 'Outdoor  Service'
    },
    { 
        id:5,
        sname:'Toast & Tonic',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/woman-with-smartphone-sitting-cafe_23-2147771342.jpg?w=900&t=st=1679131460~exp=1679132060~hmac=e8b7a577aa3af75eef291c0e125b3be8fe408e2e38f766fb0156149e0acc1357',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'449',
        categry: 'Outdoor  Service'
    },
    { 
        id:6,
        sname:'Kiyan, The Roseate',
        offer:'free Reservation ',
        seoffer:'10% off on food & all bev',
        imgsrc:'https://img.freepik.com/free-photo/tired-traveller-sitting-looking-away_23-2148258759.jpg?w=900&t=st=1679132240~exp=1679132840~hmac=15d0207c2cff8177ccde1dfd375c0ecdbeb8f5b3e6d7f880405542e6909f723f',
        foodtype: 'Indian ,Italian, Chinese...',
        Rate:'499',
        categry: 'Outdoor  Service'
    },
];


export default Rdata ; 