export const navItems2 = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    
    
    {
      name: 'Wiki',
      url: 'wiki',
      icon: 'icon-drop',
      
      children: [
        
        {
          name: 'Home',
          url: 'home',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'ควย'
          }
        },
        
        {
        name: 'Addwiki',
        url: '/addwiki',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      
    ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/coreuiIcons',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/flagsIcons',
          icon: 'icon-star'
        },
        {
          name: 'Font Awesome',
          url: '/fontAwesomeIcon',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/simplelineIcons',
          icon: 'icon-star'
        }
      ]
    },
    
          
    
  ];
  