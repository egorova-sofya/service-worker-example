import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import './Burger.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active: boolean;
  setActive: (payload: boolean) => void;
}

const Burger: FC<Props> = ({ active, setActive }) => {
  return (
    <button
      onClick={() => setActive(!active)}
      className={`navigation__burger burger ${active ? 'burger--active' : ''}`}
    >
      <span className="burger__line"></span>
    </button>
  );
};

export default Burger;
