import { Link } from "react-router-dom";
export const HomeData = [
    {
        id: '1',
        name: 'Place',
        path: '/place',
        description: 'Choose your event location',
        image: 'https://i.pinimg.com/474x/f5/40/df/f540df13ec3debb734df81a3a92e6981.jpg',
        page: <Link to={`/place`}>view</Link>,
    },

    
    {
        id: '2',
        name: 'Decoration',
        path: '/decoration',
        description: 'Who made your design ?',
        image: 'https://i.pinimg.com/474x/00/46/95/004695afb3fc11b65461f237cdd7d164.jpg',
        page: <Link to={`/decoration`}>view</Link>,
    },

    {
        id: '3',
        name: 'Photography',
        path: '/photography',
        description: 'Capture a moment',
        image: 'https://i.pinimg.com/474x/22/eb/b5/22ebb5685d962640a6c7852838f20e45.jpg',
        page: <Link to={`/photography`}>view</Link>,
    },

    {
        id: '4',
        name: 'Catering',
        path: '/catering',
        description: 'Enjoy with your food',
        image: 'https://i.pinimg.com/474x/c4/d6/41/c4d641b49f4e43f2f20ef1633fd6de89.jpg',
        page: <Link to={`/catering`}>view</Link>,
    },
    

];