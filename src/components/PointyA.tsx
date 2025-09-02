import { JSXElement, children } from 'solid-js';
import { pointyClicable } from '../styles/recipes/clicables.recipe';
import { css } from '../../styled-system/css';

const ArrowishSvg = () => {
  return (
    <svg
      class={css({
        height: '1em',
        fill: 'white',
      })}
      data-bbox="13.05 2.55 33.878 54.8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <g>
        <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
      </g>
    </svg>
  );
};

const PointyA = (props: {
  children?: JSXElement;
  target?: string;
  href?: string;
}) => {
  const c = children(() => props.children ?? <></>);
  return (
    <a
      href={props.href ?? '#'}
      target={props.target ?? '_blank'}
      class={
        // This defines the style
        pointyClicable() + // those properties
        ' ' + // and
        // this formats the svg with modern styling
        css({
          '& > *': {
            transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(247, 148, 33, 0.4)',
            '& > *': {
              fill: 'white',
            },
          },
        })
      }
    >
      {c()}
      <ArrowishSvg />
    </a>
  );
};

export default PointyA;
