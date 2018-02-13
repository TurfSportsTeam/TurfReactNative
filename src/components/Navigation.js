import { StackNavigator, TabNavigator } from 'react-navigation';
import Games from './Games';
import MyGames from './MyGames';
import Profile from './Profile';


//****** TabNavigation docs/ API **********************************
//https://reactnavigation.org/docs/tab-navigator.html
//https://reactnavigation.org/docs/tab-based-navigation.html
//
//**************************************************************** */

const Navigation = TabNavigator({
    Games: {screen: Games},
    MyGames: {screen: MyGames},
    Profile: {screen: Profile},
},
{
    tabBarOptions:{
        labelStyle: {
            fontSize: 12,
        },
        showLabel: true,
        showIcon : true,
        activeTintColor:'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,

        style:{
            backgroundColor: '#26a69a'
        },
        tabStyle: {
    
        },
    },
    tabBarPosition: 'bottom',
});


export default Navigation;