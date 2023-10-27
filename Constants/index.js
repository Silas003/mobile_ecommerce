import * as Icon from 'react-native-heroicons/solid'
import dress from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/Red.png'
import google from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/google.jpg'
import mastercard from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/mastercard.png'
import paypal from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/paypal.png'
import visa from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/visa.png'
import shoe from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/Yellow.png'

const color='black'
const size=33
export const profile_info=[
    {
        name:'Personal Details',
        icon:<Icon.UserIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'My Order',
        icon:<Icon.ShoppingBagIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'My  Favorite',
        icon:<Icon.HeartIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'Shipping Address',
        icon:<Icon.TruckIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'My Card ',
        icon:<Icon.CreditCardIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'Settings ',
        icon:<Icon.Cog6ToothIcon stroke={color} size={size} color={color}/>
    },
]

export const about=[
    {
        name:'FAQ ',
        icon:<Icon.ExclamationCircleIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'Privacy Policy',
        icon:<Icon.ShieldCheckIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'Notifications',
        icon:<Icon.BellIcon stroke={color} size={size} color={color}/>
    },
    {
        name:'Sign in and security',
        icon:<Icon.LockClosedIcon stroke={color} size={size} color={color}/>
    },
    
    
]
export const payments=[
    {
        name:'Mastercard ',
        image:mastercard
    },
    {
        name:'Paypal',
        image:paypal
    },
    {
        name:'Visa',
        image:visa
    },
    {
        name:'Google pay',
        image:google
    },
    
    
]

export const categories=['Dresses','Jackets','Jeans','Shoes','Bags','Clothes','Jeans','Shorts','Tops','Sneakers','Coats','Lingeries']

export const sort=['New Today','New This Week','Top Sellers']
export const product_items=[
    {
        name:'Roller Rabbit',
        Description:'Vado odelle dress',
        price:194,
        image:dress,
    },
    {
        name:'Alex Arigato',
        Description:'Clean 90 sneakers',
        price:341,
        image:shoe,
    }

]