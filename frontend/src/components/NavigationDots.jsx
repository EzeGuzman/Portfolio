import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        'Inicio',
        'Acerca de Mi',
        'Trabajos',
        'Habilidades',
        'Testimonios',
        'Contacto',
      ].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        > </a>
      ))}
    </div>
  );
};

export default NavigationDots;
